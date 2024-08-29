import React, { ReactNode } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { Container, ScrollIntoV, ToDown } from './styles'

interface SectionProps {
  height?: string | number
  children: ReactNode
  id?: string
  bgColor?: string
}

export const Section: React.FC<SectionProps> = ({ bgColor = 'transparent', id = '', children }) => {
  return (
    <Container id={id} bg={bgColor}>
      {children}
    </Container>
  )
}
interface ToDownProps {
  url?: string
  direction: 'down' | 'up'
  colorIcon: string
  bgColor: string
  id?: string
}
export const ToDownButton: React.FC<ToDownProps> = ({ id = '', bgColor, colorIcon, url = '', direction = 'down' }) => {
  return (
    <ScrollIntoV selector={`#${url}`} smooth alignToTop>
      <ToDown id={id} direction={direction} bgColor={bgColor}>
        {direction === 'down' ? <FaAngleDown color={colorIcon} /> : <FaAngleUp color={colorIcon} />}
      </ToDown>
    </ScrollIntoV>
  )
}
