import express, { Express } from "express";
import morgan from "morgan";
import mongoose from "./modules/repository/mongoose.module";
import consoleMessage from "./modules/log/console-message.module"
import components from "app/components"

async function main(){
  const server: Express = express();
  const port: number = parseInt(process.env.TS_API_TEMPLATE_PORT || '3000');

  server.use(express.json());
  server.use(morgan('dev'));
  server.use('/api', ...components);

  try {
    await mongoose.connect();
    consoleMessage.success('Database connection successful');
    
    server.listen(port, () => {
      consoleMessage.success(`Server listening on port ${port}`);
    });
  } 
  catch (error) {
    consoleMessage.error(`Failed database connection`);
  }

}
export default { main };
