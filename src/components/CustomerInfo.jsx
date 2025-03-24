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
  return (
    <Container>
      <Typography variant="h4" color="primary" sx={{ my: 2 }}>
        Banker Insights: {customerData.customerName}
      </Typography>

      <Grid container spacing={3}>
        <InfoCard title="Customer ID" value={customerData.customerId} />
        <InfoCard title="Name" value={customerData.customerName} />
        <InfoCard title="Age" value={customerData.customerAge} />
        <InfoCard title="Gender" value={customerData.gender} />
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
