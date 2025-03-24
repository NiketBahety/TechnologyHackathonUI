import React, { useState } from "react";
import {
  Typography,
  Grid2,
  Card,
  CardContent,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const TransactionInsights = ({ transactionInsights, predictions }) => {
  const [selectedMetric, setSelectedMetric] = useState("count");

  const handleChangeMetric = (event) => {
    setSelectedMetric(event.target.value);
  };

  if (!transactionInsights) return <></>;

  const dataForGraph = transactionInsights?.map((dataPoint) => ({
    month: dataPoint.Month.substr(0, 3),
    value:
      selectedMetric === "count"
        ? dataPoint.Total_Transaction_Count
        : dataPoint.Total_Transaction_Amount,
  }));

  return (
    <Container>
      <Typography variant="h5" color="primary" sx={{ my: 3 }}>
        Monthly Transaction Insights
      </Typography>

      <Grid2 container spacing={3}>
        {/* Dropdown for selecting metric */}
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Card>
            <CardContent>
              <FormControl fullWidth>
                <InputLabel>Select Metric</InputLabel>
                <Select
                  value={selectedMetric}
                  label="Select Metric"
                  onChange={handleChangeMetric}
                >
                  <MenuItem value="count">Monthly Transaction Count</MenuItem>
                  <MenuItem value="amount">
                    Total Monthly Transaction Amount
                  </MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 size={{ xs: 12 }}>
          <Card>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={dataForGraph}>
                  <CartesianGrid strokeDasharray="5 5" stroke="#e0e0e0" />
                  <XAxis dataKey="month" />
                  <YAxis
                    domain={[
                      (dataMin) => (dataMin * 0.9).toFixed(2),
                      (dataMax) => (dataMax * 1.1).toFixed(2),
                    ]}
                  />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#007bff"
                    strokeWidth={3}
                    dot={{ r: 5, fill: "#007bff" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid2>

        <Typography
          variant="body1"
          sx={{
            fontSize: "1.3rem",
            my: 2,
          }}
        >
          Forecasted total amount of transactions by the customer in the
          upcoming month: ${predictions.toFixed(2)}
        </Typography>
      </Grid2>
    </Container>
  );
};

export default TransactionInsights;
