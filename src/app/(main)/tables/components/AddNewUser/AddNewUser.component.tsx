interface Props {
  newUser: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    dateOfBirth: string;
  };
  handleSetData: (e: React.ChangeEvent<HTMLInputElement>, field: string, newUserData: boolean) => void;
  handleCreateUser: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function AddNewUser({ newUser, handleSetData, handleCreateUser }: Props) {
  return (
    <form onSubmit={e => handleCreateUser(e)}>
      <input
        type="text"
        placeholder="First name"
        value={newUser.firstName}
        onChange={e => handleSetData(e, 'firstName', true)}
      />
      <input
        type="text"
        placeholder="Last name"
        value={newUser.lastName}
        onChange={e => handleSetData(e, 'lastName', true)}
      />
      <input
        type="text"
        placeholder="Username"
        value={newUser.username}
        onChange={e => handleSetData(e, 'username', true)}
      />
      <input type="email" placeholder="E-mail" value={newUser.email} onChange={e => handleSetData(e, 'email', true)} />
      <input
        type="date"
        placeholder="Date of birth"
        value={newUser.dateOfBirth}
        onChange={e => handleSetData(e, 'dateOfBirth', true)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
