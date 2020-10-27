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
    alt
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
                  <B.Button to="/home">{buttonLabel}</B.Button>
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
