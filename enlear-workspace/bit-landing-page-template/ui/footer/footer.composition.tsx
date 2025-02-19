import { LightTheme } from '@enlear/bit-landing-page-template.themes.light-theme';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Avatar } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Footer } from './footer';
import { FooterItem } from './footer.types';

const sections: FooterItem[] = [
  {
    title: 'Company',
    kind: 'links',
    links: [
      {
        title: 'About Us',
        url: '/about',
        icon: <InfoIcon />,
      },
      {
        title: 'Contact',
        url: '/contact',
        icon: <EmailIcon />,
      },
    ],
  },
  {
    title: 'Randoms',
    kind: 'links',
    links: [
      {
        title: 'Leadership',
        url: '/about',
        icon: <InfoIcon />,
      },
      {
        title: 'Parternship',
        url: '/contact',
        icon: <EmailIcon />,
      },
    ],
  },
  {
    title: 'Clicks',
    kind: 'links',
    links: [
      {
        title: 'Leadership',
        url: '/about',
        icon: <InfoIcon />,
      },
      {
        title: 'Parternship',
        url: '/contact',
        icon: <EmailIcon />,
      },
    ],
  },
  {
    title: 'Volt',
    kind: 'brand',
    links: [
      {
        title: 'Facebook',
        url: 'https://facebook.com',
        icon: (
          <Avatar
            variant="rounded"
            sx={{
              background: (theme) => alpha(theme.palette.info.main, 0.08),
              color: 'info.main',
              ':hover': {
                background: (theme) => alpha(theme.palette.info.main, 0.1),
              },
            }}
          >
            <FacebookIcon />
          </Avatar>
        ),
      },
      {
        title: 'LinkedIn',
        url: 'https://linkedin.com',
        icon: (
          <Avatar
            variant="rounded"
            sx={{
              background: (theme) => alpha(theme.palette.info.main, 0.08),
              color: 'info.main',
              ':hover': {
                background: (theme) => alpha(theme.palette.info.main, 0.1),
              },
            }}
          >
            <LinkedInIcon color="info" />
          </Avatar>
        ),
      },
      {
        title: 'YouTube',
        url: 'https://youtube.com',
        icon: (
          <Avatar
            variant="rounded"
            sx={{
              background: (theme) => alpha(theme.palette.error.main, 0.9),
              ':hover': {
                background: (theme) => alpha(theme.palette.error.main, 0.8),
              },
            }}
          >
            <YouTubeIcon />
          </Avatar>
        ),
      },
    ],
  },
];

export const BasicFooter = () => (
  <LightTheme>
    <div data-testid="footer">
      <Footer
        onCtaClick={() => alert('CTA Clicked')}
        ctaCaption="Get Started"
        items={sections}
        brand={{
          brandLabel: '© 2022 Volt. All Rights Reserved.',
          termsUrl: '/terms',
          privacyUrl: '/privacy',
          cookieUrl: '/cookie',
        }}
        links={{
          'hello@volt.com': 'mailto:hello@volt.com'
        }}
      />
    </div>
  </LightTheme>
);
