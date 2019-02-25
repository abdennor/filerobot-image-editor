import React, { Component } from 'react';
import ImageEditor from './ImageEditor';
import styled, { ThemeProvider } from 'styled-components';
import { Modal } from './components/Modal';
import theme, { colorSchemes } from './assets/styles/colorScheme';
import './assets/fonts/filerobot-font.css';


class ImageEditorWrapper extends Component {
  constructor(props) {
    super();

    this.state = {
      isVisible: props.show,
      src: props.src
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.show !== prevProps.show) {
      if (this.props.show) {
        this.open(this.props.src);
      } else
        this.close();
    }
  }

  open = (src) => {
    this.setState({ isVisible: true, src });
  }

  close = () => {
    const { onClose } = this.props;

    this.setState({ isVisible: false }, () => {
      if (onClose) onClose();
    });
  }

  render() {
    const { isVisible, src } = this.state;
    const { onUpload, config } = this.props;
    const colors = colorSchemes['default'];

    if (!src || !isVisible) return null;

    return (
      <ThemeProvider theme={{ ...theme, ...colors }}>
        <Modal noBorder fullScreen={'lg'} isHideCloseBtn={true} style={{ borderRadius: 5 }}>
          <Wrapper>
            <ImageEditor
              src={src}
              config={config}
              onUpload={onUpload}
              onClose={this.close}
            />
          </Wrapper>
        </Modal>
      </ThemeProvider>
    );
  }
}

export default ImageEditorWrapper;


const Wrapper = styled.div`
  height: 100%;
  min-height: 520px;
  overflow-y: auto;

  *, *:after, *:before, *::after, *::before {
    box-sizing: border-box;
  }
  *:after, *:before, *::after, *::before {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY_ZraR2Tg8w2lzm7kLNL0-w.woff2) format('woff2');
    unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY14sYYdJg5dU2qzJEVSuta0.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY1BW26QxpSj-_ZKm_xT4hWw.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpYwt_Rm691LTebKfY2ZkKSmI.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY9DiNsR5a-9Oe_Ivpu8XWlY.woff2) format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY6E8kM4xWR1_1bYURRojRGc.woff2) format('woff2');
    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY4gp9Q8gbYrhqGlRav_IXfk.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }
`