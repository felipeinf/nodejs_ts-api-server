import { Schema, model, Document } from "mongoose";


export interface User extends Document {
  _id: string;
  email: string;
  password: string;
  name: string;
  updateAt?: Date;
  createdAt?: Date;
};

const schema: Schema<User> = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  updateAt: { type: String },
  createdAt: { type: String }
});

export default model<User>('User', schema);
