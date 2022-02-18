/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logoLight from 'components/icons/logoLight.svg';
import logoDark from 'components/icons/logoDark.svg';

export default function Logo({ isSticky, light, dark, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      {light ? (
        <Image src={logoLight} alt="zayn ejaz logo" />
      ) : dark ? (
        <Image src={logoDark} alt="zayn ejaz logo" />
      ) : (
        <Image src={isSticky ? logoDark : logoLight} alt="zayn ejaz logo" />
      )}
    </Link>
  );
}

const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    img: {
      maxWidth: [128, null, '100%'],
    },
  },
};
