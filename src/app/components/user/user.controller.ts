import { DocumentQuery } from "mongoose";
import { User } from "./user.model";
import repository from './user.repository';


function getUsers(): DocumentQuery<User[], User, {}>{
  return repository.getUsers();
}

function getUser(userId: string): DocumentQuery<User[], User, {}>{
  return repository.getUser(userId);
}

export default { getUsers, getUser };