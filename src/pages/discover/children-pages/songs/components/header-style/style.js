import styled from "styled-components";

export const SongsHeader = styled.div `
    padding-bottom: 10px;
    border-bottom: 2px solid #C10D0C;
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:40px;
    .left {
        display: flex;
        align-items: center;
        .all {
            font-size: 24px;
            color: #333333;
        }
        a {
            margin: 2px 0 0 12px;
            height: 31px;
            width: 91px;
            line-height: 31px;
            text-align: center;
            border-radius:3px;
            border: 1px solid #ccc;
            color: #0c73c2;
            span {
                font-size: 12px;
            }
        }
        a:hover {
            text-decoration: none;
            color: #333;
        }
    }
    .right {
        height: 29px;
        width: 46px;
        line-height: 29px;
        text-align: center;
        color: #fff;
        background-color: #C10D0C;
        border-radius:3px;
        border: 1px solid #ccc;
    }
`