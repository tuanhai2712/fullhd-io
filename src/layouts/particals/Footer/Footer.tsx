import React from 'react';
import { Container, FooterStyled } from './style';

const footerContent = [
  {
    title: 'Ecosystem',
    subLinks: [
      {
        subTitle: 'FullHD',
        route: '/about-us/binary-option',
      },
      {
        subTitle: 'AI ROBOT',
        route: '/about-us/introduction-ai',
      },
      {
        subTitle: 'Matrix',
        route: '/about-us/matrix',
      },
      {
        subTitle: 'Copy Trade',
        route: '/copy-trading/login',
      },
      {
        subTitle: 'Coin',
        route: '/#',
      },
      {
        subTitle: 'Game',
        route: '/#',
      },
    ],
  },
  {
    title: 'Information',
    subLinks: [
      {
        subTitle: 'Home',
        route: '/home',
      },
      {
        subTitle: 'Overview',
        route: '/about-us/overview',
      },
      {
        subTitle: 'Affliate Program',
        route: '/affiliate-program',
      },
      {
        subTitle: 'Sign in',
        route: '/register',
      },
      {
        subTitle: 'White paper',
        route: '/White paper.pdf',
        blank: true,
      },
      {
        subTitle: 'FAQs',
        route: '/faqs',
      },
    ],
  },
  {
    title: 'Legal',
    subLinks: [
      {
        subTitle: 'Privacy & Policy',
        route: '/privacy-policy',
      },
      {
        subTitle: 'Term of Conditions',
        route: '/term-conditions',
      },
      {
        subTitle: 'Personal Data Protection',
        route: '/#',
      },
    ],
  },
  {
    title: 'Contact',
    subText: [
      'Support 24/7: support@fullhd.io',
      'We use cookies to enhance your experience. By staying on our website you agree to our use of cookies. You also accept our Terms and Conditions, Acceptable use Policy and Privacy Policy.',
    ],
  },
];
const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <Container>
        <div className="info">
          <div className="row">
            {footerContent.map((item, index) => (
              <div className="col-12 col-sm-6 col-lg-3" key={index}>
                <h3>{item.title}</h3>
                {item.subLinks &&
                  item.subLinks.map((subLink, index) => (
                    <div className="link" key={index}>
                      <a
                        target={subLink.blank ? '_blank' : ''}
                        href={subLink.route}
                      >
                        {subLink.subTitle}
                      </a>
                    </div>
                  ))}
                {item.subText &&
                  item.subText.map((text, index) => <p key={index}>{text}</p>)}
              </div>
            ))}
          </div>
        </div>
        <div className="copyright">
          <span>Copyright © 2020 FullHD</span>
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
