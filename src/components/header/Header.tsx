import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => (
  <>
    <img className="logo" src={logo} alt="Logo" />
    <h1 className="quiz-name">QuickSums</h1>
  </>
);

export default Header;
