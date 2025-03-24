import React from "react";
import { Typography, Grid2, Card, CardContent, Container } from "@mui/material";
import SentimentBar from "./SentimentBar";

const SentimentAnalysis = ({ sentiments }) => {
  if (!sentiments) return <></>;
  return (
    <Container>
      <Typography variant="h5" color="primary" sx={{ my: 2 }}>
        Customer Sentiment Analysis
      </Typography>

      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
        0 being unsatisfied and 1 being satisfied
      </Typography>

      <Grid2 container spacing={3}>
        {sentiments?.productSentiments?.map((product, index) => (
          <Grid2 item size={{ xs: 12, sm: 6 }} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.Product_Name}</Typography>
                <SentimentBar value={product.Similarity} />
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
        Overall Banking Services Sentiment
      </Typography>
      <SentimentBar value={sentiments?.overallSentiment} />

      {/* <Typography
        variant="body1"
        sx={{
          fontSize: "1.3rem",
          my: 2, // Adds top margin to separate from the previous section
        }}
      >
        {sentiments.insights}
      </Typography> */}
    </Container>
  );
};

export default SentimentAnalysis;
