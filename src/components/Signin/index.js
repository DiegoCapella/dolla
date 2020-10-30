import React from 'react'

import * as S  from './styled'

const SignIn = () => {
  return (
    <>
      <S.Container>
        <S.FormWrap>
          <S.Icon to="/">dolla</S.Icon>
          <S.FormContent>
            <S.Form action="#">
              <S.FormH1>Sign in to your account</S.FormH1>
              <S.FormLabel htmlFor="for">Email</S.FormLabel>
              <S.FormInput type="email" required />
              <S.FormLabel htmlFor="for">Password</S.FormLabel>
              <S.FormInput  type="password" required/>
              <S.FormButton>Continue</S.FormButton>
              <S.Text>Forgot password</S.Text>
            </S.Form>
          </S.FormContent>
        </S.FormWrap>
      </S.Container>
    </>
  )
}

export default SignIn
