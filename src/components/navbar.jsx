// Stateless Functional Component

const NavBar = ({ totalCounter }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://google.com">
          Navbar
          <span className="badge bg-secondary text-white m-2 badge-pill">
            {totalCounter}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
