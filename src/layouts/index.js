import styles from './index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Header />
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
}

export default BasicLayout;
