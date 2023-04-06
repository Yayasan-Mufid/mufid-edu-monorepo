import { router, publicProcedure } from '.';

export class TrpcHandler {
  public appRouter() {
    return router({
      greeting: publicProcedure.query(() => 'hello tRPC v10!'),
    });
  }
}
