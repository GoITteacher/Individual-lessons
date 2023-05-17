import { Responses } from "../helpers/response";
const users = [1, 2, 3, 4, 5, 4, 6, 7, 78, 901];

export const createUser = (event) => {};

export const getUsers = (event) => {
  console.log("Hello");
  return {
    statusCode: 200,
    body: "Hello",
  };
};

export const updateUser = (event) => {
  // const =users.push(event.)
  return Responses._200("Update User");
};
