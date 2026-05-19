import { User } from '@/app/(main)/tables/types/user.type';
import tableData from './table-data.json';
import { randomUUID } from 'crypto';

let _data = tableData;

export const getData = () => {
  return _data;
};

export const addData = (user: User): User => {
  user.id = randomUUID();
  _data.push(user);
  return user;
};

export const removeData = (id: string): boolean => {
  const index = _data.findIndex(item => item.id === id);
  if (index === -1) {
    return false;
  }
  _data.splice(index, 1);
  return true;
};

export const updateData = (id: string, user: User) => {
  const index = _data.findIndex(item => item.id === id);
  _data[index] = {
    ...user,
    id: id,
  };
  return true;
};
