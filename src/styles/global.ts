import { createGlobalStyle, keyframes } from 'styled-components'
import themeProps from '@/interfaces/theme'
import { Fonts } from '@/styles/fonts'
import Foto1 from '@/styles/assets/foto1.png'
const backgroundAnimate = keyframes`
  from { background-position: -50vw top; opacity:0 }
    to { background-position: left top; opacity:1 }
`
const backgroundAnimateMobile = keyframes`
  from { background-position: 200% top; opacity:0 }
    to { background-position: 60% top; opacity:1 }
`
export const deviceSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '600px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(min-width: ${deviceSize.mobileS})`,
  mobileM: `(min-width: ${deviceSize.mobileM})`,
  mobileL: `(min-width: ${deviceSize.mobileL})`,
  mobileMS: `(max-width: ${deviceSize.mobileS})`,
  mobileMM: `(max-width: ${deviceSize.mobileM})`,
  mobileML: `(max-width: ${deviceSize.mobileL})`,
  tablet: `(min-width: ${deviceSize.tablet})`,
  tabletM: `(max-width: ${deviceSize.tablet})`,
  laptop: `(min-width: ${deviceSize.laptop})`,
  laptopM: `(max-width: ${deviceSize.laptop})`,
  laptopL: `(min-width: ${deviceSize.laptopL})`,
  laptopML: `(max-width: ${deviceSize.laptopL})`,
  desktop: `(min-width: ${deviceSize.desktop})`,
  desktopM: `(max-width: ${deviceSize.desktop})`,
}
export const GlobalStyle = createGlobalStyle<{ theme: themeProps }>`
  *{
    font-family:${({ theme: { fonts } }) => fonts.medium.family};
    font-size:${({ theme: { fonts } }) => fonts.medium.size};
    box-sizing:border-box;

  }
  html{
    /* scroll-snap-type: y mandatory;
    scroll-behavior: smooth; */


  }
body{

    background:${({ theme: { colors } }) => colors.background.body} url(${Foto1}) fixed no-repeat;
    background-size: contain;
    animation: ${backgroundAnimate} 1.5s linear;
    min-height:100vh;
    padding:0;
    margin:0;
    /* scroll-padding:0.5rem; */
     @media ${device.mobileML} {
    /* background-size: cover; */
    background-position: 60% top;
    animation: ${backgroundAnimateMobile} 1.5s linear;
     background-size: auto;
  }

	}
  input{
    background-color: ${({ theme: { colors } }) => colors.input.default.background};
    border-color: ${({ theme: { colors } }) => colors.input.default.border};
    color: ${({ theme: { colors } }) => colors.input.default.text};
  }
  h2,h3{
    font-family:${({ theme: { fonts } }) => fonts.title.family};
  }
  @font-face {
    font-family: ValeSansRegular;
    src: url(${Fonts.ValeSansRegular}) format("woff");
  }
  @font-face {
    font-family: ValeSansBold;
    src: url(${Fonts.ValeSansBold}) format("woff");
  }
  @font-face {
    font-family: ValeSansExtraBold;
    src: url(${Fonts.ValeSansExtraBold}) format("woff");
  }
  @font-face {
    font-family: ValeSansSemiBold;
    src: url(${Fonts.ValeSansSemiBold}) format("woff");
  }
  @font-face {
    font-family: ValeSansMedium;
    src: url(${Fonts.ValeSansMedium}) format("woff");
  }
  @font-face {
    font-family: ValeSansLight;
    src: url(${Fonts.ValeSansLight}) format("woff");
  }
  @font-face {
    font-family: ValeSansExtraLight;
    src: url(${Fonts.ValeSansExtraLight}) format("woff");
  }

  @font-face {
    font-family: ParalucentMedium;
    src: url(${Fonts.ParalucentMedium}) format("woff");
  }
  @font-face {
    font-family: ParalucentCondLight;
    src: url(${Fonts.ParalucentCondLight}) format("woff");
  }
  @font-face {
    font-family: ParalucentCondBold;
    src: url(${Fonts.ParalucentCondBold}) format("woff");
  }
  @font-face {
    font-family: ParalucentThin;
    src: url(${Fonts.ParalucentThin}) format("woff");
  }

`
