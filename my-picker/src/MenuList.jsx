import "./MenuList.css";
import MenuListItem from "./MenuListItem";

function MenuList({ setDifficulty }) {
  return (
    <div className="container">
      <MenuListItem setDifficulty={setDifficulty} level="Easy" />
      <MenuListItem setDifficulty={setDifficulty} level="Medium" />
      <MenuListItem setDifficulty={setDifficulty} level="Hard" />
      <MenuListItem setDifficulty={setDifficulty} level="Insane" />
    </div>
  );
}

export default MenuList;
