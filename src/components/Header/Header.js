import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 Mejores Peliculas  🎥
    </span>
  );
};

export default Header;