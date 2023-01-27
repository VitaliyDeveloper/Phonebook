import styled from 'styled-components';
import imgBG from '../../img/man-book.png';

const Main = styled.main`
  position: relative;
  min-height: 100vh;
  margin-left: 150px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    /* min-height: 500px; */
    height: 90vh;
    width: 80%;
    opacity: 50%;
    background: url(${imgBG});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

export default Main;
