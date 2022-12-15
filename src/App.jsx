import { createContext, useState } from "react";
import Nav from "./components/nav";
import Profile from "./components/profile";
import Info from './components/info'

const AppStyle = {
  general: {
    padding: "1em",
  },
};


export const AppContext = createContext(null);


function App() {
  const [navTab, setNavTab] = useState("projetos");

  return (
    <AppContext.Provider value={{navTab, setNavTab}}>
      <div style={AppStyle.general}>
        <Profile></Profile>
        <Nav></Nav>
        <Info></Info>
      </div>
    </AppContext.Provider>
  );
}

export default App;
