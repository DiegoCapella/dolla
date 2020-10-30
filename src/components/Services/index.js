import React from 'react'

import * as S from './styled'

import Icon1 from '../../images/svg-05.svg'
import Icon2 from '../../images/svg-03.svg'
import Icon3 from '../../images/svg-04.svg'

const Services = () => {
  return (
    <S.ServicesContainer id="services">
      <S.ServicesH1>Our Services</S.ServicesH1>
      <S.ServicesWrapper>
        <S.ServicesCard>
          <S.ServicesIcon src={Icon1} />
          <S.ServicesH2>Reduce expanses</S.ServicesH2>
          <S.ServicesP>
            Aute veniam velit anim sint. Nulla deserunt incididunt sunt consectetur ut incididunt sit ipsum irure culpa sunt.
          </S.ServicesP>
        </S.ServicesCard>

        <S.ServicesCard>
          <S.ServicesIcon src={Icon2} />
          <S.ServicesH2>Virtual Offices</S.ServicesH2>
          <S.ServicesP>
            Aute veniam velit anim sint. Nulla deserunt incididunt sunt consectetur ut incididunt sit ipsum irure culpa sunt.
          </S.ServicesP>
        </S.ServicesCard>

        <S.ServicesCard>
          <S.ServicesIcon src={Icon3} />
          <S.ServicesH2>Premium Benefits</S.ServicesH2>
          <S.ServicesP>
            Aute veniam velit anim sint. Nulla deserunt incididunt sunt consectetur ut incididunt sit ipsum irure culpa sunt.
          </S.ServicesP>
        </S.ServicesCard>
      </S.ServicesWrapper>
    </S.ServicesContainer>
  )
}

export default Services
