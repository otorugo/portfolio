import { AppContext } from "../../App";
import { useContext } from "react";

const NavStyle = {
  ul: {
    display: "flex",
    flexWrap: "wrap",
  },
  li: {
    textAlign : "center",
    backgroundColor : "#7991BD",
    width : 'calc(100%/3)',
    padding : '1em',
  },
};

const Nav = () => {
  const appContext = useContext(AppContext);

  return (
    <ul style={NavStyle.ul}>
      <li onClick={() => appContext.setNavTab("projetos")} style={{...NavStyle.li, filter  : appContext.navTab !== 'projetos'? 'brightness(80%)': ''}}>
        Projetos
      </li>
      <li onClick={() => appContext.setNavTab("contato")} style={{...NavStyle.li, filter  : appContext.navTab !== 'contato'? 'brightness(80%)': ''}}>
        Contato
      </li>
      <li onClick={() => appContext.setNavTab("hobby")} style={{...NavStyle.li, filter  : appContext.navTab !== 'hobby'? 'brightness(80%)': ''}}>
        Hobby
      </li>
    </ul>
  );
};

export default Nav;
