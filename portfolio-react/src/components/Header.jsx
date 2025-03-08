const Header = () => {
  return (
    <header >
      <nav className="flex items-center justify-between py-5 px-8 bg-red-200">
        <div>
          <h1 className="text-4xl">My Portfolio</h1>
        </div>
        <ul className="flex items-center gap-5"> 
          <li><a href="https://google.com">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;