"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import clients from "../clients";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={clients.query}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
