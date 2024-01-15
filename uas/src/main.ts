// Copyright (c) 2022 Dandi Ramdani
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import fastify from "fastify";
import { config } from "dotenv";
import { categories, suppliers, products } from "./routes";

const configuration = config();
if (configuration.error) {
  console.log("Cannot parse env file");
  process.exit(1);
}

const App = fastify({
  logger: {
    level: process.env.ENV === "production" ? "warning" : "debug",
    prettyPrint:
      process.env.ENV === "production"
        ? false
        : {
            translateTime: "SYS:HH:MM:ss",
            ignore: "pid,hostname",
          },
  },
});

App.register(categories, { prefix: "/api/v1/categories" });
App.register(suppliers, { prefix: "/api/v1/suppliers" });
App.register(products, { prefix: "/api/v1/products" });
App.register(products, { prefix: "/api/v1/transactions" });

async function main() {
  try {
    await App.listen(8000, "0.0.0.0");
  } catch (error) {
    App.log.error(error);
    process.exit(1);
  }
}

main();
