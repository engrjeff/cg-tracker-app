import React, { Fragment } from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MenuTogglerProvider from "../../hooks/menuToggler";
import Dashboard from "../Dashboard";
import Management from "../Management";

function Home(props) {
  return (
    <Fragment>
      <MenuTogglerProvider>
        <Header />
        <Sidebar />
      </MenuTogglerProvider>
      <Management />
    </Fragment>
  );
}

export default Home;
