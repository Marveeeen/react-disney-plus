import React, { useEffect  } from 'react'
import styled from 'styled-components'
import { selectUserName, selectUserPhoto, setSignOut, setUserLogin }from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName)
    const userPhoto= useSelector(selectUserPhoto)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user);
                history('/home');
            }
        })
    }, [userName])

    const handleAuth = () => {
        if(!userName) {
            signInWithPopup(auth, provider)
                    .then((result) => {
                        setUser(result.user)
                    }).catch((error) => {
                        alert(error.message)
                    });
                   
        } else if(userName) {
            signOut(auth).then(() => {
                dispatch(setSignOut());
                history('/')
            }).catch((err) => alert(err.message))
        }
    }

    const setUser = (user) => {
        dispatch(setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
    }


    return (
        <Nav>
            <Logo src='/images/logo.svg' alt='logo'></Logo>
            {!userName 
                ? (
                    <LoginContainer>
                        <Login onClick={handleAuth}>Login</Login>
                    </LoginContainer>
                ) : (
                    <>
                         <NavMenu>
                            <a href='/home'>
                                <img src='/images/home-icon.svg' alt='home-icon'/>
                                <span>Home</span>
                            </a>
                            <a>
                                <img src='/images/search-icon.svg' alt='search-icon'/>
                                <span>SEARCH</span>
                            </a>
                            <a>
                                <img src='/images/watchlist-icon.svg' alt='wacthlist-icon'/>
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <img src='/images/original-icon.svg' alt='original-icon'/>
                                <span>ORIGINALS</span>
                            </a>
                            <a>
                                <img src='/images/movie-icon.svg' alt='movie-icon'/>
                                <span>Movies</span>
                            </a>
                            <a>
                                <img src='/images/series-icon.svg' alt='series-icon'/>
                                <span>Series</span>
                            </a>
                        </NavMenu>
                        <SignOut>
                            <UserImg src={userPhoto} alt='user'/>
                            <DropDown>
                            <span onClick={handleAuth}>Sign out</span>
                            </DropDown>
                        </SignOut>
                    </>
                )
            }
           
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
    overflow-x: hidden
     z-index: 3;
`

const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`
   display:flex;
   align-items: center;
   flex: 1;
   margin-left: 20px;

   a {
       display: flex;
       align-items: center;
       padding: 0 12px;
       cursor: pointer;
       text-decoration: none;
       color: white;

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
    height: 100%;   
`

const LoginContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   flex: 1;
`

const Login = styled.div`
   border: 1px solid #f9f9f9;
   padding: 8px 16px;
   border-radius: 4px;
   text-transform: uppercase;
   letter-spacing: 1.5px;
   background-color: rgba(0, 0, 0, 0.6);
   cursor: pointer;
   transition: all 0.2s ease 0s;

   &:hover {
       background-color: #f9f9f9;
       color: #000;
       border-color: transparent;
   }
`

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 5px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;

  &:hover {
       opacity: 1;
        transition-duration: 1s;
  }
`;

const SignOut = styled.div`
   position: relative;
   height: 48px;
   width: 48px;
   display: flex;
   cursor: pointer;
   align-items: center;
   justify-content: center;

   ${UserImg} {
       border-radius: 50%;
       width: 100%;
       heighT: 100%;
   }

    &:hover {
      ${DropDown} {
          opacity: 1;
          transition-duration: 1s;
      }
  }
`