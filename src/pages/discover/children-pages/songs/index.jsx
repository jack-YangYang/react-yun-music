import React, { memo } from 'react'
import SongsHeader from './components/header-style'
import { SongsWrapper } from './style'
export default memo(function Songs() {
    return (
        <SongsWrapper className="wrap-v2">
            <SongsHeader />
        </SongsWrapper>
    )
})
