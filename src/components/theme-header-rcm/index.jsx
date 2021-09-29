import React, { memo,  } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    HeaderWrapper
} from './style'
const ThemeRcm = memo((props) => {
    const { title, keywords, moreLink = '/discover/songs', keywordClick } = props
    console.log()
    return (
        <HeaderWrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {
                        keywords.map(item => {
                            return (
                                <div key={item} className="item">
                                    <span className="link" onClick={e => keywordClick(item)}>{item}</span>
                                    <span className="divider">|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="right">
                <Link to={moreLink}>更多</Link>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    )
})
ThemeRcm.defaultProps = {
    keywords: []
}
ThemeRcm.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array,
    // moreLink: PropTypes.string,
    
}

// ThemeRcm.defaultProps = {
//     moreLink: 'hello'
// }
export default ThemeRcm
