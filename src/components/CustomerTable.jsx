import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  TextField,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomerTable = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [customers] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@mail.com",
      city: "New York",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@mail.com",
      city: "Los Angeles",
      phone: "987-654-3210",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@mail.com",
      city: "Chicago",
      phone: "456-789-1234",
    },
    {
      id: 4,
      name: "David Lee",
      email: "david@mail.com",
      city: "San Francisco",
      phone: "321-654-9870",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState({
    id: "",
    name: "",
    email: "",
    city: "",
    phone: "",
  });

  const handleSearchChange = (e, column) => {
    setSearchQuery({
      ...searchQuery,
      [column]: e.target.value,
    });
  };

  const filteredCustomers = customers.filter((customer) =>
    Object.keys(searchQuery).every((column) =>
      customer[column]
        .toString()
        .toLowerCase()
        .startsWith(searchQuery[column].toLowerCase())
    )
  );

  const handleRowClick = (id) => {
    navigate(`/customer/${id}`);
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "white", textAlign: "center", fontSize: "2rem" }}
      >
        Customer Table
      </Typography>

      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              {["id", "name", "email", "city", "phone"].map((column) => (
                <TableCell
                  key={column}
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    fontSize: "1.1rem",
                    border: "none",
                  }}
                >
                  {column.charAt(0).toUpperCase() + column.slice(1)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow sx={{ backgroundColor: "#fff" }}>
              {["id", "name", "email", "city", "phone"].map((column) => (
                <TableCell key={column} sx={{ padding: "8px", border: "none" }}>
                  <TextField
                    label={`Search ${
                      column.charAt(0).toUpperCase() + column.slice(1)
                    }`}
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={searchQuery[column]}
                    onChange={(e) => handleSearchChange(e, column)}
                    sx={{ width: "100%", fontSize: "1rem" }}
                  />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
                <Tooltip key={customer.id} title="View Insights" arrow>
                  <TableRow
                    sx={{
                      "&:nth-of-type(even)": { backgroundColor: "#f9f9f9" },
                      "&:hover": {
                        backgroundColor: "#e0e0e0",
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => handleRowClick(customer.id)}
                  >
                    <TableCell sx={{ fontSize: "1rem" }}>
                      {customer.id}
                    </TableCell>
                    <TableCell sx={{ fontSize: "1rem" }}>
                      {customer.name}
                    </TableCell>
                    <TableCell sx={{ fontSize: "1rem" }}>
                      {customer.email}
                    </TableCell>
                    <TableCell sx={{ fontSize: "1rem" }}>
                      {customer.city}
                    </TableCell>
                    <TableCell sx={{ fontSize: "1rem" }}>
                      {customer.phone}
                    </TableCell>
                  </TableRow>
                </Tooltip>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  sx={{
                    textAlign: "center",
                    padding: "16px",
                    fontSize: "1rem",
                  }}
                >
                  No customers found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CustomerTable;
