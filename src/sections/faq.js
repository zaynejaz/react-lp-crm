/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import FaqItem from 'components/cards/faq-item';

const data = [
  {
    id: 1,
    ques: 'What is CRM?',
    ans: `CRM is a category-defining Customer Experience Automation Platform that helps over 150,000 businesses in 170+ countries meaningfully connect and engage with their customers. It creates optimized customer experiences by automating many behind-the-scenes marketing, sales, and support processes. Businesses of all sizes have access to hundreds of pre-built automations that combine email marketing, marketing automation, CRM, and machine learning for powerful cross-channel orchestration, segmentation and personalization.`,
  },
  {
    id: 2,
    ques: 'Do I need a lot of technical experience to use CRM?',
    ans: `You don’t need to be a developer or a designer to use CRM. Anyone can create email marketing campaigns and marketing automations on our platform. Our Automation Recipe Library contains hundreds of pre-built automations — no coding skills are required. If you do find yourself needing some help, feel free to reach out to our support team through our Contact page, or visit our Support Center.`,
  },
  {
    id: 3,
    ques: 'How does the free trial work?',
    ans: `Our 14-day free trial allows you to test the platform with up to 100 contacts and up to 100 emails sent. The features available within our trial match our Professional tier of features. If you are on a trial account, you won’t be charged unless you manually upgrade to a paid account — you can simply let your trial expire should you not want to continue. `,
  },
  {
    id: 4,
    ques: 'Can I extend my free trial?',
    ans: `Your trial will expire after 14 days. If you need more time, you can request a one-time extension by contacting your account executive or our support team. Please note that we may not be able to grant all trial extension requests. `,
  },
  {
    id: 5,
    ques: 'Does CRM automatically increase my contact limit',
    ans: `We do not automatically increase your contact limit. You can manually increase your contact limit in your account’s "Billing & Upgrade" settings. Your account will display an alert when you approach your limit.`,
  },
  {
    id: 6,
    ques: 'What payment methods do you accept?',
    ans: `We accept all major credit and debit cards. For annual plans we also accept Paypal, checks, and wire transfers. `,
  },
  {
    id: 7,
    ques: 'I have more questions. How can I talk to someone?',
    ans: `You can reach our sales team by calling our toll free number at +0 (123) 456-7890 or by contacting us through our Contact page.`,
  },
  {
    id: 8,
    ques: 'How do I request a demo?',
    ans: `To schedule a demo with an ActiveCampaign expert, please visit our Demo Request page.`,
  },
];

const masonryOptions = { originTop: true };

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [8, null, null, 15] }}
          description="CRM COMMON FAQS "
          title="Frequently Asked Questions"
        />
        <Masonry options={masonryOptions} sx={styles.grid}>
          {data.map((item) => {
            return <FaqItem key={item.id} faq={item} className="faq-item" />;
          })}
        </Masonry>
        <Box sx={styles.loadMore}>
          <Button variant="text">Still Have Question?<br/>Contact Us</Button>
        </Box>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 10, 14],
    pb: [10, null, null, 7, null, 14, 17],
  },
  grid: {
    mx: [null, null, null, -6, -8, 'unset'],
  },
  loadMore: {
    paddingTop: [null, null, null, 3],
    textAlign: 'center',
    button: {
      backgroundColor: '#ECF2F7',
      color: '#738295',
      minHeight: 50,
      px: '22px',
      ':hover': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
  },
};
