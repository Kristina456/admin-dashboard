'use client';
import { useUsers } from '@/hooks/useUsers';
import { AddNewUser } from '../AddNewUser/AddNewUser.component';
import { Users } from '../Users/Users.component';
import styles from './Table.module.scss';

export function Table() {
  const {
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
    showModal,
    setShowModal,
    loading,
  } = useUsers();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles['table']}>
      <div className={styles['table__new-user']}>
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
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
      <div className={styles['table__user-data']}>
        <Users
          user={user}
          isEditing={isEditing}
          editedUser={editedUser}
          handleSetData={handleSetData}
          handleDeleteUser={handleDeleteUser}
          handleUpdateUser={handleUpdateUser}
          setIsEditing={setIsEditing}
          handleEditUser={handleEditUser}
        />
      </div>
    </div>
  );
}
