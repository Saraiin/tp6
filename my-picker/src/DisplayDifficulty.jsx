import './DisplayDifficulty.css';

function DisplayDifficulty({ difficulty }) {
  return (
    <div className="container">
      <h2>Difficulty set to: {difficulty}</h2>
    </div>
  );
}

export default DisplayDifficulty;
