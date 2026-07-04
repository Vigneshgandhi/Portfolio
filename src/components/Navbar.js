import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name:"Blogs", path:"/blogs" },
    { name: "Certificate", path:"/certificate" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#801426]/10 bg-white/95 shadow-sm shadow-[#801426]/5 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-0">
        <h1 className="text-xl font-bold tracking-wide text-[#801426] sm:text-2xl">
          Vigneshgandhi
        </h1>

        <nav>
          <ul className="flex flex-wrap items-center gap-3 sm:gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-md bg-[#FCDF4C]/70 px-3 py-2 text-sm font-semibold text-[#801426] sm:text-base"
                      : "rounded-md px-3 py-2 text-sm text-[#403939] transition hover:bg-[#D91A3A]/10 hover:text-[#D91A3A] sm:text-base"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;




