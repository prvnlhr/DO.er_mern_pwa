import React from "react";
import appStyles from "./app.module.css";
import AppHeader from "./appLayout/AppHeader"
import AppPagesWrapper from "./appLayout/AppPagesWrapper"
const App = () => {

    return (

        <div className={appStyles.app}>
            <AppHeader />
            <AppPagesWrapper />
        </div>

    )
}
export default App;