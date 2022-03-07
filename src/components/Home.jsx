import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import db from '../firebase'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { setMovies} from '../features/movie/movieSlice'

import { Backdrop, CircularProgress } from '@material-ui/core'


const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    onSnapshot(query(collection(db, 'movies')), (snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data()}
      })

      dispatch(setMovies(tempMovies))
      setLoading(false)
    })
  }, [])

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      { !loading 
        ?  <Movies/> 
        : <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open
          >
            <CircularProgress color="inherit" />
          </Backdrop>
      }
     
    </Container>
  )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`