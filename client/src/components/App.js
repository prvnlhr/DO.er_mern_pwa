import React from "react";
import appStyles from "./app.module.css";
import AppHeader from "./appLayout/AppHeader"
import AppSubPagesWrapper from "./appLayout/AppSubPagesWrapper"
import { CourseProvider } from "../appState/appContext"
const App = () => {

    return (
        <CourseProvider>
            <div className={appStyles.app}>
                <div className={appStyles.appInnerwrapper} >
                    <AppHeader />
                    <AppSubPagesWrapper />
                </div>
            </div>
        </CourseProvider>

    )
}
export default App;