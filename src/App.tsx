import { ThemeProvider } from 'styled-components'
import { device, GlobalStyle } from './styles/global'
import themes from './styles/themes'
import { useMediaQuery } from 'react-responsive'
import { Section } from '@/components/Section'
import {
  SessionOne,
  SessionFoor,
  SessionTwo,
  SessionTree,
  SessionFive,
  LogoMarca,
  Data,
  ContainerSessionTwo,
  ContainerSessionFoor,
} from './styles'
import Logo from '@/styles/assets/nomes.svg'
import LogoVertical from '@/styles/assets/nomes_vertical.svg'
import Menu from './components/Menu'

function App() {
  const isTabletOrMobile = useMediaQuery({ query: device.mobileML })

  return (
    <ThemeProvider theme={themes.defaultTheme}>
      <GlobalStyle />

      <Section id="painel" bgColor="#000">
        <SessionOne>
          <LogoMarca src={isTabletOrMobile ? LogoVertical : Logo} />
          <Data>
            <p>
              <span>SÁBADO</span>
              <span>16H30</span>
            </p>
            <strong>30</strong>
            <p>
              <span>NOVEMBRO</span>
              <span>2024</span>
            </p>
          </Data>
          <Menu session="one" active="home" />
        </SessionOne>
      </Section>
      <Section id="localizacao">
        <SessionTwo>
          <ContainerSessionTwo>
            <Menu session="two" active="localizacao" />
          </ContainerSessionTwo>
        </SessionTwo>
      </Section>
      <Section id="rsvp">
        <SessionTree>
          <Menu session="tree" active="rsvp" />
        </SessionTree>
      </Section>
      <Section id="presentes">
        <SessionFoor>
          <ContainerSessionFoor>
            <Menu session="foor" active="presentes" />
          </ContainerSessionFoor>
        </SessionFoor>
      </Section>
      <Section id="hoteis">
        <SessionFive>
          <Menu session="five" active="hoteis" />
        </SessionFive>
      </Section>
    </ThemeProvider>
  )
}

export default App
