import express, { Application } from 'express';
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';
import { createContext } from './trpc';
import TrpcHandler from './trpc/handler';

export default class App {
  public app: Application;
  public trpcHandler: TrpcHandler;

  public port: number;
  constructor(controllers: any, port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddleware();
    this.initializeController(controllers);
  }

  private initializeMiddleware(): void {
    this.app.use(cors());
  }

  private initializeController(controllers: any): void {
    this.app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router: this.trpcHandler.appRouter,
        createContext: (
          expressContext: trpcExpress.CreateExpressContextOptions,
        ) => createContext,
      }),
    );
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`This service listening on port ${this.port}`);
    });
  }
}
