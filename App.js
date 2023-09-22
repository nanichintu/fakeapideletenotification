import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [fakedata, setFakeData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos";

  const data = async () => {
    const res = await axios.get(url);
    const result = res.data;
    setFakeData(result);
    console.log(result);
  };

  const notify = () =>
    toast.success("Successfully deleted the data", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handlerDelete = (dele) => {
    const updatedData = fakedata.filter((item) => item.id !== dele);
    setFakeData(updatedData);
    notify();
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "blue" }}>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fakedata.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.completed ? "true" : "false"}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => handlerDelete(item.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
