import Body from "components/layout/Body/Body"
import Unity, { UnityContext } from "react-unity-webgl";
import styles from "./Games.module.scss"
import React, { useState, useEffect, useContext } from "react";
import AppContext from 'providers/AppProvider';

const unityContext = new UnityContext({
  loaderUrl: "unity/Build/GanaReciclandoBuild.loader.js",
  dataUrl: "unity/Build/GanaReciclandoBuild.data",
  frameworkUrl: "unity/Build/GanaReciclandoBuild.framework.js",
  codeUrl: "unity/Build/GanaReciclandoBuild.wasm",
});

const Games = () => {
  const [user] = useContext(AppContext)
  function sendUsername() {
    unityContext.send("GameController", "SetUsername", user?.sub);
  }
useEffect(function()
{
  unityContext.on("loaded", ()=>{
    sendUsername();
  
});
}, []);  

    return (
        <Body>
            <h1>Bienvenidos a nuestros juegos didácticos</h1>           
            <Unity className={styles.game} unityContext={unityContext} />
            
        </Body>
    )
}

export default Games
