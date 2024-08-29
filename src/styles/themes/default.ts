import themeProps from '../../interfaces/theme'

const defaultTheme: themeProps = {
  name: 'Black',
  colors: {
    background: {
      card: '#efefef',
      button: '#181818',
      body: '#050301',
      menu: '#20170f',
    },
    pallets: {
      a: '#FFF0D7',
      b: '#FFE7BD',
      c: '#EFC68F',
      d: '#E8AA67',
      e: '#211911',
      f: '#110E0A',
      footer: '#392C23',
    },
    primary: {
      white: '#ffffff',
      black: '#000000',
      gold: '#b96c18',
    },
    golds: {
      90: '#d47c1b',
      80: '#e38b2a',
      70: '#e79944',
      60: '#eaa85f',
      50: '#eeb67a',
      40: '#f1c594',
      30: '#f5d3af',
      20: '#f8e2ca',
      10: '#fcf0e4',
    },
    silvers: {
      5: '#FCFCFC',
      10: '#F0F0F0',
      15: '#E3E3E3',
      20: '#D7D7D7',
      25: '#CACACA',
      30: '#BDBDBD',
      35: '#A4A4A4',
      40: '#989898',
      45: '#8B8B8B',
      50: '#727272',
      55: '#585858',
    },
    blacks: {
      95: '#0D0D0D',
      90: '#191919',
      85: '#262626',
      80: '#333333',
      75: '#3F3F3F',
      70: '#4C4C4C',
    },
    input: {
      default: {
        background: '#0B0A0A',
        text: '#fff',
        textHover: '#b96c18',
        border: '#9B9B9B',
        borderHover: '#b96c18',
        shadowHover: '#585858',
      },
    },
    button: {
      default: {
        background: '#0B0A0A',
        text: '#fff',
        textHover: '#b96c18',
        border: '#9B9B9B',
        borderHover: '#b96c18',
        shadowHover: '#585858',
      },
    },
    link: {
      default: {
        background: '#0D0D0D',
        backgroundHover: '#262626',
        text: '#FFE7BD',
        textHover: '#EFC68F',
      },
    },
  },
  fonts: {
    default: {
      family: 'ParalucentThin',
      size: '14',
      weight: 'regular',
    },
    medium: {
      family: 'ParalucentMedium',
      size: '14',
      weight: 'regular',
    },
    light: {
      family: 'ParalucentCondLight',
      size: '14',
      weight: 'regular',
    },
    title: {
      family: 'ParalucentCondBold',
      size: '16',
      weight: 'bolder',
    },
  },
}

export default defaultTheme
