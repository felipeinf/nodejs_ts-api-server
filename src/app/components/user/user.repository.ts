import { DocumentQuery } from "mongoose";
import { User } from './user.model';
import model from './user.model';


function getUsers(): DocumentQuery<User[], User, {}>{
  return model.find();
}

function getUser(userId: string): DocumentQuery<User[], User, {}>{
  return model.find({_id: userId});
}

function addUser(user: User): Promise<User> {
  return model.create(user);
}

export default { getUsers, getUser, addUser };
