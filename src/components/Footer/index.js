import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'

import * as S from './styled'

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterWrap>
        <S.FooterLinksContainer>
          <S.FooterLinksWrapper>
            <S.FooterLinkItems>
              <S.FooterLinkTitle>About us</S.FooterLinkTitle>
                <S.FooterLink to="/">How it works</S.FooterLink>
                <S.FooterLink to="/">Testimonials</S.FooterLink>
                <S.FooterLink to="/">Careers</S.FooterLink>
                <S.FooterLink to="/">Inventors</S.FooterLink>
                <S.FooterLink to="/">Terms of Service</S.FooterLink>
            </S.FooterLinkItems>

            <S.FooterLinkItems>
              <S.FooterLinkTitle>Contact us</S.FooterLinkTitle>
                <S.FooterLink to="/">Contact</S.FooterLink>
                <S.FooterLink to="/">Support</S.FooterLink>
                <S.FooterLink to="/">Destinations</S.FooterLink>
                <S.FooterLink to="/">Sponsorship</S.FooterLink>
            </S.FooterLinkItems>

            <S.FooterLinkItems>
              <S.FooterLinkTitle>Videos</S.FooterLinkTitle>
                <S.FooterLink to="/">Submit Video</S.FooterLink>
                <S.FooterLink to="/">Ambassadors</S.FooterLink>
                <S.FooterLink to="/">Agency</S.FooterLink>
                <S.FooterLink to="/">Influencer</S.FooterLink>
            </S.FooterLinkItems>

            <S.FooterLinkItems>
              <S.FooterLinkTitle>Social Media</S.FooterLinkTitle>
                <S.FooterLink to="/">Instagram</S.FooterLink>
                <S.FooterLink to="/">Facebook</S.FooterLink>
                <S.FooterLink to="/">Youtube</S.FooterLink>
                <S.FooterLink to="/">Twitter</S.FooterLink>
            </S.FooterLinkItems>
          </S.FooterLinksWrapper>
        </S.FooterLinksContainer>
        <S.SocialMedia>
          <S.SocialMediaWrap>
            <S.SocialLogo to="/">
              dolla
            </S.SocialLogo>
            <S.WebsiteRights>
              dolla &copy; {new Date().getFullYear()} All rights reserved.
            </S.WebsiteRights>
            <S.SocialIcons>
              <S.SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </S.SocialIconLink>

              <S.SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaInstagram />
              </S.SocialIconLink>

              <S.SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaYoutube />
              </S.SocialIconLink>

              <S.SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaTwitter />
              </S.SocialIconLink>

              <S.SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaLinkedin />
              </S.SocialIconLink>
            </S.SocialIcons>
          </S.SocialMediaWrap>
        </S.SocialMedia>
      </S.FooterWrap>
    </S.FooterContainer>
  )
}

export default Footer
