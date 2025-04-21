import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Events",
      path: "/events",
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-800 sticky top-0 z-50">
      <nav className="flex">
        <div className="mr-4 ml-4">
          <Link href="/">
            <Image src="/globe.svg" alt="Logo" width={50} height={30} />
          </Link>
        </div>
        <ul className="flex ml-auto pr-5">
          {navItems.map((item) =>
            item ? (
              <li key={item.name}>
                <button className="inline-bock px-6 py-2 duration-200 mr-2 hover:bg-blue-100 hover:text-blue-600 rounded-xl">
                  <Link href={item.path}>{item.name}</Link>
                </button>
              </li>
            ) : null
          )}
        </ul>
      </nav>
    </header>
  );
}
