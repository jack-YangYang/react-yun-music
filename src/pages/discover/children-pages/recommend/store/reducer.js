import { Map } from 'immutable';
import * as actionsType from './constants'
const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
})

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_BANNERS:
            return state.set('topBanners', action.banners)
        case actionsType.CHANGE_RECOMMENDS:
            return state.set('hotRecommends', action.hotRecommends)
        default:
            return state
    }
}
export default reducer