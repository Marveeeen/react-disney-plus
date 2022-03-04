import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav>
        <Logo src='/images/logo.svg' alt='logo'></Logo>
        <NavMenu>
            <a>
                <img src='/images/home-icon.svg' alt='home-icon'/>
                <span>Home</span>
            </a>
            <a>
                <img src='/images/search-icon.svg' alt='home-icon'/>
                <span>SEARCH</span>
            </a>
            <a>
                <img src='/images/watchlist-icon.svg' alt='home-icon'/>
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src='/images/original-icon.svg' alt='home-icon'/>
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src='/images/movie-icon.svg' alt='home-icon'/>
                <span>Movies</span>
            </a>
             <a>
                <img src='/images/series-icon.svg' alt='home-icon'/>
                <span>Series</span>
            </a>
        </NavMenu>

        <UserImg src='/images/Roque.jpg'/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    justify-content: space-between;
    overflow-x: hidden

`

const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`
   display:flex;
   align-items: center;
   a {
       display: flex;
       align-items: center;
       padding: 0 12px;
       cursor: pointer;

       img {
           height: 20px;
       }

       span {
           font-size: 13px;
           letter-spacing: 1.2px;
           margin-left: 2px;
           text-transform: uppercase;
           position: relative;
           &:after {
               content: '';
               heighT: 2px;
               background: white;
               position: absolute;
               left: 0;
               right: 0;
               bottom: -6px;
               opacity: 0;
               transform-origin: left center;
               transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
               transform: scaleX(0);
           }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }     
   }
   
`

const UserImg = styled.img`
   height: 48px;
   border-radius: 50%;
   cursor: pointer
`