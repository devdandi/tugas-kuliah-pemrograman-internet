// Copyright (c) 2022 Dandi Ramdani
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import type { FastifyInstance } from "fastify";
import { categories } from "../controllers";

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
    categories.read
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
    categories.read
  );

  instance.post(
    "/",
    {
      schema: {
        body: {
          required: ["name"],
          properties: {
            name: { type: "string" },
          },
        },
      },
    },
    categories.create
  );
  instance.put(
    "/:id",
    {
      schema: {
        body: {
          required: ["name"],
          properties: {
            name: { type: "string" },
          },
        },
        params: {
          id: { type: "string" },
        },
      },
    },
    categories.update
  );
  instance.delete(
    "/:id",
    {
      schema: {
        params: {
          id: { type: "string" },
        },
      },
    },
    categories._delete
  );
  done();
}

export default routes;
