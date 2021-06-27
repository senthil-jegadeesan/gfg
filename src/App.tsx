import React from 'react';
import './themes/styles.scss';
import Routes from "./router"
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubHeader from "./components/SubHeader";
import SubFooter from "./components/SubFooter";

const App = () => {

  const PATH_NAME = window.location.pathname;
  return (
    <div>
      {PATH_NAME === "/" ? <Header /> : <SubHeader title={"Product Selector"} />}
      <main>
        <Routes />
      </main>
      {PATH_NAME === "/" ? <Footer /> : <SubFooter/>}
    </div>
  );
}

export default App;
