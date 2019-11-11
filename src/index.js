import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/js/bootstrap";

import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import SidebarItem from "./components/Sidebar-item";

ReactDOM.render(
  <Layout>
    <Sidebar title="Payment Control">
      <SidebarItem link="/" item="Inicio" />
    </Sidebar>
  </Layout>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
