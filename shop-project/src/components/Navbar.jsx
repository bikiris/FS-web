import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='fixed w-full flex justify-between items-center py-4 px-6 bg-black text-white'>
      <h1 className='text-3xl'>The Shop</h1>
      <ul className='flex gap-4 '>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar;