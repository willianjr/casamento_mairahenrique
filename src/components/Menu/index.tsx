import React from 'react'
import { Container, ScrollIntoV } from './styles'

interface MenuProps {
  active: 'home' | 'localizacao' | 'rsvp' | 'presentes' | 'hoteis'
  session: 'one' | 'two' | 'tree' | 'foor' | 'five'
}

const Menu: React.FC<MenuProps> = ({ active, session }) => {
  return (
    <Container session={session} active={active}>
      <ul>
        <li>
          <ScrollIntoV selector={`#painel`} active={active === 'home'} smooth alignToTop>
            home
          </ScrollIntoV>
        </li>
        <li>
          <ScrollIntoV selector={`#localizacao`} active={active === 'localizacao'} smooth alignToTop>
            Local da Cerimônia
          </ScrollIntoV>
        </li>
        <li>
          <ScrollIntoV selector={`#rsvp`} active={active === 'rsvp'} smooth alignToTop>
            Confirmar Presença
          </ScrollIntoV>
        </li>
        <li>
          <ScrollIntoV selector={`#presentes`} active={active === 'presentes'} smooth alignToTop>
            Lista de Presentes
          </ScrollIntoV>
        </li>
        <li>
          <ScrollIntoV selector={`#hoteis`} active={active === 'hoteis'} smooth alignToTop>
            Indicações de Hotéis
          </ScrollIntoV>
        </li>
      </ul>
    </Container>
  )
}

export default Menu
