import React, { memo, useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import request from '@/service/request'
import {DiscoverWrapper, TopMenu} from './style'
import {dicoverMenu} from '@/common/local-data'
import { NavLink } from 'react-router-dom'
export default memo(function Discover(props) {
    return (
        <DiscoverWrapper>
            <div className="top">
                <TopMenu className="wrap-v1">
                    {
                        dicoverMenu.map(item => {
                            return (
                                <div className="item" key={item.link}>
                                    <NavLink to={item.link}>{item.title}</NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            { renderRoutes(props.route.routes) }
        </DiscoverWrapper>
    )
})
