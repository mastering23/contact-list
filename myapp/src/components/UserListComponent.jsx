const UserListComponent = ({ users, onUserClick }) => {
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <ul>
            <li onClick={() => onUserClick(user)} style={{ cursor: 'pointer' }}>
              Name: {user.name}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserListComponent;
