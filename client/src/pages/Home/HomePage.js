import React, { useState, useEffect } from "react";
import TaskList from "../../components/TaskList";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
function Home() {
  const [tasks, setTasks] = useState([]);
  // axios.post('/api/items/YourModel', data);
  // axios.get('/api/items/YourModel');
  // axios.get('/api/items/YourModel/:id');
  // axios.put('/api/items/YourModel/:id', data);
  // axios.delete('/api/items/YourModel/:id');
  // .get("http://localhost:5000/api/items/Task?sort=dueDate&order=asc&limit=10&filter={\"completed\":false}")

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/items/Task?sort=dueDate&order=desc&limit=10"
      )

      .then((response) => {
        const fetchedTasks = response.data;
        console.log("fetchedTasks :", fetchedTasks);
        const demoTasks = [
          {
            id: 1,
            name: "Organize conference agenda",
            user: "Eric Wallace",
            priority: "High",
            status: "Finished",
            dueDate: "2023-04-30",
          },
          {
            id: 2,
            name: "Prepare conference content",
            user: "Lucas Fadel",
            priority: "Medium",
            status: "Finished",
            dueDate: "2023-05-05",
          },
          {
            id: 3,
            name: "Reserve rooms and catering",
            user: "Lucas Fadel",
            priority: "High",
            status: "In progress",
            dueDate: "2023-05-10",
          },
          {
            id: 4,
            name: "Send Save the Date email",
            user: "Robert Cantu",
            priority: "High",
            status: "Finished",
            dueDate: "2023-04-20",
          },
          {
            id: 5,
            name: "Print conference materials",
            user: "Robert Cantu",
            priority: "Low",
            status: "In progress",
            dueDate: "2023-04-25",
          },
          {
            id: 6,
            name: "Send official invitation",
            user: "Eric Wallace",
            priority: "High",
            status: "To do",
            dueDate: "2023-05-01",
          },
          {
            id: 7,
            name: "Prepare report for team meeting",
            user: "Leila Kuphal",
            priority: "Medium",
            status: "Finished",
            dueDate: "2023-04-15",
          },
          {
            id: 8,
            name: "Organize team event",
            user: "Eric Wallace",
            priority: "Low",
            status: "In progress",
            dueDate: "2023-05-20",
          },
        ];
        setTasks([...fetchedTasks, ...demoTasks]);
        // setTasks(demoTasks);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-gray-100 ">
      <Header />
      <div className="flex flex-col items-center justify-center  ">
        <TaskList tasks={tasks} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
