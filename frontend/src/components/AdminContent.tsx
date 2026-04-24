import React, { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";

const AdminContent = () => {
  const { users, getUsers } = useChatStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      await getUsers();
      setLoading(false);
    };

    fetch();
  }, [getUsers]);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="w-full h-full overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Users</h2>

      <table className="table w-full">
        <thead>
          <tr>
            <th>List</th>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user: any, index: number) => (
            <tr key={user._id}>
              <td>{index+1}</td>
              <td>{user.email}</td>
              <td>{user.fullName}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {users.length === 0 && (
        <p className="text-sm text-gray-500 mt-4">No users found.</p>
      )}
    </div>
  );
};

export default AdminContent;