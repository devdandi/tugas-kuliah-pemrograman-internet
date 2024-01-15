// Copyright (c) 2022 Dandi Ramdani
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import type { FastifyReply, FastifyRequest } from "fastify";
import database from "../utils/database";
import type {
  CREATE_SUPPLIERS,
  DELETE_SUPPLIERS,
  READ_SUPPLIERS,
  UPDATE_SUPPLIERS,
  RESTOCK_PRODUCT_SUPPLIERS,
  Response,
} from "../types";

export async function create(
  req: FastifyRequest<CREATE_SUPPLIERS>,
  rep: FastifyReply
) {
  try {
    const { body } = req;
    const create_new_supplier = await database.suppliers
      .create({
        data: {
          name: body.name,
        },
      })
      .catch((e) => {
        throw e;
      });

    return rep.status(201).send({
      status: true,
      message: "New category was created",
      data: create_new_supplier,
    });
  } catch (error) {
    rep.status(400);
    throw error;
  }
}
export async function read(
  req: FastifyRequest<READ_SUPPLIERS>,
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

    const suppliers = await database.suppliers
      .findMany({
        where: {
          id: params.id || undefined,
        },
        select: {
          id: true,
          name: true,
          created: true,
        },
        take: limit,
        skip: offset,
      })
      .catch((e) => {
        throw e;
      });

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
export async function update(
  req: FastifyRequest<UPDATE_SUPPLIERS>,
  rep: FastifyReply
) {
  try {
    const _update_supplier = await database.suppliers
      .update({
        where: {
          id: req.params.id,
        },
        data: {
          name: req.body.name,
        },
      })
      .catch((e) => {
        throw e;
      });

    return rep.send({
      status: true,
      message: "Category was updated",
      data: _update_supplier,
    });
  } catch (error) {
    rep.status(400);
    throw error;
  }
}
export async function _delete(
  req: FastifyRequest<DELETE_SUPPLIERS>,
  rep: FastifyReply
) {
  try {
    await database.suppliers
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
      message: "Supplier was deleted",
    });
  } catch (error) {
    rep.status(400);
    throw error;
  }
}

export async function _restock(
  req: FastifyRequest<RESTOCK_PRODUCT_SUPPLIERS>,
  rep: FastifyReply
) {
  try {
    const { body, params } = req;

    if (!params.productId) {
      const restock_new_product = await database.products.update({
        where: {
          id: params.productId,
        },
        data: {
          stocks: body.stocks,
        },
      });
    }

    return rep.send({
      status: true,
      message: "Supplier was deleted",
    });
  } catch (error) {
    rep.status(400);
    throw error;
  }
}

export default { create, read, update, _delete };
