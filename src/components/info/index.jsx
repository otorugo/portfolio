import { useContext } from "react";
import { AppContext } from '../../App';
import Projetos from "./infoContainers/projetos";
import Contato from "./infoContainers/contato";
import Hobby from "./infoContainers/hobby";


const Info = ()=>{

  const appContext = useContext(AppContext);


  return <div>
    {appContext.navTab === 'projetos'? <Projetos/> : null}
    {appContext.navTab === 'contato'? <Contato/> : null}
    {appContext.navTab === 'hobby'? <Hobby/> : null}



  </div>
}


export default Info;