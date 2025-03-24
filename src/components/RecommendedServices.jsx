import React from "react";
import { Typography, Grid2, Card, CardContent, Container } from "@mui/material";

const RecommendedServices = ({ productRecommendations }) => {
  if (!productRecommendations) return <></>;
  return (
    <Container>
      <Typography variant="h5" color="primary" sx={{ my: 2 }}>
        Recommended Banking Products & Services
      </Typography>

      <Grid2 container spacing={3}>
        {productRecommendations?.map((service, index) => (
          <Grid2 item size={{ xs: 12, sm: 6 }} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{service.Product_Name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.Reason}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default RecommendedServices;
