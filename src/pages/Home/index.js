import React, { Fragment, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function Home(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Fragment>
      <Header onMenuIconClick={() => setIsSidebarOpen((p) => !p)} />
      <Sidebar open={isSidebarOpen} />
    </Fragment>
  );
}

export default Home;
