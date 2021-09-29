import React from "react"
import Discover from "../pages/discover"
import Mine from '../pages/mine'
import Friends from "../pages/friends"

import { Redirect } from "react-router"
import Artlist from "../pages/discover/children-pages/artlist"
import Recommend from "../pages/discover/children-pages/recommend"
import Ranking from "../pages/discover/children-pages/ranking"
import Songs from "../pages/discover/children-pages/songs"
import Djradio from "../pages/discover/children-pages/djradio"
import Album from "../pages/discover/children-pages/album"
const routers = [
    {
        path: '/',
        exact: true,
        render: () => (
            <Redirect to="/discover" />
        ) 
    },
    {
        path: '/discover',
        component:Discover,   
        routes: [
            {
                path: '/discover',
                exact: true,
                render: () => <Redirect to='/discover/recommend' />
            },
            {
                path: '/discover/recommend',
                component: Recommend
            },
            {
                path: '/discover/ranking',
                component: Ranking
            },
            {
                path: '/discover/songs',
                component: Songs
            },
            {
                path: '/discover/djradio',
                component: Djradio
            },
            {
                path: '/discover/artist',
                component: Artlist
            },
            {
                path: '/discover/album',
                component: Album
            }
        ] 
    },
    {
        path: '/mine',
        component:Mine,
    },
    {
        path: '/friends',
        component:Friends,
    }
]
export default routers