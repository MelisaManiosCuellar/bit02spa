import Layout from '../../Components/Layout'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Widget from "../widget/Widget";
import React, { useEffect, useState } from "react";


const PanelControl = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // console.log(users);
  return (
    <Layout>
      <div className="widgets grid grid-rows-4 grid-flow-col gap-4 m-4">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      <div>
    <TableContainer component={Paper} className="table-auto">
      <Table sx={{ maxWidth: 1366}} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-cyan-400 ">
            <TableCell className="tableCell ">ID</TableCell>
            <TableCell className="tableCell">User-Id</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Product-Id</TableCell>
            <TableCell className="tableCell">Quantity</TableCell>
            <TableCell className="tableCell">Product-Id</TableCell>
            <TableCell className="tableCell">Quantity</TableCell>
            <TableCell className="tableCell">Product-Id</TableCell>
            <TableCell className="tableCell">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {row.userId}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              {row.products.map((product) => (
                    <React.Fragment key={product.productId}>
                      <TableCell className="tableCell">{product.productId}</TableCell>
                      <TableCell className="tableCell">{product.quantity}</TableCell>
                    </React.Fragment>
                  ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </Layout>
  );
};

export default PanelControl