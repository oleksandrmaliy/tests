// const Test = () => {
// 	const a = null;
// 	const b = undefined;
// 	const result = a == b;

// 	return (
// 		<>
// 			<pre>Результат: {String(result)}</pre>
// 		</>
// 	);
// };

// export default Test;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Іконки з lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Мій сайт</h1>

        {/* Кнопка для відкриття/закриття меню */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Навігаційне меню */}
        <ul
          className={`absolute left-0 top-16 w-full bg-blue-700 text-white text-center transition-transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } md:relative md:flex md:translate-y-0 md:space-x-6 md:bg-transparent md:w-auto`}
        >
          <li className="p-3 md:p-0">
            <Link to="/" onClick={() => setIsOpen(false)}>Головна</Link>
          </li>
          <li className="p-3 md:p-0">
            <Link to="/about" onClick={() => setIsOpen(false)}>Про нас</Link>
          </li>
          <li className="p-3 md:p-0">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Контакти</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
