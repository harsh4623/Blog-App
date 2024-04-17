import "./header.css";


export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Innovating the Blogging Experience</span>
        <span className="headerTitleLg">Blog Master</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1542435503-956c469947f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
    </div>
  );
}
