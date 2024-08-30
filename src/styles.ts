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
  flex-direction: column;
  flex: 1;
  min-height: 100vh;

  & div.conteudo {
    padding: 15rem 20rem;
    & h3 {
      color: #fff;
      font-size: 3rem;
      letter-spacing: 0.2rem;
      margin: 1rem 0;
    }
    & address {
      color: #fff;
      font-size: 1rem;
      letter-spacing: 0.1rem;
      margin-bottom: 1rem;
    }
    & iframe {
      border-radius: 1rem;
      border: none;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
    }
    & a {
      display: block;
      text-decoration: none;
      color: #000;
      cursor: pointer;
      padding: 1rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const SessionTree = styled.main`
  background: url(${Foto1}) fixed no-repeat -10% top;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: right;
  flex: 1;
  padding: 5rem 5rem 0rem 50rem;
  min-height: 100vh;
  /*  scroll-snap-align: end; */
  @media ${device.mobileML} {
    /* scroll-snap-align: start;*/
  }
  & div.conteudo {
    height: 80vh;
    margin-top: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: #efeeee;
    & p {
      width: 50%;
      height: auto;

      padding-right: 10rem;
      line-height: 2rem;
      font-size: 20px;
      text-align: justify;
      border-right: 1px solid #efeeee;
    }
    & a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #efeeee;
      cursor: pointer;
      padding: 1rem;
      &:hover {
        text-decoration: underline;
      }
      & strong {
        font-size: 2rem;
      }
    }
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
export const ContainerSessionFoor = styled.div`
  transform: skewY(-3deg);
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 100vh;
  padding: 5rem 5rem 0rem 50rem;

  & div.conteudo {
    height: 80vh;
    margin-top: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: #222;
    & p {
      width: 80%;
      height: auto;
      line-height: 2rem;
      font-size: 20px;
      text-align: center;
    }
  }
`

export const SessionFive = styled.main`
  background: url(${Foto1}) fixed no-repeat -10% top;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: right;
  flex: 1;
  padding: 5rem 5rem 0rem 50rem;
  min-height: 100vh;

  @media ${device.mobileML} {
    /* scroll-snap-align: start;*/
  }

  & div.conteudo {
    height: 80vh;
    margin-top: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: #efeeee;
    & p {
      width: 50%;
      height: auto;

      padding-right: 10rem;
      line-height: 2rem;
      font-size: 20px;
      text-align: justify;
      border-right: 1px solid #efeeee;
    }
    & ul {
      list-style: none;
      & li {
        margin-bottom: 0.5rem;
        padding-bottom: 1.2rem;
        text-align: center;
        border-bottom: 1px solid #efeeee;
        & strong {
          font-size: 1.5rem;
          & small {
            font-size: 0.8rem;
            margin-left: 0.5rem;
          }
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
    & a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #efeeee;
      cursor: pointer;
      padding: 0.5rem;
      &:hover {
        text-decoration: underline;
      }
      & strong {
        font-size: 2rem;
      }
      > svg {
        margin: 1rem;
      }
    }
  }
`
