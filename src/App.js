import GameDetails from "./components/GameRow/GameDetails";
import ScorersOfGame from "./components/GameRow/ScorersOfGame";
function App() {
  return (
    <div>
      <GameDetails
        details={{
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
        }}
      />
    </div>
  );
}

export default App;
