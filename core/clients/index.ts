import prismaClient from "./prisma-client";
import queryClient from "./query-client";

const clients = {
  query: queryClient,
  prisma: prismaClient
};

export default clients;
