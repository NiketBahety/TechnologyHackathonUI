import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const BankerInsights = () => {
  const dummyData = {
    customerName: "John Doe",
    customerAge: 30,
    gender: "Male",
    customerId: "12345",
    recommendedServices: [
      {
        name: "Premium Savings Account",
        reason:
          "Based on your high monthly savings and transaction history, a premium savings account with higher interest rates would be beneficial.",
      },
      {
        name: "Credit Card with Rewards",
        reason:
          "You frequently shop online and travel often. A rewards credit card with cashback on purchases and travel benefits would suit your needs.",
      },
      {
        name: "Home Loan",
        reason:
          "Your recent inquiries about real estate and steady income indicate that a home loan with flexible EMIs might be a suitable option.",
      },
    ],
  };

  const [customerData, setCustomerData] = useState(dummyData);

  useEffect(() => {
    setCustomerData(dummyData);
  }, []);

  return (
    <Container>
      <Typography variant="h4" color="primary" sx={{ my: 4 }}>
        Banker Insights: {customerData.customerName}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Customer ID
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="primary">
                {customerData.customerId}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Name
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="primary">
                {customerData.customerName}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Age
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="primary">
                {customerData.customerAge}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Gender
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="primary">
                {customerData.gender}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h5" color="primary" sx={{ my: 4 }}>
        Recommended Banking Products & Services
      </Typography>
      <Grid container spacing={3}>
        {customerData.recommendedServices.map((service, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{service.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.reason}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BankerInsights;
