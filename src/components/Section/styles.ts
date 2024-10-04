import ScrollIntoView from 'react-scroll-into-view'
import styled from 'styled-components'
import { device } from '@/styles/global'

export const Container = styled.section<{ bg: string }>`
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 100dvh;
  scroll-snap-align: end;
  position: relative;
  background-color: 'transparent';
  /*overflow: hidden;*/
  @media ${device.mobileML} {
    scroll-snap-align: start;
  }
`

export const ToDown = styled.button<{ direction: 'down' | 'up'; bgColor: string }>`
  flex: 1;
  border: none;

  background: 'transparent';

  ${(props) => (props.direction === 'down' ? 'bottom:0vh' : 'top:6.5vh')};

  > a {
    cursor: pointer;
    display: block;
    text-align: center;
    width: 4.5rem;
    height: 2rem;
    padding-top: 0.3rem;
    :hover {
      > svg {
        transition: transform 0.2s;
        transform: scale(2);
      }
    }
  }

  @media ${device.mobileML} {
    ${(props) => (props.direction === 'down' ? 'bottom:0vh' : 'top:10.5vh')};
  }
`
export const ScrollIntoV = styled(ScrollIntoView)`
  width: 4.5rem;
  height: 2rem;
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  display: flex;

  justify-content: center;
  align-items: stretch;
  border-radius: 0.5rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  overflow: hidden;
  z-index: 999000;
  cursor: pointer;
`
