import styled from 'styled-components';
import imgBG from '../../img/man-book.png';

const Main = styled.main`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    left: 0;
    min-height: 700px;
    width: 100vh;
    opacity: 50%;
    background: url(${imgBG});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

export default Main;
