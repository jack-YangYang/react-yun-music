import { getBanners, getHotRecommend, getNewAlbum, getTopList } from '@/api/discover'
import { 
    CHANGE_BANNERS, 
    CHANGE_RECOMMENDS, 
    CHANGE_NEW_ABLUM,
    CHANGE_UP_RANKING,
    CHANGE_NEW_RANKING,
    CHANGE_ORIGIN_RANKING
 } from './constants'
import { LIMIT } from '@/constants'
const changeBanners = (banners) => ({
    type: CHANGE_BANNERS,
    banners
})

const changeaRecommends = (hotRecommends) => ({
    type: CHANGE_RECOMMENDS,
    hotRecommends
})

const changeNewAblum = (newAblums) => ({
    type: CHANGE_NEW_ABLUM,
    newAblums
})

const changeUpRanking = upRanking => ({
    type: CHANGE_UP_RANKING,
    upRanking
})
const changeNewRanking = newRanking => ({
    type: CHANGE_NEW_RANKING,
    newRanking
})
const changeOriginRanking = originRanking => ({
    type: CHANGE_ORIGIN_RANKING,
    originRanking
})

export const getTopBannersAction = () => {
    return async (dispatch) => {
        const { banners } = await getBanners()
        dispatch(changeBanners(banners))
    }
}

export const getHotRecommendsAction = (limit = LIMIT) => {
    return async (dispatch) => {
        const { result } = await getHotRecommend(limit)
        dispatch(changeaRecommends(result))
    }
}
export const getNewAlbumAction = (limit = 10) => {
    return async dispatch => {
        const { albums } = await getNewAlbum(limit)
        dispatch(changeNewAblum(albums))
    }
}
export const getRankingListAction = (idx) => {
    return async dispatch => {
        const { playlist } = await getTopList(idx)
        console.log(playlist)
        switch (idx) {
            case 0:
                dispatch(changeUpRanking(playlist))
            case 2:
                dispatch(changeNewRanking(playlist))
            case 3:
                dispatch(changeOriginRanking(playlist))
        }
    }
}