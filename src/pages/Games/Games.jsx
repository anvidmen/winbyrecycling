import Body from "components/layout/Body/Body"
import Unity, { UnityContext } from "react-unity-webgl";
import styles from "./Games.module.scss"
import React, { useState, useEffect } from "react";

const unityContext = new UnityContext({
  loaderUrl: "unity/Build/BuildSinComprimir.loader.js",
  dataUrl: "unity/Build/BuildSinComprimir.data",
  frameworkUrl: "unity/Build/BuildSinComprimir.framework.js",
  codeUrl: "unity/Build/BuildSinComprimir.wasm",
});

const Games = () => {
    const [isGameOver, setIsGameOver] = useState(false);
    const [score, setScore] = useState(50);
  
    useEffect(function () {
      unityContext.on("GameOver", function (score) {
        setIsGameOver(true);
        setScore(score);
      });
    }, []);

    return (
        <body>
            <h1>Bienvenidos a nuestros juegos didacticos</h1>
            <p>{`Game Over! ${score} points`}</p>
            
            <Unity className={styles.game} unityContext={unityContext} />
        </body>
    )
}

export default Games
