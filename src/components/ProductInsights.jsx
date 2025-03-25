import React, { useEffect, useState } from "react";
import ImprovementAnalysis from "./ServiceOptimization";
import {
  Paper,
  Grid2,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  Divider,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { getProductOptimization, getProduct } from "../api";

const ProductInsights = () => {
  const { id } = useParams();

  const [serviceOptimization, setServiceOptimization] = useState();

  const [product, setProduct] = useState();

  useEffect(() => {
    const getData = async () => {
      const prod = await getProduct(id);
      const optimization = await getProductOptimization(id);
      setProduct(prod);
      setServiceOptimization(optimization);
    };
    getData();
  }, []);

  return (
    <Grid2 spacing={3}>
      <Paper
        sx={{
          backgroundColor: "#ffffff",
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Container>
          <Typography variant="h5" color="primary" sx={{ my: 2 }}>
            Product Details
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#333", fontWeight: "bold", mb: 1 }}
          >
            {product?.name}
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
            {product?.description}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#444" }}
          >
            Category:
            <Typography
              component="span"
              variant="body1"
              sx={{ fontWeight: "normal" }}
            >
              {product?.category}
            </Typography>
          </Typography>
          {product?.annual_fee ? (
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#444" }}
            >
              Annual Fee:
              <Typography
                component="span"
                variant="body1"
                sx={{ fontWeight: "normal" }}
              >
                {product?.annual_fee}
              </Typography>
            </Typography>
          ) : (
            <></>
          )}
          {product?.credit_limit ? (
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#444" }}
            >
              Credit Limit:
              <Typography
                component="span"
                variant="body1"
                sx={{ fontWeight: "normal" }}
              >
                {product?.credit_limit}
              </Typography>
            </Typography>
          ) : (
            <></>
          )}
          {product?.rewards ? (
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#444" }}
            >
              Rewards:
              <Typography
                component="span"
                variant="body1"
                sx={{ fontWeight: "normal" }}
              >
                {product?.rewards}
              </Typography>
            </Typography>
          ) : (
            <></>
          )}
        </Container>
      </Paper>

      <Paper
        sx={{
          backgroundColor: "#f8f8f8",
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Container>
          <Typography variant="h5" color="primary" sx={{ my: 2 }}>
            Customer Feedback
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
            {product?.customer_feedback}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <List>
            {product?.customer_reviews.map((review, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={review}
                  sx={{ color: "#444", fontSize: "1rem" }}
                />
              </ListItem>
            ))}
          </List>
        </Container>
      </Paper>

      <Paper
        sx={{
          backgroundColor: "#ffffff",
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <ImprovementAnalysis improvements={serviceOptimization} />
      </Paper>
    </Grid2>
  );
};

export default ProductInsights;
