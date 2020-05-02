import express, { Express } from "express";

function main(){
  const server: Express = express();
  const port: number = parseInt(process.env.TS_API_TEMPLATE_PORT || '3000');

  server.use(express.json());
  server.listen(port, () => console.log(`Server listening on port ${port}`));
}
export default { main };
