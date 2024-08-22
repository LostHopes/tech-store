import { Component, ReactNode } from "react";

class NavBar extends Component {
  render(): ReactNode {
    return (
      <nav>
        <ul className="flex gap-x-32 justify-center flex-wrap p-4 bg-blue-500 text-white">
          <MenuItem href="#" label="PC Components" />
          <MenuItem href="#" label="TV" />
          <MenuItem href="#" label="Phones" />
          <MenuItem href="#" label="Tablets" />
        </ul>
      </nav>
    );
  }
}

function MenuItem(props: any) {
  return(
    <li>
        <a href={props.href} className="no-underline underline-offset-8 hover:underline">{props.label}</a>
    </li>
  );
}

export default NavBar;
