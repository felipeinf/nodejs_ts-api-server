import { DocumentQuery } from "mongoose";
import { User } from "./user.model";
import repository from './user.repository';


function getUsers(): DocumentQuery<User[], User, {}>{
  return repository.getUsers();
}

function getUser(userId: string): DocumentQuery<User[], User, {}>{
  return repository.getUser(userId);
}

function addUser(user: User): Promise<User>{
  user.createdAt = new Date();
  user.updateAt = user.createdAt;
  
  return repository.addUser(user);
}

export default { getUsers, getUser, addUser };