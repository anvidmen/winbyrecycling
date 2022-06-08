import { useEffect, useContext } from "react"
import Unity, { UnityContext } from "react-unity-webgl"
import { AppContext } from 'providers/AppProvider'
import Body from "components/layout/Body/Body"
import Modal from "components/Modal/Modal"
import styles from "./Games.module.scss"

const unityContext = new UnityContext({
  loaderUrl: "unity/Build/GanaReciclandoBuild.loader.js",
  dataUrl: "unity/Build/GanaReciclandoBuild.data",
  frameworkUrl: "unity/Build/GanaReciclandoBuild.framework.js",
  codeUrl: "unity/Build/GanaReciclandoBuild.wasm",
});

const Games = () => {
  const [user] = useContext(AppContext)

  useEffect(() => {
    unityContext.on("loaded", () => unityContext.send("GameController", "SetUsername", String(user)))
  }, [])

  window.alert = console.log;

  return (
    <Body>
      <div className={styles.container}>
        {user ? <Unity className={styles.game} unityContext={unityContext} /> :
          <><div className={styles.emptyContainer}></div><Modal /> </>}
      </div>
    </Body>
  )
}

export default Games
