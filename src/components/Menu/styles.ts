import ScrollIntoView from 'react-scroll-into-view'
import styled, { css } from 'styled-components'
import { device } from '@/styles/global'
import { motion } from 'framer-motion'

const cssSessionOne = css<{ active: 'home' | 'localizacao' | 'rsvp' | 'presentes' | 'hoteis' }>`
  ${({ active }) =>
    active &&
    css`
      border-top: 1px dotted #888;
      padding-top: 2rem;
      position: absolute;
      bottom: 20vh;
      & ul {
        & li {
          border-right: 1px solid white;
          & :hover {
            border-bottom: 1px solid #fcfcfc;
          }
          & div {
            color: #bababa;
            background-color: rgba(0, 0, 0, 0.5);
            font-size: 1rem;
            letter-spacing: 0.2rem;
            padding: 0.5rem 1rem;
            & :hover {
              background-color: rgba(0, 0, 0, 0.8);
              border-bottom: 1px solid #fcfcfc;
            }
            @media ${device.mobileML} {
              background-color: transparent;
              padding: 0;
            }
          }
        }
        @media ${device.mobileML} {
          & li {
            border-bottom: 1px solid white;
          }
        }
      }
      @media ${device.mobileML} {
        bottom: 0vh;
        padding-top: 0rem;
        border-top: none;
        background-color: rgba(0, 0, 0, 0.5);
      }
    `}
`
const cssSessionFive = css`
  padding-top: 2rem;
  width: 65vw;
  position: absolute;
  top: 5vh;
  right: 0;
  & ul {
    & li {
      border-right: 1px solid #fcfcfc;
      & :hover {
        border-bottom: 1px solid #fcfcfc;
      }
      & div {
        font-size: 1rem;
        letter-spacing: 0.1rem;
        padding: 0.1rem;
        color: #bababa;
        & :hover {
          border-bottom: 1px solid #fcfcfc;
        }
        @media ${device.mobileML} {
          background-color: transparent;
          padding: 0;
        }
      }
    }
    @media ${device.mobileML} {
      & li {
        border-bottom: 1px solid #fcfcfc;
      }
    }
  }

  @media ${device.mobileML} {
    bottom: 0vh;
    padding-top: 0rem;
    border-top: none;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
const cssSessionTree = css`
  padding-top: 2rem;
  width: 65vw;
  position: absolute;
  top: 5vh;
  right: 0;
  & ul {
    & li {
      border-right: 1px solid #fcfcfc;
      & :hover {
        border-bottom: 1px solid #fcfcfc;
      }
      & div {
        font-size: 1rem;
        letter-spacing: 0.1rem;
        padding: 0.1rem;
        color: #bababa;
        & :hover {
          border-bottom: 1px solid #fcfcfc;
        }
        @media ${device.mobileML} {
          background-color: transparent;
          padding: 0;
        }
      }
    }
    @media ${device.mobileML} {
      & li {
        border-bottom: 1px solid #fcfcfc;
      }
    }
  }

  @media ${device.mobileML} {
    bottom: 0vh;
    padding-top: 0rem;
    border-top: none;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
const cssSessionTwo = css`
  padding-top: 2rem;
  width: 65vw;
  position: absolute;
  top: 10vh;
  & ul {
    & li {
      border-right: 1px solid #111;
      & :hover {
        border-bottom: 1px solid #111;
      }
      & div {
        font-size: 1rem;
        letter-spacing: 0.1rem;
        padding: 0.1rem;
        & :hover {
          border-bottom: 1px solid #111;
        }
        @media ${device.mobileML} {
          background-color: transparent;
          padding: 0;
        }
      }
    }
    @media ${device.mobileML} {
      & li {
        border-bottom: 1px solid #111;
      }
    }
  }

  @media ${device.mobileML} {
    bottom: 0vh;
    padding-top: 0rem;
    border-top: none;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
const cssSessionFoor = css`
  padding-top: 2rem;
  width: 65vw;
  position: absolute;
  top: 5vh;
  right: 0;
  & ul {
    & li {
      border-right: 1px solid #111;
      & :hover {
        border-bottom: 1px solid #111;
      }
      & div {
        font-size: 1rem;
        letter-spacing: 0.1rem;
        padding: 0.1rem;
        & :hover {
          border-bottom: 1px solid #111;
        }
        @media ${device.mobileML} {
          background-color: transparent;
          padding: 0;
        }
      }
    }
    @media ${device.mobileML} {
      & li {
        border-bottom: 1px solid #111;
      }
    }
  }

  @media ${device.mobileML} {
    bottom: 0vh;
    padding-top: 0rem;
    border-top: none;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const Container = styled(motion.nav).attrs(() => ({
  animate: {
    opacity: [0, 1],
    y: [200, 0],
  },
  transition: { delay: 1, ease: 'anticipate', duration: 0.5 },
}))<{
  session: 'one' | 'two' | 'tree' | 'foor' | 'five'
  active: 'home' | 'localizacao' | 'rsvp' | 'presentes' | 'hoteis'
}>`
  ${({ session }) => session === 'one' && cssSessionOne}
  ${({ session }) => session === 'two' && cssSessionTwo}
  ${({ session }) => session === 'tree' && cssSessionTree}
  ${({ session }) => session === 'foor' && cssSessionFoor}
  ${({ session }) => session === 'five' && cssSessionFive}
  display: flex;
  flex-direction: column;
  & ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    & li {
      margin: 0 1rem;
      text-transform: uppercase;
      padding-right: 1rem;
      &:last-child {
        border-right: none;
      }
    }
    @media ${device.mobileML} {
      flex-direction: column;

      & li {
        border-right: none;
        padding-right: 0;
        width: 100%;
        margin: 0.5rem auto;
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
`

export const ScrollIntoV = styled(ScrollIntoView)<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: stretch;
  z-index: 999000;
  cursor: pointer;
  font-family: ${({ theme: { fonts } }) => fonts.medium.family};
  font-weight: ${(props) => (props.active ? '800' : '100')};

  @media ${device.mobileML} {
    background-color: transparent;
    padding: 0;
  }
`
