// react hooks
import { useState } from "react";

// state
// static state (text)
import { userManagementPageText } from "../../assets/staticState/staticText";
// user managment function component
const UserManagment = () => {
  // state
  // for development
  // mock users data
  const users = [
    {
      _id: 12145,
      name: "FirstNameText LastNameTest",
      email: "test@test.test",
      role: "admin",
    },
  ];
  //   state for handling user form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  //   functions
  // handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //   handle form submit for creating new user
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // reset the form after submition
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };

  //   hanlde role change function
  const handleRoleChange = (userId, newRole) => {
    console.log({
      id: userId,
      role: newRole,
    });
  };

  //   handle delete user
  const handleDeleteUser = (userId) => {
    if (window.confirm(userManagementPageText.deleteConfirmationMessage)) {
      console.log("deleted user with id", userId);
    }
  };

  // return
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* header */}
      <h2 className="text-2xl font-bold mb-6">
        {userManagementPageText.header}
      </h2>

      {/* add new user form */}
      <div className="p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4">
          {userManagementPageText.addNewUserText}
        </h3>

        {/* form */}
        <form onSubmit={handleSubmit}>
          {/* name field */}
          <div className="mb-4">
            <label className="block text-gray-700">
              {userManagementPageText.nameLabelText}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* email field */}
          <div className="mb-4">
            <label className="block text-gray-700">
              {userManagementPageText.emailLabelText}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* password field */}
          <div className="mb-4">
            <label className="block text-gray-700">
              {userManagementPageText.passwordLabelText}
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* role field */}
          <div className="mb-4">
            <label className="block text-gray-700">
              {userManagementPageText.roleLabelText}
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="customer">
                {userManagementPageText.customerText}
              </option>
              <option value="amdmin">{userManagementPageText.adminText}</option>
            </select>
          </div>

          {/* button */}
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            {userManagementPageText.addUserBtnText}
          </button>
        </form>
      </div>

      {/* user list management */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        {/* table */}
        <table className="min-w-full text-left text-gray-500">
          {/* head */}
          <thead className="bg-gray-100 text-sm uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4 text-center">
                {userManagementPageText.nameLabelText}
              </th>
              <th className="py-3 px-4 text-center">
                {userManagementPageText.emailLabelText}
              </th>
              <th className="py-3 px-4 text-center">
                {userManagementPageText.roleLabelText}
              </th>
              <th className="py-3 px-4 text-center">
                {userManagementPageText.actionsLabelText}
              </th>
            </tr>
          </thead>

          {/* boddy */}
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="border-b hover:bg-gray-50 text-center">
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-4 text-center">{user.email}</td>
                <td className="p-4 text-center">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="p-2 border rounded"
                  >
                    <option value="customer">
                      {userManagementPageText.customerText}
                    </option>
                    <option value="admin">
                      {userManagementPageText.adminText}
                    </option>
                  </select>
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-red"
                  >
                    {userManagementPageText.deleteText}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagment;
