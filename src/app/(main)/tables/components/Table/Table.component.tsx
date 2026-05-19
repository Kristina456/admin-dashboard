'use client';
import { useEffect, useState } from 'react';
import { User } from '../../types/user.type';
import { AddNewUser } from '../AddNewUser/AddNewUser.component';
import { UsersData } from '../UsersData/UsersData.component';
import styles from './Table.module.scss';

export const emptyUser = {
  id: '',
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  dateOfBirth: '',
};

export function Table() {
  const [user, setUser] = useState<User[]>([]);
  const [newUser, setNewUser] = useState(emptyUser);
  const [editedUser, setEditedUser] = useState<User | null>(null);
  const [error, setError] = useState<string | undefined>();
  const [isEditing, setIsEditing] = useState(false);

  const handleSetData = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string, newUserData: boolean) => {
    if (newUserData) {
      setNewUser({
        ...newUser,
        [fieldName]: e.target.value,
      });
    } else {
      setEditedUser({
        ...(editedUser || emptyUser),
        [fieldName]: e.target.value,
      });
    }
  };

  async function getUsers() {
    try {
      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error('API_URL is not defined in the environment variables');
      }
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/tables`);
      const responseData = await response.json();
      setUser(responseData);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else setError('An unexpected error occurred while fetching users');
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  async function handleCreateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/tables`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      getUsers();
      setNewUser(emptyUser);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else setError('An unexpected error occurred while creating a user');
    }
  }

  async function handleDeleteUser(item: User) {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/tables/${item.id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      await getUsers();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else setError('An unexpected error occurred while deleting a user');
    }
  }
  const handleEditUser = (item: User) => {
    setEditedUser(item);
    setIsEditing(true);
  };

  async function handleUpdateUser(item: User, e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsEditing(false);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/tables/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify(editedUser),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      getUsers();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else setError('An unexpected error occurred while deleting a user');
    }
    setEditedUser(emptyUser);
  }

  return (
    <section className={styles['table']}>
      <AddNewUser
        newUser={{
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          username: newUser.username,
          email: newUser.email,
          dateOfBirth: newUser.dateOfBirth,
        }}
        handleSetData={handleSetData}
        handleCreateUser={handleCreateUser}
      />
      <UsersData
        user={user}
        isEditing={isEditing}
        editedUser={editedUser}
        handleSetData={handleSetData}
        handleDeleteUser={handleDeleteUser}
        handleUpdateUser={handleUpdateUser}
        setIsEditing={setIsEditing}
        handleEditUser={handleEditUser}
      />
    </section>
  );
}
