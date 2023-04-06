import { initTRPC } from '@trpc/server';
import * as TrpcExpress from '@trpc/server/adapters/express';

const t = initTRPC.create();

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
export function createContext({
  req,
  res,
}: TrpcExpress.CreateExpressContextOptions) {
  console.log(res);
  return {
    user: req.user,
  };
}
