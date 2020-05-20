import { DocumentQuery } from "mongoose";
import { User } from './user.model';
import model from './user.model';


function getUsers(): DocumentQuery<User[], User, {}>{
  return model.find();
}

export default { getUsers };
