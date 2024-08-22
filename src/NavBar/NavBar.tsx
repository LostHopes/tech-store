import { ReactElement } from "react";

export default function NavBar(): ReactElement {
  return (
    <nav>
      <ul className="flex gap-x-32 justify-center flex-wrap p-4 bg-blue-500 text-white">
        <li className="">
          <a href="#">PC Components</a>
        </li>
        <li>
          <a href="#">TV</a>
        </li>
        <li>
          <a href="#">Phones</a>
        </li>
        <li>
          <a href="#">Tablets</a>
        </li>
      </ul>
    </nav>
  );
}
