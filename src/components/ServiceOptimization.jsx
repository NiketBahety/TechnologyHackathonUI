import React from "react";
import { Typography, Card, CardContent, Container } from "@mui/material";
import {Grid2} from "@mui/material"; // Import Grid2 instead of Grid

const ImprovementAnalysis = ({ improvements }) => {
  return (
    <Container>
      <Typography variant="h5" color="primary" sx={{ my: 2 }}>
        Service Optimizations
      </Typography>

      <Grid2 container spacing={3}>
        {improvements.productRecommendations.map((product, index) => (
          <Grid2 item size={{ xs: 12, sm: 6 }} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.improvement}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default ImprovementAnalysis;