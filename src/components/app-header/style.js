import styled from 'styled-components'
import sprite_01 from "@/assets/img/sprite_01.png"
export const HeaderWrapper = styled.div`
    height: 75px;
    background-color: #242424;
    .content {
        height: 70px;
        display: flex;
        justify-content: space-between;
    }
    .divider {
        height: 5px;
        background-color: #C20c0c;
    }
`
export const HeaderLeft = styled.div `
    display: flex;
    a.logo {
        width:176px;
        height:69px;
        display: block;
        background-position: 0 0;
    }
    div.select-list {
        display: flex;
        align-items: center;
        height:70px;
        & > div {
            position: relative;
            font-size: 14px;     
            a {
                color: #cccccc;
                padding: 0 19px;
                display: block;
                line-height:70px
            }
            :last-of-type a{
                position: relative;
                ::after {
                    position: absolute;
                    content: "";
                    width: 28px;
                    height: 19px;
                    font-size: 12px;
                    padding: 1px 2px;
                    margin-left: 10px;
                    margin-bottom: 10px;
                    background-image: url(${sprite_01});
                    background-position: -190px 0;
                    top: 20px;
                    right: -15px;
                }
            }
            &:hover a, & > a.active{
                color: #fff;
                background-color: #000;
                text-decoration: none;
            }
            .active .icon {
                position: absolute;
                display: inline-block;
                width: 12px;
                height: 7px;
                bottom: -1px;
                left: 50%;
                transform: translate(-50%, 0);
                background-position: -226px 0;
            }
        }
    }

`
export const HeaderRight = styled.div `
    display: flex;
    align-items: center;
    color: #ccc;
    font-size: 12px;

    .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;

        input {
        &::placeholder {
            font-size: 12px;
        }
        }
    }
    .center {
        width: 90px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 16px;
        background-color: inherit;
        color: #cccccc;
        margin: 0 16px;
    }
    .center:hover {
        border-color: #fff;
        color: #fff;
    }
    .btn {
        cursor: pointer;
    }
    .btn.login {
        color: #787878;
        background-color: inherit;
    }
    .btn.login:hover {
        text-decoration: underline;
    }
    
`