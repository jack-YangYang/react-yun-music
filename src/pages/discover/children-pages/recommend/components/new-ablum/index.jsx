import React, { createRef, memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import HYAlbumCover from "@/components/album-cover";
import { Carousel } from 'antd'
import { getNewAlbumAction } from '../../store/actionCreator'
import { AlbumWrapper } from './style'
export default memo(function Index() {
    const dispatch = useDispatch()
    const carouselRef = createRef()
    const { newAblums } = useSelector(state => ({
        newAblums: state.getIn(['recommend', 'newAblums'])
    }), shallowEqual)
    useEffect(() => {
        dispatch(getNewAlbumAction())
    }, [])
    return (
        <AlbumWrapper>
            <ThemeHeaderRcm title="新碟上架" moreLink="/discover/album" />
            <div className="content">
                <div className="arrow arrow-left sprite_02" onClick={() => carouselRef.current.prev()}>

                </div>
                <div className="album">
                    <Carousel dots={false} ref={carouselRef}>
                        {
                            [0, 1].map(item => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            newAblums.slice(item*5, (item + 1) * 5).map(item => {
                                                return (
                                                    <HYAlbumCover key={item.id} info={item}/>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className="arrow arrow-right sprite_02" onClick={() => carouselRef.current.next()}>

                </div>
            </div>
        </AlbumWrapper>
       
    )
})
