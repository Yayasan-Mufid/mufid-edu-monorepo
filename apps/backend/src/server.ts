import 'module-alias/register';
import App from './app';
import Handler from './handlers/handler';

const port = parseInt(process.env.BACKEND_PORT || '5000', 10);

const app = new App([new Handler()], port);

app.listen();
