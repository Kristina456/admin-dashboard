import { ConfirmationModal } from '@/components/ConfirmationModal/ConfirmationModal.component';
import { useState } from 'react';
import { User } from '../../types/user.type';
import styles from './Users.module.scss';
import Image from 'next/image';
import { Button } from '@/components/Button/Button.component';

interface Props {
  user: User[];
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  editedUser: User | null;
  handleSetData: (e: React.ChangeEvent<HTMLInputElement>, fieldName: string, newUserData: boolean) => void;
  handleDeleteUser: (user: User) => void;
  handleUpdateUser: (user: User, e: React.MouseEvent<HTMLButtonElement>) => void;
  handleEditUser: (user: User) => void;
}

export function Users({
  user,
  isEditing,
  editedUser,
  handleSetData,
  handleDeleteUser,
  handleUpdateUser,
  setIsEditing,
  handleEditUser,
}: Props) {
  const [itemToDelete, setItemToDelete] = useState<User | null>(null);

  return (
    <div>
      <table className={styles['users']}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last name</th>
            <th>Username</th>
            <th>E-mail</th>
            <th>Date of birth</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {user &&
            user.map(item => (
              <tr key={item.id}>
                <td>
                  {isEditing && editedUser?.id === item.id ? (
                    <input
                      required
                      type="text"
                      placeholder="First name"
                      value={editedUser.firstName}
                      onChange={e => handleSetData(e, 'firstName', false)}
                    />
                  ) : (
                    item.firstName
                  )}
                </td>
                <td>
                  {isEditing && editedUser?.id === item.id ? (
                    <input
                      required
                      type="text"
                      placeholder="Last name"
                      value={editedUser.lastName}
                      onChange={e => handleSetData(e, 'lastName', false)}
                    />
                  ) : (
                    item.lastName
                  )}
                </td>
                <td>
                  {isEditing && editedUser?.id === item.id ? (
                    <input
                      required
                      type="text"
                      placeholder="Username"
                      value={editedUser.username}
                      onChange={e => handleSetData(e, 'username', false)}
                    />
                  ) : (
                    item.username
                  )}
                </td>
                <td>
                  {isEditing && editedUser?.id === item.id ? (
                    <input
                      required
                      type="email"
                      placeholder="Email"
                      value={editedUser.email}
                      onChange={e => handleSetData(e, 'email', false)}
                    />
                  ) : (
                    item.email
                  )}
                </td>
                <td>
                  {isEditing && editedUser?.id === item.id ? (
                    <input
                      required
                      type="date"
                      placeholder="Date of birth"
                      value={editedUser.dateOfBirth}
                      onChange={e => handleSetData(e, 'dateOfBirth', false)}
                    />
                  ) : (
                    item.dateOfBirth
                  )}
                </td>
                <td>
                  <Button variant="ternary" onClick={() => setItemToDelete(item)}>
                    <Image
                      className={styles['users__image']}
                      src="/images/delete.svg"
                      alt="delete"
                      width={25}
                      height={20}
                    />
                  </Button>
                </td>
                <td>
                  {isEditing && editedUser?.id === item.id ? (
                    <>
                      <Button
                        variant="ternary"
                        className={styles['users__image']}
                        onClick={e => handleUpdateUser(item, e)}
                      >
                        <Image src="/images/update.svg" alt="update" width={25} height={20} />
                      </Button>
                      <Button variant="ternary" className={styles['users__image']} onClick={() => setIsEditing(false)}>
                        <Image src="/images/cancel.svg" alt="cancel" width={25} height={20} />
                      </Button>
                    </>
                  ) : (
                    <Button variant="ternary" onClick={() => handleEditUser(item)}>
                      <Image
                        className={styles['users__image']}
                        src="/images/edit.svg"
                        alt="cancel"
                        width={25}
                        height={20}
                      />
                    </Button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {itemToDelete && (
        <ConfirmationModal
          text={'Are you shure you want to delete user?'}
          confirmButton={() => handleDeleteUser(itemToDelete)}
          closeButton={() => setItemToDelete(null)}
        />
      )}
    </div>
  );
}
