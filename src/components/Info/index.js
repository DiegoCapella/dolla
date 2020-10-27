import React from 'react'
import * as B from '../Button/styled'
import { homeObjOne } from './data'

import * as S from './styled'

const Info = () => {
  const { 
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline,
    darkText,
    description,
    buttonLabel,
    img, 
    alt,
    dark,
    primary
  } = homeObjOne;
  return (
    <>
      <S.InfoContainer lightBg={lightBg} id={id}>
        <S.InfoWrapper>
          <S.InfoRow imgStart={imgStart}>
            <S.Column1>
              <S.TextWrapper>
                <S.TopLine>{topLine}</S.TopLine>
                <S.Heading lightText={lightText}>{headline}</S.Heading>
                <S.Subtitle darkText={darkText}>{description}</S.Subtitle>
                <S.BtnWrap>
                  <B.Button 
                    to="/home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >{buttonLabel}</B.Button>
                </S.BtnWrap> 
              </S.TextWrapper>
            </S.Column1>
            <S.Column2>
              <S.ImgWrap>
                <S.Img src={img} alt={alt} />
              </S.ImgWrap>
            </S.Column2>
          </S.InfoRow>
        </S.InfoWrapper>
      </S.InfoContainer>
    </>
  )
}

export default Info
