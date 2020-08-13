import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./../components/Navbar/";

function HomeLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      // exact
      // path
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
