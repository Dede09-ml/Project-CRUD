import React, { Fragment } from 'react';

//components
import InputMhs from "./components/InputMhs"
import ListMhs from "./components/ListMhs"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <Fragment>
      <div className="container-sm bg-dark mw-100 vh-100 d-flex flex-column">
        <Navbar />
        <InputMhs />
        <ListMhs />
        <Footer />
      </div>


    </Fragment>
  );
}

export default App;
