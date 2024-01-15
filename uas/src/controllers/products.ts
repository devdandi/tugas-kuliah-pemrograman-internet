// Copyright (c) 2022 Dandi Ramdani
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import type { FastifyReply, FastifyRequest } from "fastify";
import database from "../utils/database";
import type {
  CREATE_PRODUCTS,
  DELETE_PRODUCTS,
  READ_PRODUCTS,
  UPDATE_PRODUCTS,
  Response,
} from "../types";

export async function create(
  req: FastifyRequest<CREATE_PRODUCTS>,
  rep: FastifyReply
) {
  try {
    const { body } = req;
    const create_new_products = await database.products
      .create({
        data: {
          categoryId: body.categoryId,
          supplierId: body.supplierId,
          name: body.name,
          stocks: body.stocks,
          price: body.price,
        },
      })
      .catch((e) => {
        throw e;
      });

    return rep.status(201).send({
      status: true,
      message: "New products was created",
      data: create_new_products,
    });
  } catch (error) {
    rep.status(400);
    throw error;
  }
}
export async function read(
  req: FastifyRequest<READ_PRODUCTS>,
  rep: FastifyReply
) {
  try {
    const { query, params } = req;
    const page = query.page || 1;
    const limit = query.limit || 10;
    const offset = (page - 1) * limit;

    const count = await database.products
      .count({
        where: {
          id: params.id || undefined,
        },
      })
      .catch((e) => {
        throw e;
      });

    const products = await database.products
      .findMany({
        where: {
          id: params.id || undefined,
        },
        select: {
          id: true,
          name: true,
          category: {
            select: {
              id: true,
              name: true,
            },
          },
          supplier: {
            select: {
              id: true,
              name: true,
            },
          },
          created: true,
        },
        take: limit,
        skip: offset,
      })
      .catch((e) => {
        throw e;
      });

    const response: Response<typeof products> = {
      status: true,
      count: count,
      data: products,
      total_pages: Math.ceil(count / limit),
    };

    return rep.send(response);
  } catch (error) {
    rep.status(400);
    throw error;
  }
}
export async function update(
  req: FastifyRequest<UPDATE_PRODUCTS>,
  rep: FastifyReply
) {
  try {
    const { body, params } = req;
    const _update_products = await database.products
      .update({
        where: {
          id: params.id,
        },
        data: {
          categoryId: body.categoryId,
          supplierId: body.supplierId,
          name: body.name,
          stocks: body.stocks,
          price: body.price,
        },
      })
      .catch((e) => {
        throw e;
      });

    return rep.send({
      status: true,
      message: "Products was updated",
      data: _update_products,
    });
  } catch (error) {
    rep.status(400);
    throw error;
  }
}
export async function _delete(
  req: FastifyRequest<DELETE_PRODUCTS>,
  rep: FastifyReply
) {
  try {
    await database.products
      .delete({
        where: {
          id: req.params.id,
        },
      })
      .catch((e) => {
        throw e;
      });

    return rep.send({
      status: true,
      message: "Products was deleted",
    });
  } catch (error) {
    rep.status(400);
    throw error;
  }
}

export default { create, read, update, _delete };
