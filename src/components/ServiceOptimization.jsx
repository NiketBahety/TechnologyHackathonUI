import React from "react";
import { Typography, Card, CardContent, Container } from "@mui/material";
import { Grid2 } from "@mui/material";

const ImprovementAnalysis = ({ improvements }) => {
  if (!improvements) return <></>;
  return (
    <Container>
      <Typography variant="h5" color="primary" sx={{ my: 2 }}>
        Service Optimizations
      </Typography>

      <Grid2 container spacing={3}>
        {improvements.map((product, index) => (
          <Grid2 item size={{ xs: 12, sm: 6 }} key={index}>
            <Card>
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {product.Suggestion}
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
