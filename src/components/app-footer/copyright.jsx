import React, { memo } from 'react'
import police from '@/assets//img/police.png'
export default memo(function Copyright() {
    return (
        <>
            <div className="copyright">
                <span>网易公司版权所有©1997-2020</span>
                <span>
                杭州乐读科技有限公司运营：
                <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" rel="noopener noreferrer" target="_blank">浙网文[2018]3506-263号</a>
                </span>
            </div>
            <div className="report">
                <span>违法和不良信息举报电话：0571-89853516</span>
                <span>
                举报邮箱：
                <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">ncm5990@163.com</a>
                </span>
            </div>
            <div className="info">
                <span>粤B2-20090191-18</span>
                <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
                工业和信息化部备案管理系统网站
                </a>
                <img src={police} alt="" />
                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"  rel="noopener noreferrer" target="_blank">浙公网安备 33010902002564号</a>
            </div>
        </>
    )
})
