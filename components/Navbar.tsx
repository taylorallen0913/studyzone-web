import type { NextPage } from 'next';

const Navbar: NextPage = () => {
  return (
    <div>
      <nav className="bg-blue-800 dark:bg-black dark:text-white flex flex-col md:flex-row items-center md:justify-between px-6 py-4 border-b border-b-gray-60 shadow-sm mx-auto">
        <div>
          <h2 className="text-3xl font-bold">
            <a className="text-white">Studyzone</a>
          </h2>
        </div>
        <div className="mt-5 md:mt-0">
          <ul className="flex flex-col md:flex-row md:space-x-5 w-full items-center">
            <li>
              <a className="text-white font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
                Products
              </a>
            </li>
            <li>
              <a className="text-white font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
                Company
              </a>
            </li>
            <li>
              <a className="text-white font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
                Partners
              </a>
            </li>
            <li>
              <a className="text-white font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
                News
              </a>
            </li>
            <li>
              <a className="text-white font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
