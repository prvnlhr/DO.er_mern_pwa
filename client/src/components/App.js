import React from "react";
import appStyles from "./app.module.css";
import AppHeader from "./appLayout/AppHeader"
import AppSubPagesWrapper from "./appLayout/AppSubPagesWrapper"
const App = () => {

    return (

        <div className={appStyles.app}>
            <div className={appStyles.appInnerwrapper} >
                <AppHeader />
                <AppSubPagesWrapper />
            </div>
        </div>

    )
}
export default App;