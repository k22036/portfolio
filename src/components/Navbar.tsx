import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">My Portfolio</div>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white mx-4">Home</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
