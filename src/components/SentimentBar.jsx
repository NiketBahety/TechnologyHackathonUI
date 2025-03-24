import React from "react";
import { Box, Tooltip, LinearProgress, Typography } from "@mui/material";

const SentimentBar = ({ value }) => {
  if (!value) return <></>;

  const getColorFromValue = (value) => {
    let red, green;

    if (value < 0.5) {
      red = 255;
      green = Math.round(100 + 165 * value);
    } else {
      red = Math.round(255 * (1 - value));
      green = Math.round(180 + 35 * value);
    }

    return `rgb(${red}, ${green}, 100)`;
  };

  return (
    <Tooltip
      title={
        <Typography fontSize={16} fontWeight="bold">
          Sentiment Score: {parseFloat(value).toFixed(2)}
        </Typography>
      }
      arrow
      sx={{ fontSize: "1rem", padding: "8px" }} // Adjust font size and padding for bigger tooltip
    >
      <Box display="flex" alignItems="center" mt={1}>
        <LinearProgress
          variant="determinate"
          value={parseFloat(value) * 100} // Convert range (-1 to 1) into 0 to 100
          sx={{
            width: "100%",
            height: 10,
            borderRadius: 5,
            backgroundColor: "#ddd",
            "& .MuiLinearProgress-bar": {
              backgroundColor: getColorFromValue(parseFloat(value)),
            },
          }}
        />
      </Box>
    </Tooltip>
  );
};

export default SentimentBar;
