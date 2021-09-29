import { getBanners, getHotRecommend } from '@/api/discover'
import { CHANGE_BANNERS, CHANGE_RECOMMENDS } from './constants'
import { LIMIT } from '@/constants'
const changeBanners = (banners) => ({
    type: CHANGE_BANNERS,
    banners
})

const changeaRecommends = (hotRecommends) => ({
    type: CHANGE_RECOMMENDS,
    hotRecommends
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