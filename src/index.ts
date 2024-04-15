import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import db from "./db";
import { buildSchema } from "type-graphql";
import CountryResolver from "./resolvers/country.resolver";
import ContinentResolver from "./resolvers/continent.resolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [CountryResolver, ContinentResolver],
  });
  const server = new ApolloServer<{}>({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req, res }) => {
      return {};
    },
  });

  await db.initialize();

  console.log(`🚀  Server ready at: ${url}`);
}
main();