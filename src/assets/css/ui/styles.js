import styled from 'styled-components';

import mapa from '../../img/mapa.jpg';

export const H1 = styled.h1`
  font-size: 4.8rem;
  font-weight: 600;
  margin: 4rem 0 6rem 0;
  line-height: calc(4.8rem * 1.1);
`;

export const Section = styled.section`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-image: url(${mapa});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
