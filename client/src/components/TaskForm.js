import axios from "axios";
import React, { useState } from "react";

const TaskForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("TODO");
  const [dueDate, setDueDate] = useState("");
  const [user, setUser] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state variable
  const [error, setError] = useState(""); // New state variable

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    axios
      .post("http://localhost:5000/api/items/Task", {
        name,
        description,
        priority,
        status,
        dueDate,
        user,
      })
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        window.location.href = "/";
        setSuccessMessage("Task created successfully!"); // Set success message
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
        setError(error.response.data.message); // Set error message
        setTimeout(() => {
          setError("");
        }, 5000);
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center mt-8">Create Task</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700">
            Priority:
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700">
            Status:
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
            <option value="TO DO">TODO</option>
            <option value="IN_PROGRESS">IN PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="dueDate" className="block text-gray-700">
            Due Date:
          </label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="user" className="block text-gray-700">
            User:
          </label>
          <input
            type="text"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
          Create Task
        </button>
      </form>
      {successMessage && <p className=" text-green-600">{successMessage}</p>}{" "}
      {/* Display success message */}
      {error && <p className=" text-red-600">{error}</p>}{" "}
      {/* Display success message */}
    </div>
  );
};

export default TaskForm;
