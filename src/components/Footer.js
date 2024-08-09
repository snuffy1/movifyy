import { Link } from "react-router-dom";

export const Footer = () => {
  return (
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Movify</Link>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a href={`https://www.instagram.com/snuffdeath/`} className="mr-4 hover:underline md:mr-6" target="_blank" rel="noreferrer">Instagram</a>
              </li>
              <li>
                <a href={`https://www.facebook.com/profile.php?id=100008450769576`} className="mr-4 hover:underline md:mr-6" target="_blank" rel="noreferrer">facebook</a>
              </li>
              <li>
                <a href={`https://www.linkedin.com/in/aayush-malla-630593244/`} className="mr-4 hover:underline md:mr-6" target="_blank" rel="noreferrer">linkedin</a>
              </li>
              <li>
                <a href={`https://github.com/snuffy1`} className="mr-4 hover:underline md:mr-6" target="_blank" rel="noreferrer">Github</a>
              </li>
          </ul>
      </footer>
  )
}