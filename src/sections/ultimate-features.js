/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/icons/featureIcon1.svg';
import icon2 from 'assets/images/icons/featureIcon2.svg';
import icon3 from 'assets/images/icons/featureIcon3.svg';
import icon4 from 'assets/images/icons/featureIcon4.svg';
import icon5 from 'assets/images/icons/featureIcon5.svg';
import icon6 from 'assets/images/icons/featureIcon6.svg';
import icon7 from 'assets/images/icons/featureIcon7.svg';
import icon8 from 'assets/images/icons/featureIcon8.svg';
import icon9 from 'assets/images/icons/featureIcon9.svg';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Advanced Reporting',
    description: `Find out what's working and what's not. Dig into your data to find opportunities to grow. `,
    moreLink: '#',
  },
  {
    id: 2,
    icon: icon2,
    title: 'Integrated Forms',
    description: `Create custom forms to collect emails, get more customers, and start your automations. `,
    moreLink: '#',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Site Tracking',
    description: `See what people do on your website. Use that info to turn them into customers. `,
    moreLink: '#',
  },
  {
    id: 4,
    icon: icon4,
    title: 'Training  and Support',
    description: `Get fast, 1-on-1 support and training. Access our library of tutorial videos and help guides. `,
    moreLink: '#',
  },
  {
    id: 5,
    icon: icon5,
    title: 'Migration Services',
    description: `We'll help you move everything from your current software for free. Yup, free. `,
    moreLink: '#',
  },
  {
    id: 6,
    icon: icon6,
    title: 'Gmail Extension',
    description: `Work out of your Gmail account and manage your contacts from anywhere online. `,
    moreLink: '#',
  },
  {
    id: 7,
    icon: icon7,
    title: 'Email Segmentation',
    description: `Group your contacts by location, age, and almost any behavior with advanced segmentation tools. `,
    moreLink: '#',
  },
  {
    id: 8,
    icon: icon8,
    title: 'Automation Goals',
    description: `Measure your marketing by creating customizable, automated goals. `,
    moreLink: '#',
  },
  {
    id: 9,
    icon: icon9,
    title: 'CRM App',
    description: `Access your contacts, send emails, check tasks, and update deals on the go. `,
    moreLink: '#',
  },
];

const UltimateFeatures = () => {
  return (
    <section sx={styles.section} id="services">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="It doesn’t stop at email marketing… "
          description="We’re constantly refining our product. Adding new features. Working to help your business grow."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    pt: [12],
    pb: [6, null, null, 8, 15],
  },
  heading: {
    marginBottom: [40, 50, 60, 80],
    maxWidth: ['none', null, null, 565, null, 'none'],
  },
  features: {
    gap: [6, null, null, '90px 40px'],
    display: ['grid'],
    maxWidth: 1175,
    mx: 'auto',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 300px)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
  },
};
