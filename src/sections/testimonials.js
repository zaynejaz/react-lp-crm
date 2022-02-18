/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Slider from 'react-slick';
import Testimonial from 'components/cards/testimonial';
import author1 from 'assets/images/clients/author1.png';
import author2 from 'assets/images/clients/author2.png';
import author3 from 'assets/images/clients/author3.png';
import author4 from 'assets/images/clients/author4.png';
import logoMeze from 'assets/images/clients/logoMeze.png';
import logoGoogle from 'assets/images/clients/logoGoogle.png';
import logoHubspot from 'assets/images/clients/logoHubSpot.png';
import logoFocal from 'assets/images/clients/logoFocal.png';
import { rgba } from 'polished';

const data = [
  {
    id: 1,
    author: author1,
    logo: logoMeze,
    text: `Even though I’m the CEO, president, and founder of Mezze Audio, because CRM is so easy to use – I enjoy doing it! And the website is a selling machine. `,
    authorName: 'Antonio Meze',
    designation: 'Founder - Chief Industrial Designer',
  },
  {
    id: 3,
    author: author3,
    logo: logoHubspot,
    text: `Through the CRM platform, we are able to create a marketing funnel of school foodservice directors throughout the United States and provide them with content that is very specific to their needs, impacting over a billion annual school meals.`,
    authorName: 'Anya Maradonna',
    designation: 'Director - Customer Relations',
  },
  {
    id: 2,
    author: author2,
    logo: logoGoogle,
    text: `Localizing our content keeps our customers engaged, because we’re able to write about produce that’s relevant to the season in that community.`,
    authorName: 'Larry Prin',
    designation: 'Vice President - Customer Acquisition',
  },
  {
    id: 4,
    author: author4,
    logo: logoFocal,
    text: `We love being able to easily segment our audience according to their interests and needs. This allowed us to better serve them by sending them only the information they really care about. `,
    authorName: 'Hanya Guiliano',
    designation: 'Vice President - Talent & Acquisition',
  },
];

const settings = {
  arrows: false,
  dots: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <Slider sx={styles.slider} {...settings}>
          {data.map((testimonial) => (
            <Testimonial key={testimonial.id} data={testimonial} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    pt: [12, null, null, null, 10, 14],
    pb: [8, null, null, null, 10, 14],
  },
  slider: {
    '.slick-list': {
      // mx: [null, null, null, null, -2, 0],
    },
    '.slick-slide': {
      // mr: [null, null, null, null, 4, 0],
    },
    '.slick-dots': {
      display: 'flex !important',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: [3, null, null, 13],
      li: {
        mx: 1,
        display: 'flex',
      },
      button: {
        backgroundColor: rgba('#2D3D50', 0.15),
        borderRadius: 50,
        border: 0,
        cursor: 'pointer',
        padding: 0,
        overflow: 'hidden',
        textIndent: '-9999em',
        width: 10,
        height: 6,
        outline: 0,
        transition: 'all 0.3s ease-in-out 0s',
      },
      '.slick-active button': {
        backgroundColor: rgba('#2D3D50', 0.4),
        width: 20,
      },
    },
  },
};
