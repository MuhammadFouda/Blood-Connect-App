import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-card shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              BloodConnect
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/medical-form"
                className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Medical Form
              </Link>
              <Link
                to="/profile"
                className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Profile
              </Link>
              <Link
                to="/signup"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
