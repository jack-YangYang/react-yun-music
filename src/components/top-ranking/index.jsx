import React, { memo } from 'react'
import { getSizeImage } from '@/utils/format-utils'
import { TopRankingWrapper } from './style'
export default memo(function Index(props) {
    const { info } = props
    return (
        <TopRankingWrapper>
            <div className="header">
                <div className="image">
                    <img src={getSizeImage(info.coverImgUrl)} alt="" />
                    <a href="/todo" className="image_cover">ranking</a>
                </div>
                <div className="info">
                    <a href="/todo">{info.name}</a>
                    <div>
                        <button className="btn play sprite_02"></button>
                        <button className="btn favor sprite_02"></button>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    info.tracks && info.tracks.slice(0, 10).map((item, index) => {
                        return (
                            <div key={item.id} className="list-item">
                                <div className="rank">{ index + 1 }</div>
                                <div className="info">
                                    <div className="name text-nowrap">{item.name}</div>
                                    <div className="operate">
                                        <button className="btn play sprite_02"></button>
                                        <button className="btn addto sprite_icon2"></button>
                                        <button className="btn favor sprite_02"></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="footer">
                <a href="/todo">查看全部 &gt;</a>
            </div>
        </TopRankingWrapper>
    )
})
