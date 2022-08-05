import logo from "../../images/logo.png";
import "./PageHeading.css";

const PageHeading = () => (
  <>
    <img className="logo" src={logo} alt="Logo" />
    <h1 className="quiz-name">QuickSums</h1>
  </>
);

export default PageHeading;
