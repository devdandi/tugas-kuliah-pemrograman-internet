// Copyright (c) 2022 Dandi Ramdani
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import type { FastifyInstance } from "fastify";
import { products } from "../controllers";

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
    products.read
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
    products.read
  );

  instance.post(
    "/",
    {
      schema: {
        body: {
          required: ["name", "supplierId", "categoryId", "stocks", "price"],
          properties: {
            name: { type: "string" },
            supplierId: { type: "string" },
            categoryId: { type: "string" },
            stocks: { type: "number" },
            price: { type: "number" },
          },
        },
      },
    },
    products.create
  );
  instance.put(
    "/:id",
    {
      schema: {
        body: {
          required: ["name", "supplierId", "categoryId", "stocks", "price"],
          properties: {
            name: { type: "string" },
            supplierId: { type: "string" },
            categoryId: { type: "string" },
            stocks: { type: "number" },
            price: { type: "number" },
          },
        },
        params: {
          id: { type: "string" },
        },
      },
    },
    products.update
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
    products._delete
  );
  done();
}

export default routes;
