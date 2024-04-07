import React, { useEffect, useState } from 'react';
import User from './userModel';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await User.find({});
      setUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <p>{user.fullName}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <p>{user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;