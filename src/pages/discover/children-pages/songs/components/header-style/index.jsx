import React, { memo } from 'react'
import { SongsHeader } from './style'
import { Button, Tooltip } from 'antd';
import {DownOutlined} from '@ant-design/icons'
export default memo(function Index() {
    return (
        <SongsHeader>
            <div className="left">
                <span className="all">全部</span>
                <a>选择分类 <DownOutlined /></a>
            </div>
            <a className="right">热门</a>
        </SongsHeader>
    )
})
