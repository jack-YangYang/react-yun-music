import React, { memo, forwardRef } from 'react'
import { Carousel } from 'antd';
const BannerCarousel = forwardRef(({ topBanners, beforeChange }, ref) => {
    return (
        <Carousel effect="fade" autoplay={true} ref={ref} beforeChange={beforeChange}>
            {
                topBanners.map(item => {
                    return (
                        <div className="banner-item " key={item.imageUrl}>
                            <img src={item.imageUrl} alt="" className="image" />
                        </div>
                    )
                })
            }
        </Carousel>
    )
})
export default memo(BannerCarousel)
