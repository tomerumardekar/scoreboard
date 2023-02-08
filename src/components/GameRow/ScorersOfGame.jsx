import { Paper, Typography } from "@mui/material";
import React from "react";

export default function ({ teamName, scorers }) {
  return (
    <div>
      <Paper
        sx={{
          padding: "16px",
          textAlign: "center",
          backgroundColor: "#f2f2f2",
          color: "#333",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {teamName}
        </Typography>
        {scorers?.map((scorer, index) => (
          <Typography variant="subtitle2" key={index}>
            {scorer.name} ({scorer.minute}')
          </Typography>
        ))}
      </Paper>
    </div>
  );
}
