import React, { useEffect, useState } from "react";
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
import { getAllCustomers, getAllProducts } from "../api";

const CustomerProductTables = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const customerData = await getAllCustomers();
      const productData = await getAllProducts();

      let modifiedCustomerData = [];

      for (let cust of customerData) {
        modifiedCustomerData.push({
          CustomerID: cust["CustomerID"],
          FirstName: cust["FirstName"],
          LastName: cust["FirstName"],
          Gender: cust["Gender"],
          Email: cust["Email"],
          Phone: cust["Phone"],
        });
      }

      let modifiedProducts = [];

      for (let prod of productData) {
        modifiedProducts.push({
          product_id: prod["product_id"],
          name: prod["name"],
          description: prod["description"],
          features: prod["features"],
          category: prod["category"],
        });
      }

      setCustomers(modifiedCustomerData);
      setProducts(modifiedProducts);
    };

    getData();
  }, []);

  const [searchQuery, setSearchQuery] = useState({
    CustomerID: "",
    FirstName: "",
    LastName: "",
    Gender: "",
    Email: "",
    Phone: "",
  });

  const [productSearchQuery, setProductSearchQuery] = useState({
    product_id: "",
    name: "",
    description: "",
    features: "",
    category: "",
  });

  const handleSearchChange = (e, column, setSearch) => {
    setSearch((prev) => ({ ...prev, [column]: e.target.value }));
  };

  const filteredCustomers = customers.filter((customer) =>
    Object.keys(searchQuery).every((column) =>
      customer[column]
        .toString()
        .toLowerCase()
        .includes(searchQuery[column].toLowerCase())
    )
  );

  const filteredProducts = products.filter((product) =>
    Object.keys(productSearchQuery).every((column) =>
      product[column]
        .toString()
        .toLowerCase()
        .includes(productSearchQuery[column].toLowerCase())
    )
  );

  const handleRowClick = (CustomerID) => {
    navigate(`/customer/${CustomerID}`);
  };

  const handleProductRowClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#e40019", textAlign: "center", fontSize: "2rem" }}
      >
        Customer Table
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 3,
          mb: 4,
          maxHeight: 400,
          overflow: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {[
                "CustomerID",
                "FirstName",
                "LastName",
                "Gender",
                "Email",
                "Phone",
              ].map((column) => (
                <TableCell
                  key={column}
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                  }}
                >
                  {column.charAt(0).toUpperCase() + column.slice(1)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              {[
                "CustomerID",
                "FirstName",
                "LastName",
                "Gender",
                "Email",
                "Phone",
              ].map((column) => (
                <TableCell key={column}>
                  <TextField
                    size="small"
                    fullWidth
                    placeholder={`Search ${column}`}
                    value={searchQuery[column]}
                    onChange={(e) =>
                      handleSearchChange(e, column, setSearchQuery)
                    }
                  />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <Tooltip key={customer.CustomerID} title="View Insights" arrow>
                <TableRow
                  sx={{
                    cursor: "pointer",
                    "&:hover": { backgroundColor: theme.palette.action.hover },
                  }}
                  onClick={() => handleRowClick(customer.CustomerID)}
                >
                  {Object.values(customer).map((value, index) => (
                    <TableCell key={index}>{value}</TableCell>
                  ))}
                </TableRow>
              </Tooltip>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#e40019", textAlign: "center", fontSize: "2rem" }}
      >
        Product Table
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 3,
          mb: 4,
          maxHeight: 400,
          overflow: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {[
                "product_id",
                "name",
                "description",
                "features",
                "category",
              ].map((column) => (
                <TableCell
                  key={column}
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                  }}
                >
                  {column.charAt(0).toUpperCase() + column.slice(1)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              {[
                "product_id",
                "name",
                "description",
                "features",
                "category",
              ].map((column) => (
                <TableCell key={column}>
                  <TextField
                    size="small"
                    fullWidth
                    placeholder={`Search ${column}`}
                    value={productSearchQuery[column]}
                    onChange={(e) =>
                      handleSearchChange(e, column, setProductSearchQuery)
                    }
                  />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product) => (
              <Tooltip key={product.product_id} title="View Insights" arrow>
                <TableRow
                  key={product.product_id}
                  sx={{
                    cursor: "pointer",
                    "&:hover": { backgroundColor: theme.palette.action.hover },
                  }}
                  onClick={() => handleProductRowClick(product.product_id)}
                >
                  {Object.values(product).map((value, index) => (
                    <TableCell key={index}>{value}</TableCell>
                  ))}
                </TableRow>
              </Tooltip>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CustomerProductTables;
