import express, { Express } from "express";
import morgan from "morgan";

function main(){
  const server: Express = express();
  const port: number = parseInt(process.env.TS_API_TEMPLATE_PORT || '3000');

  server.use(express.json());
  server.use(morgan('dev'));

  server.listen(port, () => console.log(`Server listening on port ${port}`));
}
export default { main };
