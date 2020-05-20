import { DocumentQuery } from "mongoose";
import { User } from './user.model';
import model from './user.model';


function getUsers(): DocumentQuery<User[], User, {}>{
  return model.find();
}

function getUser(userId: string): DocumentQuery<User[], User, {}>{
  return model.find({_id: userId});
}

export default { getUsers, getUser };
