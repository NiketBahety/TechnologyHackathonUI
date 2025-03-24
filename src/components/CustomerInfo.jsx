import React from "react";
import { Typography, Grid, Card, CardContent, Container } from "@mui/material";

const InfoCard = ({ title, value }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card>
      <CardContent>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="primary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

const CustomerInfo = ({ customerData }) => {
  if (!customerData) return <></>;
  return (
    <Container>
      <Typography variant="h4" color="primary" sx={{ my: 2 }}>
        Banker Insights: {customerData.customerName}
      </Typography>

      <Grid container spacing={3}>
        <InfoCard title="Customer ID" value={customerData.CustomerID} />
        <InfoCard
          title="Name"
          value={customerData.FirstName + " " + customerData.LastName}
        />
        <InfoCard title="Age" value={customerData.Age} />
        <InfoCard title="Gender" value={customerData.Gender} />
      </Grid>

      <Typography
        variant="body1"
        sx={{
          fontSize: "1.3rem",
          my: 2,
        }}
      >
        {customerData.summary}
      </Typography>
    </Container>
  );
};

export default CustomerInfo;
