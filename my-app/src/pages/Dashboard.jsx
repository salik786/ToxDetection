import React from 'react'
import { useRouteMatch, Route, Switch } from "react-router-dom"
import "./dashboard-style.css"
import ListUser from "../components/ListUsers/listUser"
import HomeDash from '../components/Dashboard/HomeDash'
import HateDetect from '../components/HateDetect/HateDetect'
import Dictionary from '../components/Dictionary/Dictionary'
import NavDashboard from '../components/Navigation/dashboard-nav'
import AnalyzeTweet from '../components/Dash_Analyze_All/analyzeTweet'
import UserAna from "../components/User-Analytics/user-analytics"
function Dashboard() {


    const { path, url } = useRouteMatch();

    return (
        <div className="outer-dash-container">
            <div className="left-dash-nav">
                <NavDashboard />
            </div>
            <div className="right-dash-panel">
                <Switch>
                    <Route path={`${path}/home`} component={HomeDash} />

                    <Route path={`${path}/List`} component={ListUser} />
                    <Route exact path={`${path}/analyzer/tweet`} component={AnalyzeTweet} />
                    <Route exact path={`${path}/analyzer/UserAna`} component={UserAna} />

                    <Route path={`${path}/hateDetect`} component={HateDetect} />
                    <Route path={`${path}/dictionary`} component={Dictionary} />
                    <Route path={"/"} />
                </Switch>
            </div>
        </div >
    )
}

export default Dashboard
