import React, { memo, Fragment } from 'react'
import  { WrapperFooter, FooterLeft, FooterRight } from './style'
import { footerLinks, footerImages } from '@/common/local-data'
import Copyright from './copyright'
export default memo(function YYAppFooter() {
    const FooterLinksFn = () => {
        return (
            footerLinks.map(item => {
                return (
                    <Fragment key={item.title}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                        <span className="line">|</span>
                    </Fragment>
                )
            })
        )
    }
    const FooterImages = () => {
        return (
            footerImages.map((item) => {
                return (
                  <li className="item" key={item.link}>
                    <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                    <span className="title"></span>
                  </li>
                )
              })
        )
    }
    return (
        <WrapperFooter>
            <div className="wrap-v2 footer-content">
                <FooterLeft>
                    <div className="link">
                        <FooterLinksFn />
                    </div>
                    <Copyright />
                </FooterLeft>
                <FooterRight className="right">
                    <FooterImages />
                </FooterRight>
            </div>
        </WrapperFooter>
    )
})
