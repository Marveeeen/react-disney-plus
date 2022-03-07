import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
        <CTA>
            <CTALogoOne src='/images/cta-logo-one.svg' alt='logo-one'/>
            <SignUp>get all there</SignUp>
            <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/06/21, the price of Disney+ and the Disney Bundle will increase by $1.
            </Description>
            <CTALogoTwo src='/images/cta-logo-two.png' alt='logo-two'/>
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
   
    &:before {
        background-position: top;
        background-size:cover;
        background-repeat: no-repeat;
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: url('/images/login-background.jpg');
        z-index: -1;
    }
`

const CTA = styled.div`
    max-width: 700px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
        
`

const CTALogoOne = styled.img`
`

const SignUp = styled.a`
    width: 100%;
    padding: 17px 0;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    background-color: #0063e5;
    color: #f9f9f9;
    border-radius: 4px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;

    &:hover {
        background: #0483ee;
    }

`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
`