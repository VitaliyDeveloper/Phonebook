import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
import Main from './Layout.dtyled';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Main style={{ minHeight: '100vh', marginLeft: '160px' }}>
        <Outlet />
      </Main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
