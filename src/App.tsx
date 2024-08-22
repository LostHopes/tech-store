import { ReactElement } from "react";
import "./App.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function App(): ReactElement {
  return (
    <>
      <NavBar />

      <Footer />
    </>
  );
}