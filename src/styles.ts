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
const backgroundAnimateFoor = keyframes`
  from { background-position: -50% top; opacity:0 }
    to { background-position: -10% top; opacity:1 }
`

export const SessionOne = styled.main`
  /* background: url(${Foto1}) fixed no-repeat -10% top;
  animation: ${backgroundAnimate} 1.5s linear; */
  /* background-size: contain; */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  scroll-snap-align: end;
  @media ${device.mobileML} {
    /* background-size: cover; */
    background-position: -25% 0%;
    animation: none;
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
    margin-bottom: 5rem;
    margin-top: -5rem;
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
    background-size: cover;
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
      width: 600px;
      height: 450px;
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
    @media ${device.mobileML} {
      padding: 5rem 2rem;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      & h3 {
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
        font-size: 2rem;
      }
      & address,
      & a {
        text-align: center;
        color: #000;
        padding: 0.5rem;
        background-color: rgba(255, 255, 255, 0.8);
      }
      & iframe {
        width: 100%;
        height: 300px;
        margin: 1rem 0;
      }
    }
  }
`

export const SessionTree = styled.main`
  /* background: url(${Foto1}) fixed no-repeat -10% top; */
  /* background-size: cover; */
  display: flex;
  justify-content: center;
  align-items: right;
  flex: 1;

  padding: 5rem 5rem 0rem 45rem;

  min-height: 100vh;
  /*  scroll-snap-align: end; */

  & div.conteudo {
    width: 100%;
    height: 80vh;
    margin-top: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: #efeeee;
    & p {
      width: 60%;
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
  @media ${device.mobileML} {
    /* background-position: lfet top;
    background-repeat: repeat-x; */
    padding: 1rem;
    & div.conteudo {
      margin-top: 2rem;
      flex-direction: column;
      justify-content: start;

      & p {
        width: 100%;
        padding: 1rem;
        border-right: none;
        border-bottom: 1px solid #efeeee;
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: center;
      }
    }
  }
  @media (${device.tablet}) and ((${device.desktopMM})) {
    padding: 6rem 2rem 0rem 15rem;
    & div.conteudo {
      margin-top: 2rem;
      /* flex-direction: column; */
      /* justify-content: start; */

      & p {
        width: 100%;
        line-height: 1rem;
        /* padding: 1rem;
        border-right: none;
        border-bottom: 1px solid #efeeee;

        line-height: 1.5rem;
        text-align: center; */
      }
    }
  }
`

export const SessionFoor = styled.main`
  background: #e2e2e2 url(${Foto3}) no-repeat -10vw top;
  background-size: contain;
  animation: ${backgroundAnimateFoor} 1.5s linear;
  /* animation-play-state: paused; */
  /* animation-delay: calc(var(--scroll) * -21s); */
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 100vh;
  width: 100vw;
  /*  scroll-snap-align: end; */
  transform: skewY(3deg);
  z-index: 10;
  @media ${device.mobileML} {
    background-size: cover;
    background-position: -50vw top;
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
    flex-direction: column;
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
    & a {
      width: 260px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
      & img {
        width: 200px;
      }
    }
  }
  @media ${device.mobileML} {
    padding: 2rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    & div.conteudo {
      justify-content: flex-end;
      & p {
        width: 100%;
        color: #fff;
        line-height: 1.5rem;
        font-size: 16px;
        background-color: rgba(1, 1, 1, 0.7);
        padding: 1rem;
      }

      & a {
        width: 150px;
        text-align: center;
        color: #000;

        margin: 0.25rem;
        background-color: rgba(255, 255, 255, 0.8);
        & img {
          width: 150px;
          padding: 0.5rem;
        }
      }
    }
  }
  @media (${device.tablet}) and ((${device.desktopMM})) {
    padding: 6rem 2rem 0rem 20rem;
    & div.conteudo {
      margin-top: 2rem;
      /* flex-direction: column; */
      /* justify-content: start; */

      & p {
        width: 80%;
        line-height: 1.5rem;
        /* padding: 1rem;
        border-right: none;
        border-bottom: 1px solid #efeeee;

        line-height: 1.5rem;
        text-align: center; */
      }
    }
  }
`

export const SessionFive = styled.main`
  display: flex;
  justify-content: center;
  align-items: right;
  flex: 1;
  padding: 5rem 5rem 0rem 50rem;
  min-height: 100vh;

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
  @media ${device.mobileML} {
    padding: 2rem;
    & div.conteudo {
      margin-top: 1rem;
      flex-direction: column;
      justify-content: start;

      & p {
        width: 100%;
        padding: 1rem;
        border-right: none;
        border-bottom: 1px solid #efeeee;
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: center;
      }
      & ul {
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        & li {
          & a {
            padding: 0.1rem;
            flex-direction: row;
            & strong {
              font-size: 1.2rem;
              & small {
                font-size: 0.8rem;
                margin-left: 0.5rem;
              }
            }
            & svg {
              margin: 0.5rem;
            }
          }
        }
      }
    }
  }

  @media (${device.tablet}) and ((${device.desktopMM})) {
    padding: 6rem 2rem 0rem 15rem;
    & div.conteudo {
      margin-top: 2rem;
      /* flex-direction: column; */
      /* justify-content: start; */

      & p {
        width: 100%;
        line-height: 1.5rem;
        /* padding: 1rem;
        border-right: none;
        border-bottom: 1px solid #efeeee;

        line-height: 1.5rem;
        text-align: center; */
      }
    }
  }
`
