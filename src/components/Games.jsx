import React from "react";
import GameRowComponent from "./GameRow/GameRowComponent";

export default function Games() {
  const gamesArray = [
    {
      img: "images/footBall1.jpg",
      details: {
        nameTeam1: "Team A",
        nameTeam2: "Team B",
        goalTeam1: 3,
        goalTeam2: 1,
        goalScorers1: [
          { name: "Player 1", minute: 23 },
          { name: "Player 2", minute: 45 },
          { name: "Player 3", minute: 68 },
        ],
        goalScorers2: [{ name: "Player 4", minute: 77 }],
      },
    },
    {
      img: "images/footBall2.jpg",
      details: {
        nameTeam1: "Team C",
        nameTeam2: "Team D",
        goalTeam1: 2,
        goalTeam2: 2,
        goalScorers1: [
          { name: "Player 5", minute: 15 },
          { name: "Player 6", minute: 37 },
        ],
        goalScorers2: [
          { name: "Player 7", minute: 42 },
          { name: "Player 8", minute: 90 },
        ],
      },
    },
    {
      img: "images/footBall3.jpg",
      details: {
        nameTeam1: "Team E",
        nameTeam2: "Team F",
        goalTeam1: 0,
        goalTeam2: 1,
        goalScorers2: [{ name: "Player 9", minute: 52 }],
      },
    },
    {
      img: "images/footBall4.jpg",
      details: {
        nameTeam1: "Team G",
        nameTeam2: "Team H",
        goalTeam1: 1,
        goalTeam2: 0,
        goalScorers1: [{ name: "Player 10", minute: 89 }],
      },
    },
  ];
  const showTeams = (team1, team2) => {
    alert(`${team1}vs${team2}`);
  };
  return (
    <div>
      {gamesArray.map((game, index) => (
        <GameRowComponent game={game} key={index} showTeams={showTeams} />
      ))}
    </div>
  );
}
