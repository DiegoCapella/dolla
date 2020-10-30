import React from 'react'

import * as S from './styled'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <S.SidebarContainer isOpen={isOpen} onClick={toggle}>
        <S.Icon onClick={toggle}>
          <S.CloseIcon />
        </S.Icon>
        <S.SidebarWrapper>
          <S.SidebarMenu>
            <S.SidebarLink to="about" onClick={toggle}>About</S.SidebarLink>
            <S.SidebarLink to="discover" onClick={toggle}>Discover</S.SidebarLink>
            <S.SidebarLink to="services" onClick={toggle}>Services</S.SidebarLink>
            <S.SidebarLink to="signup" onClick={toggle}>Sign Up</S.SidebarLink>
          </S.SidebarMenu>
          <S.SideBtnWrap>
            <S.SidebarRoute to="/signin">Sign In</S.SidebarRoute>
          </S.SideBtnWrap>
        </S.SidebarWrapper>
      </S.SidebarContainer>
    </>
  )
}

export default Sidebar
