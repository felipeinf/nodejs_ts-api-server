import mongoose, { ConnectionOptions } from "mongoose";


function connect(): Promise<typeof mongoose> {
  const options: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
  
  return mongoose.connect(process.env.TS_API_TEMPLATE_MONGO_URI || '', options);
}

export default { connect };
