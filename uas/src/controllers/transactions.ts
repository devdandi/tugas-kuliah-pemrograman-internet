// Copyright (c) 2022 Dandi Ramdani
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import type { FastifyReply, FastifyRequest } from "fastify";
import database from "../utils/database";
import type { READ_TRANSACTION, Response, CREATE_TRANSACTION } from "../types";

export async function read(
  req: FastifyRequest<READ_TRANSACTION>,
  rep: FastifyReply
) {
  try {
    const { query, params } = req;
    const page = query.page || 1;
    const limit = query.limit || 10;
    const offset = (page - 1) * limit;

    const count = await database.suppliers
      .count({
        where: {
          id: params.id || undefined,
        },
      })
      .catch((e) => {
        throw e;
      });

    const suppliers = await database.transactions
      .findMany({
        where: {
          id: params.id || undefined,
        },
        select: {
          id: true,
          product: {
            select: {
              id: true,
              name: true,
              price: true,
              supplier: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
          quantities: true,
          payment_status: true,
          created: true,
        },
        take: limit,
        skip: offset,
      })
      .catch((e) => {
        throw e;
      });

    suppliers.map((supplier) => ({
      ...supplier,
      total: supplier.product.price * supplier.quantities,
    }));

    const response: Response<typeof suppliers> = {
      status: true,
      count: count,
      data: suppliers,
      total_pages: Math.ceil(count / limit),
    };

    return rep.send(response);
  } catch (error) {
    rep.status(400);
    throw error;
  }
}

export async function create(
  req: FastifyRequest<CREATE_TRANSACTION>,
  rep: FastifyReply
) {
  try {
    const { body } = req;
    const create_new_transaction = await database.transactions
      .create({
        data: {
          productId: body.productId,
          quantities: body.quantities,
        },
      })
      .catch((e) => {
        throw e;
      });

    return rep.status(201).send({
      status: true,
      message: "New transactions was created",
      data: create_new_transaction,
    });
  } catch (error) {
    rep.status(400);
    throw error;
  }
}

export default { read, create };
