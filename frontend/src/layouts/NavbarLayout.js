import Navbar from "../components/Navbar";

const NavbarLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <section>{children}</section>
    </main>
  );
};

export default NavbarLayout;
