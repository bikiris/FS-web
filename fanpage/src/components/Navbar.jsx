const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex p-4 justify-between items-center bg-gradient-to-r from-yellow-400 to-orange-500 ">
      <h1 className="text-[#023047]">Topic</h1>

      <ul className="flex gap-8">
        <li>
          <a>Home</a>
          </li>
        <li>
          <a href="https://google.com" className="hover:text-blue-500">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;