import React, { memo, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getHotRecommendsAction } from '../../store/actionCreator'
import { RecommendWrapper } from './style'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import ThemeCover from '@/components/theme-cover'
export default memo(function HotRecommend() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHotRecommendsAction())
    }, [])
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(['recommend', 'hotRecommends'])
    }))
    console.log(hotRecommends, 'hotRecommends')
    const history = useHistory()
    const keywordClick = useCallback((keyword) => {
        history.push({pathname: "/discover/songs", cat: keyword});
    }, [history])
    return (
        <RecommendWrapper>
            <ThemeHeaderRcm 
            title="热门推荐" 
            moreLink="/discover/songs"
            keywordClick={keywordClick}
            keywords={["华语", "流行", "摇滚", "民谣", "电子"]}/>
            <div className="recommend-list">
                {
                    hotRecommends.map(item => {
                        return <ThemeCover info={item} key={item.id} />
                    })
                }
            </div>
        </RecommendWrapper>
    )
})
