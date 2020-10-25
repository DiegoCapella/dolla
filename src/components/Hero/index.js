import React, { useState } from 'react'

import * as S from './styled'

import Video from '../../videos/video.mp4'
import * as B from '../Button/styled'

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <S.HeroContainer>
      <S.HeroBg>
        <S.VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </S.HeroBg>
      <S.HeroContent>
        <S.HeroH1>Virtual Banking made Easy</S.HeroH1>
        <S.HeroP>
          Lorem ipsum non velit proident eu id excepteur fugiat deserunt adipisicing dolore labore consectetur nulla sint proident.
        </S.HeroP>
        <S.HeroBtnWrapper>
          <B.Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            Get started {hover ? <S.ArrowForward /> : <S.ArrowRight /> }
          </B.Button>
        </S.HeroBtnWrapper>
      </S.HeroContent>
    </S.HeroContainer>
  )
}

export default Hero