import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate("/about");
  };
  const onAboutHome = () => {
    navigate("/");
  };
  return (
    <header>
      <ul>
        <li>
          <button onClick={onAboutHome}>Home</button>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
