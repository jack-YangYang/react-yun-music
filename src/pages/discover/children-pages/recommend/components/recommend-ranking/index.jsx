import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import TopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'
import {getRankingListAction} from '../../store/actionCreator'
export default memo(function Index() {
    const dispatch = useDispatch()
    const { upRanking, newRanking, originRanking } = useSelector(state => ({
        upRanking: state.getIn(['recommend', 'upRanking']),
        newRanking: state.getIn(['recommend', 'newRanking']),
        originRanking: state.getIn(['recommend', 'originRanking']),
    }), shallowEqual)
    useEffect(() => {
        dispatch(getRankingListAction(0))
        dispatch(getRankingListAction(2))
        dispatch(getRankingListAction(3))
    }, [])
    return (
        <RankingWrapper>
            <ThemeHeaderRcm title="榜单"  moreLink="/discover/ranking" />
            <div className="tops">
                <TopRanking info={originRanking} />
                <TopRanking info={newRanking} />
                <TopRanking info={upRanking} />
            </div>
        </RankingWrapper>
    )
})
