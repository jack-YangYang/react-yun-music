import React, { memo } from 'react'
import { headerLinks } from '@/common/local-data'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { 
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style'
export default memo(function YYAppHeader() {
    const showSelectItem = (item, index) => {
        if (index < 3) {
            return (
                <NavLink to={item.path}>
                    {item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>
            )     
        } 
        return <a href={item.path}><em>{item.title}</em></a>
    }
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <NavLink to="/" className="logo sprite_01"></NavLink>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div key={index}>
                                        { showSelectItem(item, index) }
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input 
                    className="search"
                    placeholder="音乐/视频/电台/用户" 
                    prefix={<SearchOutlined />} />
                    <button className="center btn">创作者中心</button>
                    <button className="btn login">登录</button>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
