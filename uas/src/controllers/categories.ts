// Copyright (c) 2022 Dandi Ramdani
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import type { FastifyReply, FastifyRequest } from "fastify";
import database from "../utils/database";
import type {
  CREATE_CATEGORIES,
  DELETE_CATEGORIES,
  READ_CATEGORIES,
  UPDATE_CATEGORIES,
  Response,
} from "../types";

export async function create(
  req: FastifyRequest<CREATE_CATEGORIES>,
  rep: FastifyReply
) {
  try {
    const { body } = req;
    const create_new_categories = await database.categories
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
      data: create_new_categories,
    });
  } catch (error) {
    rep.status(400);
    throw error;
  }
}
export async function read(
  req: FastifyRequest<READ_CATEGORIES>,
  rep: FastifyReply
) {
  try {
    const { query, params } = req;
    const page = query.page || 1;
    const limit = query.limit || 10;
    const offset = (page - 1) * limit;

    const count = await database.categories
      .count({
        where: {
          id: params.id || undefined,
        },
      })
      .catch((e) => {
        throw e;
      });

    const categories = await database.categories
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

    const response: Response<typeof categories> = {
      status: true,
      count: count,
      data: categories,
      total_pages: Math.ceil(count / limit),
    };

    return rep.send(response);
  } catch (error) {
    rep.status(400);
    throw error;
  }
}
export async function update(
  req: FastifyRequest<UPDATE_CATEGORIES>,
  rep: FastifyReply
) {
  try {
    const _update_categories = await database.categories
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
      data: _update_categories,
    });
  } catch (error) {
    rep.status(400);
    throw error;
  }
}
export async function _delete(
  req: FastifyRequest<DELETE_CATEGORIES>,
  rep: FastifyReply
) {
  try {
    await database.categories
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
      message: "Category was deleted",
    });
  } catch (error) {
    rep.status(400);
    throw error;
  }
}

export default { create, read, update, _delete };
