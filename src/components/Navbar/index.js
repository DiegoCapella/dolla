import React from 'react'

import * as S from './styled'

const Navbar = ({toggle}) => {

  return (
    <>
      <S.Nav>
        <S.NavbarContainer>
          <S.NavLogo to="/">dolla</S.NavLogo>
          <S.MobileIcon onClick={toggle}>
            <S.Bars />
          </S.MobileIcon>
          <S.NavMenu>
            <S.NavItem>
              <S.NavLinks to="about">About</S.NavLinks>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinks to="discover">Discover</S.NavLinks>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinks to="services">Services</S.NavLinks>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinks to="signup">Sign Up</S.NavLinks>
            </S.NavItem>
          </S.NavMenu>
          <S.NavBtn>
            <S.NavBtnLink to="signin">Sign In</S.NavBtnLink>
          </S.NavBtn>
        </S.NavbarContainer>
      </S.Nav>
    </>
  )
}

export default Navbar
