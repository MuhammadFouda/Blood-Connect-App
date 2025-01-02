const Footer = () => {
  return (
    <footer className="bg-card mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} BloodConnect. All rights reserved.
          </p>
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/about"
              className="text-muted-foreground hover:text-primary text-sm"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-muted-foreground hover:text-primary text-sm"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-muted-foreground hover:text-primary text-sm"
            >
              Privacy Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
