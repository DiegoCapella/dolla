import React from 'react'

import * as S from './styled'

const Sidebar = () => {
  return (
    <>
      <S.SidebarContainer>
        <S.Icon>
          <S.CloseIcon />
        </S.Icon>
        <S.SidebarWrapper>
          <S.SidebarMenu>
            <S.SidebarLink to="/about">About</S.SidebarLink>
            <S.SidebarLink to="/discover">Discover</S.SidebarLink>
            <S.SidebarLink to="/services">Services</S.SidebarLink>
            <S.SidebarLink to="/signup">Sign Up</S.SidebarLink>
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
