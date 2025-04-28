import './MenuListItem.css';

function MenuListItem({ level, setDifficulty }) {
  return (
    <div className="container" onClick={() => setDifficulty(level)}>
      <h3>Set to: {level}</h3>
    </div>
  );
}

export default MenuListItem;
