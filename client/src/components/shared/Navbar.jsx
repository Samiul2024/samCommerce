import { Link, NavLink } from "react-router";
import { useState } from "react";

import {
HiOutlineMenuAlt3,
HiOutlineShoppingBag,
} from "react-icons/hi";

import Container from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";
import useCartStore from "../../store/useCartStore";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
const [open, setOpen] = useState(false);

const cart = useCartStore((state) => state.cart);

const { user, logoutUser } = useAuth();

const navItems = [
{
name: "Home",
path: "/",
},
{
name: "Shop",
path: "/shop",
},
{
name: "Bundles",
path: "/bundles",
},
{
name: "About",
path: "/about",
},
{
name: "Contact",
path: "/contact",
},
];

const navLinks = navItems.map((item) => (
<NavLink
key={item.path}
to={item.path}
className={({ isActive }) =>
`font-medium transition-all hover:text-orange-500 ${
          isActive ? "text-orange-500" : "text-gray-700"
        }`
}
>
{item.name} </NavLink>
));

return ( <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100"> <Container> <nav className="h-20 flex items-center justify-between"> <Link
         to="/"
         className="text-3xl font-black text-orange-500"
       >
ShopNest </Link>

```
      <div className="hidden lg:flex items-center gap-8">
        {navLinks}
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <LanguageSwitcher />

        {user ? (
          <div className="flex items-center gap-3">
            <span>
              {user.displayName}
            </span>

            <button
              onClick={logoutUser}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            Login
          </Link>
        )}

        <Link to="/cart" className="relative">
          <HiOutlineShoppingBag className="text-3xl text-orange-500" />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cart.length}
          </span>
        </Link>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden text-3xl"
      >
        <HiOutlineMenuAlt3 />
      </button>
    </nav>
  </Container>

  {open && (
    <div className="lg:hidden bg-white border-t border-orange-100">
      <Container>
        <div className="py-6 flex flex-col gap-5">
          {navLinks}

          {user ? (
            <button
              onClick={logoutUser}
              className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium text-center hover:bg-orange-600 transition"
            >
              Login
            </Link>
          )}

          <div className="pt-3">
            <LanguageSwitcher />
          </div>
        </div>
      </Container>
    </div>
  )}
</header>
```

);
};

export default Navbar;
