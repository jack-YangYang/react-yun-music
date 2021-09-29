import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { connect, useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getTopBannersAction } from '../../store/actionCreator'
import BannerCarousel from '@/components/top-banner'
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style'
export default memo(function TopBanner() {
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const disaptch = useDispatch()
    useEffect(() => {
        disaptch(getTopBannersAction())
    }, [disaptch])
    const { topBanners } = useSelector(state => ({ // immutable
        topBanners: state.getIn(['recommend', 'topBanners'])
    }), shallowEqual)
    const bannerRef = useRef()
    const beforeChange = useCallback((from, to) => {
        setCurrentIndex(to)
    }, [])
    const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + '?imageView&blur=40x20'
    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <BannerCarousel 
                    ref={bannerRef} 
                    topBanners={topBanners} 
                    beforeChange={beforeChange} />
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="left btn" onClick={() => bannerRef.current.prev()}></button>
                    <button className="right btn" onClick={() => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
