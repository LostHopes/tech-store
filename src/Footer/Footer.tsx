import Contacts from "./Contacts";
import SocialMedia from "./SocialMedia";

export default function Footer(): any {
  return (
    <div className="flex flex-wrap fixed bottom-0 justify-around mx-56">
      <SocialMedia />
      <Contacts />
    </div>
  );
}
