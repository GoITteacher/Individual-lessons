import { faker } from '@faker-js/faker';

export function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),

  };
}

export function getUsers(len){
  const result = [];
  for(let i=0;i<len;i++){
    result.push(createRandomUser())
  }
  return result;
}