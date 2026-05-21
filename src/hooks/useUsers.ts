import { useEffect, useState } from 'react';
import { User } from './../app/(main)/tables/types/user.type';

export const emptyUser = {
  id: '',
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  dateOfBirth: '',
};

export function useUsers() {
  const [user, setUser] = useState<User[]>([]);
  const [newUser, setNewUser] = useState(emptyUser);
  const [editedUser, setEditedUser] = useState<User | null>(null);
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const handleEditUser = (item: User) => {
    setEditedUser(item);
    setIsEditing(true);
  };

  async function getUsers() {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/tables`);
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      setUser(responseData);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else setError('An unexpected error occurred while fetching users');
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/tables`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      getUsers();
      setNewUser(emptyUser);
      setShowModal(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else setError('An unexpected error occurred while creating a user');
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteUser(item: User) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/tables/${item.id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      await getUsers();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else setError('An unexpected error occurred while deleting a user');
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdateUser(item: User, e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsEditing(false);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/tables/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify(editedUser),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      getUsers();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else setError('An unexpected error occurred while deleting a user');
    } finally {
      setLoading(false);
    }
    setEditedUser(emptyUser);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return {
    newUser,
    user,
    editedUser,
    error,
    isEditing,
    handleSetData,
    handleCreateUser,
    handleDeleteUser,
    handleEditUser,
    handleUpdateUser,
    setIsEditing,
    loading,
    showModal,
    setShowModal,
    setError,
  };
}
