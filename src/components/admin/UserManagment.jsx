// react hooks
import { useState } from "react";

// state
// static state (text)
import { managementPageText } from "../../assets/staticState/staticText";
// user managment function component
const UserManagment = () => {
  // state
  // for development
  // mock users data
  const users = [
    {
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

  // return
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* header */}
      <h2 className="text-2xl font-bold mb-6">{managementPageText.header}</h2>

      {/* add new user form */}
      <div className="p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4">
          {managementPageText.addNewUserText}
        </h3>

        {/* form */}
        <form onSubmit={handleSubmit}>
          {/* name field */}
          <div className="mb-4">
            <label className="block text-gray-700">
              {managementPageText.nameLabelText}
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
              {managementPageText.emailLabelText}
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
              {managementPageText.passwordLabelText}
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
              {managementPageText.roleLabelText}
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="customer">
                {managementPageText.customerText}
              </option>
              <option value="amdmin">{managementPageText.adminText}</option>
            </select>
          </div>

          {/* button */}
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            {managementPageText.addUserBtnText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserManagment;
