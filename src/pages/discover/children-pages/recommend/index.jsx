import React, { memo } from 'react'
import TopBanner from './components/top-banner'
import HotRecommend from './components/hot-recommend'
import NewAblum from './components/new-ablum'
import RecmmendRanking from './components/recommend-ranking'
import { RecommendWraper, Content, RecommendLeft, RecommendRight } from './style'
function Recommend() {
    return (
        <RecommendWraper>
            <TopBanner />
            <Content className="wrap-v2">
                <RecommendLeft>
                    <HotRecommend />
                    <NewAblum />
                    <RecmmendRanking />
                </RecommendLeft>
                <RecommendRight>
                    
                </RecommendRight>
            </Content>
        </RecommendWraper>
    )
}
// const mapStateToProps = state => ({
//     topBanners: state.recommend.topBanners
// })
// const mapDispatchToProps = dispatch => ({
//     getTopBanners: () => {
//         dispatch(getTopBannersAction())
//     }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
export default memo(Recommend)
