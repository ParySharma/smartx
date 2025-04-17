import {
  StepProfileSvg,
  StepOptimizeSvg,
  StepSettingSvg,
} from '@/styles/allSvgs/homeSvgs';

export const EMPTY_STRING = '';
export const EMPTY_ARRAY = [];
export const EMPTY_OBJECT = {};
export const UNDEFINED = undefined;
export const NULL = null;
export const EMPTY_FIELD = '--';
export const LIMIT = 10;
export const DATA_NOT_FOUND = 'No Record Found';

export const SCREEN_SOLUTION = {
  MOBILE_TO_TABLET: '@media (min-width: 320px) and (max-width: 899px)',
  TABLET_TO_LAPTOP: '@media (min-width: 640px) and (max-width: 1199px)',
  MOBILE: '@media (min-width: 320px) and (max-width: 639px)',
  TABLET: '@media (min-width: 640px) and (max-width: 899px)',
  LAPTOP: '@media (min-width: 900px) and (max-width: 1199px)',
  MINIMUM_DESKTOP: '@media (min-width: 1200px)',
  DESKTOP: '@media (min-width: 1200px) and (max-width: 1599px)',
  LARGE_DESKTOP: '@media (min-width: 1600px)',
};

export const Modules = [
  { title: 'Home', link: '/home' },
  { title: 'Services', link: '/services' },
  { title: 'Resources', link: '/resources' },
  { title: 'Support', link: '/support' },
  { title: 'About', link: '/about' },
];

export const CompanyLogos = [
  '/images/company-logos/logo1.png',
  '/images/company-logos/logo2.png',
  '/images/company-logos/logo3.png',
  '/images/company-logos/logo4.png',
  '/images/company-logos/logo5.png',
  '/images/company-logos/logo7.png',
];

export const CardContents = [
  {
    title: 'Sign Up',
    description:
      'Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text ever.Lorem Ipsum is simply dmy text.',
    icon: <StepProfileSvg />,
  },
  {
    title: 'Integration',
    description:
      'Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text ever.Lorem Ipsum is simply dmy text.',
    icon: <StepSettingSvg />,
  },
  {
    title: 'Optimize',
    description:
      'Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text ever.Lorem Ipsum is simply dmy text.',
    icon: <StepOptimizeSvg />,
  },
];
export const ExplorCardContents = [
  {
    description: 'Easily add analytics to your Android or iOS app',
    icon: '/images/explore/image-1.png',
  },
  {
    description: 'Innovative Mobile Apps for Audience Growth Strategies',
    icon: '/images/explore/image-2.png',
  },
  {
    description:
      'Easily Integrate Analytics into Your Android/iOS Application"',
    icon: '/images/explore/image-3.png',
  },
];

export const ClientCardContents = [
  {
    title: 'Sign Up',
    description:
      'Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text ever.Lorem Ipsum is simply dmy text.',
    icon: <StepProfileSvg />,
    name: 'Palermo Dikosta',
  },
  {
    title: 'Integration',
    description:
      'Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text ever.Lorem Ipsum is simply dmy text.',
    icon: <StepSettingSvg />,
    name: 'Danial waska',
  },
  {
    title: 'Optimize',
    description:
      'Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text ever.Lorem Ipsum is simply dmy text.',
    icon: <StepOptimizeSvg />,
    name: 'Jennifer Lawrence',
  },
];
