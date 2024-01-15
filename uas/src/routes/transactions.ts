// Copyright (c) 2022 Dandi Ramdani
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import type { FastifyInstance } from "fastify";
import { transactions } from "../controllers";

export async function routes(
  instance: FastifyInstance,
  options = {},
  done: (err?: Error) => void
) {
  instance.get(
    "/",
    {
      schema: {
        querystring: {
          page: {
            type: "number",
            default: 1,
          },
          limit: {
            type: "number",
            default: 10,
          },
        },
      },
    },
    transactions.read
  );
  instance.get(
    "/:id",
    {
      schema: {
        params: {
          id: { type: "string" },
        },
      },
    },
    transactions.read
  );

  instance.post(
    "/",
    {
      schema: {
        body: {
          properties: {
            productId: { type: "string" },
            quantities: { type: "string" },
          },
        },
      },
    },
    transactions.create
  );

  done();
}

export default routes;
