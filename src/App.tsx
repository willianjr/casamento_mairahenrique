/* eslint-disable @next/next/no-img-element */
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
import { MdLocationOn } from 'react-icons/md'
import { TbDiscount } from 'react-icons/tb'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import CAMICADO from '@/styles/assets/camicado.png'
import AMAZON from '@/styles/assets/amazon.png'
import LAVILLE from '@/styles/assets/laville.png'

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
            <div className="conteudo">
              <h3>TRIUNFO ESPAÇO</h3>
              <address>RUA DOS FILIPENSES, 85 - BETÂNIA/ IPATINGA - MG</address>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.236282279545!2d-42.55934492478535!3d-19.44537698183671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafff4eaa9763af%3A0xbb1eddb464d83fcb!2sTriunfo%20Espa%C3%A7o%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1724976833033!5m2!1spt-BR!2sbr"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
              <a
                href="https://www.google.com/maps/dir//Triunfo+Espa%C3%A7o+Eventos/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xafff4eaa9763af%3A0xbb1eddb464d83fcb?sa=X&ved=2ahUKEwjV1J6V9JjzAhVJpZUCHQJzBZQQ9Rd6BAgBEBQ"
                target="_blank">
                <MdLocationOn /> Como chegar - clique aqui para ver o mapa
              </a>
            </div>
          </ContainerSessionTwo>
        </SessionTwo>
      </Section>
      <Section id="rsvp">
        <SessionTree>
          <Menu session="tree" active="rsvp" />
          <div className="conteudo">
            <p>
              Queridos amigos e familiares,
              <br />
              <br />
              Estamos emocionados e cheios de gratidão por compartilhar com vocês um dos momentos mais importantes de
              nossas vidas – o nosso casamento!
              <br />
              <br />
              Cada um de vocês é especial para nós e, por isso, sua presença neste dia significa o mundo. Não poderíamos
              imaginar celebrar essa nova etapa sem aqueles que fizeram parte da nossa jornada e que nos apoiaram ao
              longo do caminho.
              <br />
              <br />
              Sua presença será o que tornará este dia verdadeiramente inesquecível. Estamos ansiosos para celebrar,
              rir, e criar memórias ao lado de pessoas tão queridas.
              <br />
              <br />
              Agradecemos de coração por estarem conosco neste momento tão significativo.
            </p>
            <a href="https://wa.me/+5531982913071" target="_blank">
              <strong>RSVP</strong>
              Clique aqui para confirmar a sua presença
            </a>
          </div>
        </SessionTree>
      </Section>
      <Section id="presentes">
        <SessionFoor>
          <ContainerSessionFoor>
            <Menu session="foor" active="presentes" />
            <div className="conteudo">
              <p>
                Para tornar nossa nova casa ainda mais especial e cheia de amor, criamos uma lista de presentes com
                itens que escolhemos com muito carinho. Esses presentes vão nos ajudar a criar um lar que reflita a
                nossa personalidade e a nossa história juntos. Se desejarem nos presentear, fiquem à vontade para
                escolher algo da nossa lista. Cada presente será recebido com muito amor e será uma parte importante da
                nossa nova vida a dois.
              </p>
              <a href="https://www.camicado.com.br/lista/convidado/mairaehenrique" target="_blank">
                <img src={CAMICADO} />
              </a>
              <a href="https://presentes.lavillecasa.com.br/lista/mairaehenrique" target="_blank">
                <img src={LAVILLE} />
              </a>
              <a href="https://www.amazon.com.br/hz/wishlist/ls/125TOOQPK8TVU?ref_=wl_share" target="_blank">
                <img src={AMAZON} />
              </a>
            </div>
          </ContainerSessionFoor>
        </SessionFoor>
      </Section>
      <Section id="hoteis">
        <SessionFive>
          <Menu session="five" active="hoteis" />
          <div className="conteudo">
            <p>
              Pensando no seu bem-estar e conforto, separamos algumas opções de hotéis nas proximidades do local do
              casamento. Estas opções foram escolhidas com cuidado para oferecer um bom descanso e conveniência para
              todos.
              <br />
              <br />
              Vocês encontrarão as informações sobre esses hotéis Esperamos que essas sugestões ajudem a tornar sua
              estadia mais agradável e relaxante.
            </p>
            <ul>
              <li>
                <strong>Hotel San Diego</strong>
                <address>
                  <MdLocationOn />
                  R. Palmeiras, 406 - Horto, Ipatinga - MG, 35160-311
                </address>
                <a href="tel:+553138296000">
                  <BsFillTelephoneOutboundFill />
                  (31) 3829-6000
                </a>
              </li>
              <li>
                <strong>Hotel Panorama Tower</strong>
                <address>
                  <MdLocationOn />
                  R. Maraque, 160 - Iguaçu, Ipatinga - MG, 35162-091
                </address>
                <a href="tel:+553138233000">
                  <BsFillTelephoneOutboundFill />
                  (31) 3823-3000
                </a>
              </li>
              <li>
                <strong>
                  Grande Hotel
                  <small>
                    <TbDiscount />
                    (Desconto Especial)
                  </small>
                </strong>
                <address>
                  <MdLocationOn />
                  Av. Brasil, 560 - Iguaçu, Ipatinga - MG, 35162-036
                </address>
                <a href="tel:+553133671020">
                  <BsFillTelephoneOutboundFill />
                  (31) 3367-1020
                </a>
              </li>
            </ul>
          </div>
        </SessionFive>
      </Section>
    </ThemeProvider>
  )
}

export default App
