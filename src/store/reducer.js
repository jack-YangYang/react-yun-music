import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '@/pages/discover/children-pages/recommend/store'
const reducers = combineReducers({ // 转为immutable对象 来提高性能进行优化 尽可能的复用性
    recommend: recommendReducer
})
export default reducers 