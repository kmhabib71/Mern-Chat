import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskForm from "../../components/TaskForm";

const AddTask = () => {
  return (
    <div>
      <Header />
      <TaskForm />
      <Footer />
    </div>
  );
};

export default AddTask;
