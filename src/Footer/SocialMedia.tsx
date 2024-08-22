import { Component, ReactNode } from "react";

class SocialMedia extends Component {

  render(): ReactNode {
    return (
      <ul className="flex-col mx-72 my-8">
        <strong>Social media</strong>
        <FooterItem href="#" label="Instagram" />
        <FooterItem href="#" label="Telegram" />
        <FooterItem href="#" label="Youtube" />
      </ul>
    );
  }
}

function FooterItem(props: any) {
  return(
    <li>
        <a href={props.href}>{props.label}</a>
    </li>
  );
}

export default SocialMedia;
