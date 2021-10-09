import { Map } from 'immutable';
import * as actionsType from './constants'
const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAblums: [],
    upRanking: {},
    newRanking: {},
    originRanking: {}
})

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_BANNERS:
            return state.set('topBanners', action.banners)
        case actionsType.CHANGE_RECOMMENDS:
            return state.set('hotRecommends', action.hotRecommends)
        case actionsType.CHANGE_NEW_ABLUM:
            return state.set('newAblums', action.newAblums)
        case actionsType.CHANGE_UP_RANKING:
            return state.set('upRanking', action.upRanking)
        case actionsType.CHANGE_NEW_RANKING:
            return state.set('newRanking', action.newRanking)
        case actionsType.CHANGE_ORIGIN_RANKING:
            return state.set('originRanking', action.originRanking)
        default:
            return state
    }
}
export default reducer