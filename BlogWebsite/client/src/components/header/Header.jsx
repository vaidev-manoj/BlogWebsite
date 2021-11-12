import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Vaidev</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ13E7APiRYnJMkfaiVP5TFDrZSXolAQc0QhQ&usqp=CAU"
   
        alt=""
      />
    </div>
  );
}
