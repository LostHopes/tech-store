import { ReactElement } from "react";
import Contacts from "./Contacts";
import SocialMedia from "./SocialMedia";

export default function Footer(): ReactElement {
  return (
    <div className="flex fixed bottom-0 left-0 w-full bg-blue-500 flex-wrap md">
      <SocialMedia />
      <Contacts />
    </div>
  );
}
