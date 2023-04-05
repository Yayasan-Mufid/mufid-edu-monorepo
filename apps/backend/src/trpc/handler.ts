import { router, publicProcedure } from ".";

export default class TrpcHandler {
    public appRouter = router({
        greeting: publicProcedure.query(() => 'hello tRPC v10!'),
      });
}