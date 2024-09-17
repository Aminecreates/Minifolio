import "../App.css";
import "../styles/header.scss";

function Header() {
  return (
    <div className="headline-paragraphe">
      <h1 className="headline">
        Hey, i’m{" "}
        <span className="name">
          <img src="imgs/cursor.svg" alt="" />
          Amine<div className="corner-br"></div>
          <div className="corner-tl"></div>
        </span>{" "}
        a Designer / Developer based in Tangier, Morocco.
      </h1>
      <p>
        Welcome to my little corner of the web! Here, I explore anything that
        sparks my interest — mainly design and code. Whether it's crafting a
        clean UI, experimenting with new tools, or solving coding challenges,
        I’m always eager to learn and grow. Have a look around and see what I’ve
        been up to!
      </p>
    </div>
  );
}

export default Header;
