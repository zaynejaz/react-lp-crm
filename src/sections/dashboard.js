/** @jsxRuntime classic */
/** @jsx jsx */
import { rgba } from 'polished';
import { jsx, Box, Container } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import PieChart from 'components/icons/pie-chart';
import Cog from 'components/icons/cog';
import Currency from 'components/icons/currency';
import Briefcase from 'components/icons/briefcase';
import TabButton from 'components/tabs/tab-button';

import taskManager from 'assets/images/task-manager.png';
import taskManager2 from 'assets/images/task-manager2.png';
import taskManager3 from 'assets/images/task-manager3.png';
import taskManager4 from 'assets/images/task-manager4.png';

const data = [
  {
    id: 1,
    title: 'Reach',
    icon: <PieChart />,
    image: taskManager,
  },
  {
    id: 2,
    title: 'Nurture',
    icon: <Cog />,
    image: taskManager2,
  },
  {
    id: 3,
    title: 'Convert',
    icon: <Currency />,
    image: taskManager3,
  },
  {
    id: 4,
    title: 'Grow',
    icon: <Briefcase />,
    image: taskManager4,
  },
];

const Dashboard = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="The #1 Automation Platform"
          description="...for Ecommerce, ...for B2C Companies, ...for B2B Companies"
        />
        <Tabs sx={styles.dashboardTabs} animated={{ tabPane: true }}>
          {data.map((tab) => (
            <TabPane key={tab.id} tab={<TabButton tab={tab} />}>
              <Image src={tab.image} alt={tab.title} />
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};

export default Dashboard;

const styles = {
  section: {
    backgroundColor: rgba('#7141F8', 0.03),
    pt: [8, null, null, 12],
    pb: [6, null, null, null, 12],
  },
  heading: {
    marginBottom: [6, null, null, 12],
    maxWidth: ['none', null, null, 565, null, 'none'],
    p: {
      color: rgba('#02073E', 0.7),
      maxWidth: 445,
    },
  },
  dashboardTabs: {
    border: 0,
    '.rc-tabs-nav-wrap': {
      justifyContent: 'center',
      marginBottom: 8,
      overflow: 'unset',
    },
    '.rc-tabs-ink-bar': {
      display: 'none',
    },
    '.rc-tabs-tabpane, .rc-tabs-tab-btn': {
      outline: 0,
    },
    '.rc-tabs-nav-list': {
      flexWrap: ['unset', null, null, 'unset'],
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      ':nth-of-type(1),:nth-of-type(2)': {
        mb: [1, null, null, 0],
      },
      ':nth-of-type(2)': {
        ml: [1, null, null, 0],
      },
      ':nth-of-type(4)': {
        ml: [1, null, null, 0],
      },
      '+ .rc-tabs-tab': {
        ml: [null, null, null, 4, 8],
      },
    },
    '.rc-tabs-tab-active': {
      backgroundColor: 'white',
      fontWeight: [400, null, null, 500],
      boxShadow: '0px 4px 6px rgba(125, 128, 170, 0.08)',
      borderRadius: 5,
      padding: ['10px 10px', null, null, '10px 18px'],
    },
  },
};
