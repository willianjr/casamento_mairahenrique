import styled, { keyframes } from 'styled-components'
import { device } from '@/styles/global'
import Foto1 from '@/styles/assets/foto1.png'
import Foto2 from '@/styles/assets/foto2.png'
import Foto3 from '@/styles/assets/foto3.png'
import { motion } from 'framer-motion'

const backgroundAnimate = keyframes`
  from { background-position: -50% top; opacity:0 }
    to { background-position: -10% top; opacity:1 }
`

export const SessionOne = styled.main`
  background: url(${Foto1}) fixed no-repeat -10% top;
  animation: ${backgroundAnimate} 1.5s linear;
  background-size: contain;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  scroll-snap-align: end;
  @media ${device.mobileML} {
    background-size: cover;
    background-position: center top;
  }
`
export const LogoMarca = styled(motion.img).attrs(() => ({
  animate: {
    scale: [0.2, 1],
    opacity: [0, 1],
  },
  transition: { delay: 0.5, ease: 'anticipate', duration: 1 },
}))`
  width: 730px;
  height: 143px;

  @media ${device.mobileML} {
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
  }
`
export const Data = styled(motion.div).attrs(() => ({
  animate: {
    scale: [0.2, 1, 0.9, 1],
    opacity: [0, 1, 0.8, 1],
  },
  transition: { delay: 2, ease: 'anticipate', duration: 1.5 },
}))`
  transform: translate(-50%, 20%);
  color: #fff;
  display: flex;

  @media ${device.mobileML} {
    flex-direction: column;
    margin-top: -2rem;
  }
  & > p {
    font-family: ${({ theme: { fonts } }) => fonts.light.family}!important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    font-size: 1rem;
    font-weight: 200;
    letter-spacing: 0.3rem;
    & > span:first-child {
      border-bottom: 1px solid #fff;
      margin-bottom: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
  & > strong {
    font-size: 6rem;
    margin: 0 1rem;
  }
`

export const SessionTwo = styled.main`
  background: #5b5b5b url(${Foto2}) no-repeat right top;
  background-size: contain;
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 100vh;
  /*  scroll-snap-align: end; */
  transform: skewY(-3deg);
  z-index: 10;
  @media ${device.mobileML} {
    /* scroll-snap-align: start;*/
  }
`
export const ContainerSessionTwo = styled.div`
  transform: skewY(3deg);
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 100vh;
`
export const ContainerSessionFoor = styled.div`
  transform: skewY(-3deg);
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 100vh;
`

export const SessionTree = styled.main`
  background: url(${Foto1}) fixed no-repeat -10% top;
  background-size: contain;
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 100vh;
  /*  scroll-snap-align: end; */
  @media ${device.mobileML} {
    /* scroll-snap-align: start;*/
  }
`

export const SessionFoor = styled.main`
  background: #e2e2e2 url(${Foto3}) no-repeat -10vw top;
  background-size: contain;
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 100vh;
  width: 100vw;
  /*  scroll-snap-align: end; */
  transform: skewY(3deg);
  z-index: 10;
  @media ${device.mobileML} {
    /* scroll-snap-align: start;*/
  }
`

export const SessionFive = styled.main`
  background: url(${Foto1}) fixed no-repeat -10% top;
  background-size: contain;
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 100vh;
  /*  scroll-snap-align: end; */

  @media ${device.mobileML} {
    /* scroll-snap-align: start;*/
  }
`
