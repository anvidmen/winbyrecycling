import Body from "components/layout/Body/Body"
import Unity, { UnityContext } from "react-unity-webgl";
import styles from "./Games.module.scss"
import React, { useState, useEffect } from "react";
import Login from "pages/Login/Login";

const unityContext = new UnityContext({
  loaderUrl: "unity/Build/BuildSinComprimir.loader.js",
  dataUrl: "unity/Build/BuildSinComprimir.data",
  frameworkUrl: "unity/Build/BuildSinComprimir.framework.js",
  codeUrl: "unity/Build/BuildSinComprimir.wasm",
  webglContextAttributes: {
    preserveDrawingBuffer: true,
  },
});

const Games = () => {
  function setUsername() {
    unityContext.send("GameController", "SetUsername", Login.setUsername);
  }

    return (
        <body>
            <h1>Bienvenidos a nuestros juegos didacticos</h1>
            <button onClick={setUsername}>Spawn a bunch!</button>
            <Unity className={styles.game} unityContext={unityContext} />
        </body>
    )
}

export default Games
