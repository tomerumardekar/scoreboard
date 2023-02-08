import { Button, Grid } from "@mui/material";
import React from "react";
import GameDetails from "./GameDetails";
import GameImage from "./GameImage";

export default function GameRowComponent({ game, showTeams }) {
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ backgroundColor: "#F5F5F5", mt: 5, mb: 5 }}
      >
        <Grid item xs={3}>
          <GameImage imagePath={game.img} />
        </Grid>
        <Grid item xs={9}>
          <GameDetails details={game.details} />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={() => {
              showTeams(game.details.nameTeam1, game.details.nameTeam2);
            }}
          >
            Click here
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
