import React, { useEffect } from 'react';
import { Button } from '../../globalStyles';
import AOS from 'aos'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
useEffect(()=>{
AOS.init({
duration:800
})
})
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading data-aos='zoom-in-up'>
          Unete a nuestro programa y recibe las ultimas novedades!
        </FooterSubHeading>
        <FooterSubText data-aos='fade-up'>Puedes Subscribirte en cualquier momento!</FooterSubText>
        <Form data-aos='zoom-in-up'>
          <FormInput name='email' type='email' placeholder='Tu Email' />
          <Button fontBig>Subscrirse</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper data-aos='zoom-in-left'>
          <FooterLinkItems>
            <FooterLinkTitle>Acerca de nosotros</FooterLinkTitle>
            <FooterLink to='/'>Sobre nosotros</FooterLink>
            <FooterLink to='/'>Testimonios</FooterLink>
            <FooterLink to='/'>Sobre nuestra carrera</FooterLink>
            <FooterLink to='/'>Terminos de servicios</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contactanos</FooterLinkTitle>
            <FooterLink to='/'>Contacto</FooterLink>
            <FooterLink to='/'>Soporte</FooterLink>
            <FooterLink to='/'>Destinos</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems data-aos='zoom-in-left'>
            <FooterLinkTitle>Redes Sociales</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'  data-aos='zoom-in-up' data-aos-offset='-150'>
            <SocialIcon />
            Translators
          </SocialLogo>
          <WebsiteRights  data-aos='zoom-in-up' data-aos-offset='-150'>Translators © 2022</WebsiteRights>
          <SocialIcons  data-aos='zoom-in-up' data-aos-offset='-150'>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
              '/'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
