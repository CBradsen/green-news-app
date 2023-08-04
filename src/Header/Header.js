import genlogo from "../assets/genlogo.svg";
import '../Header/Header.css'
import { Link } from 'react-router-dom';

const date = new Date();
const headline = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const today = date.toLocaleDateString("en-US", headline);

function Header() {
  return (
      <header className="header">
         <Link to={"/"}>
        <img src={genlogo} className="App-logo" alt="green-energy-news-logo" />
        </Link>
        <div className="date-container">
          <h3 className="today">{today}</h3>
        </div>
      </header>
  )
}

 export default Header;