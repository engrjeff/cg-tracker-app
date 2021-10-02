import React, { Fragment } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MenuTogglerProvider from "../../hooks/menuToggler";
import DiscipleList from "./DiscipleList";

function Home(props) {
  return (
    <Fragment>
      <MenuTogglerProvider>
        <Header />
        <Sidebar />
      </MenuTogglerProvider>
      <div className='content'>
        <DiscipleList />
      </div>
    </Fragment>
  );
}

export default Home;
