import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#4e342e] text-[#f5f5dc] shadow-md fixed top-0 w-full z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4 lg:px-8 rounded-md">
        <ul className="flex space-x-8 justify-start">
          <li>
            <Link
              href="/"
              className="font-cinzel text-[#f5f5f5] text-base font-semibold hover:text-[#c2b59b] transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Calculadora"
              className="font-cinzel text-[#f5f5f5] text-base font-semibold hover:text-[#c2b59b] transition-colors duration-300"
            >
              Calculadora
            </Link>
          </li>
          <li>
            <Link
              href="/Palindromo"
              className="font-cinzel text-[#f5f5f5] text-base font-semibold hover:text-[#c2b59b] transition-colors duration-300"
            >
              Palíndromo
            </Link>
          </li>
          <li>
            <Link
              href="/Login"
              className="font-cinzel text-[#f5f5f5] text-base font-semibold hover:text-[#c2b59b] transition-colors duration-300"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/Registro"
              className="font-cinzel text-[#f5f5f5] text-base font-semibold hover:text-[#c2b59b] transition-colors duration-300"
            >
              Registro
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
