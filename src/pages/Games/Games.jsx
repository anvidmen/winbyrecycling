import { useEffect, useContext } from "react"
import Unity, { UnityContext } from "react-unity-webgl"
import { AppContext } from 'providers/AppProvider'
import Body from "components/layout/Body/Body"
import styles from "./Games.module.scss"

const unityContext = new UnityContext({
  loaderUrl: "unity/Build/GanaReciclandoBuild.loader.js",
  dataUrl: "unity/Build/GanaReciclandoBuild.data",
  frameworkUrl: "unity/Build/GanaReciclandoBuild.framework.js",
  codeUrl: "unity/Build/GanaReciclandoBuild.wasm",
});

const Games = () => {
  const [user] = useContext(AppContext);
  useEffect(() => {
    unityContext.on("loaded", () => unityContext.send("GameController", "SetUsername", String(user)))
  }, []);
  window.alert = console.log;
  return (
    <Body>
      <div className={styles.container}>
        <Unity className={styles.game} unityContext={unityContext} />
      </div>
    </Body>
  )
}

export default Games
