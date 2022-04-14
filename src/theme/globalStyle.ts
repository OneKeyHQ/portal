import { css } from '../internal';

export const globalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  svg {
    display: block;
  }

  a {
    text-decoration: none;
    color: #3a49cf;
  }

  html {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
      'PingFang SC', 'Microsoft YaHei', 'Source Han Sans SC', 'Noto Sans CJK SC',
      'WenQuanYi Micro Hei', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    background-color: white;
    font-size: 16px;
    line-height: 1.5;
    color: #393c4e;
  }

  ul {
    list-style: outside disc;
    margin-left: 20px;
  }

  ol {
    list-style: outside decimal;
    margin-left: 24px;
  }

  video {
    // fix safari bug https://stackoverflow.com/a/53779216/14600695
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
  }

  #content {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 32px;
      color: #080b22;
    }

    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 20px;
    }

    h4,
    h5,
    h6 {
      font-size: 18px;
    }

    p,
    ul,
    ol {
      margin-top: 24px;
    }

    li {
      margin-top: 16px;

      &::marker {
        color: #3a49cf;
      }
    }

    img {
      max-width: 100%;
      height: auto;
    }

    video {
      width: 100%;
      height: auto;
    }

    blockquote {
      margin: 40px 0;
      padding-left: 20px;
      border-left: 3px solid #3a49cf;
      font-size: 20px;
      color: #6b6d7a;
    }

    .tableWrap {
      overflow: auto;
      width: 100%;
    }

    table {
      min-width: 640px;
      text-align: left;
      border-collapse: collapse;
      border: 1px solid #eee;
      width: 100%;
      font-size: 16px;
      line-height: 24px;
      margin-top: 24px;

      thead {
        background-color: #f7f7fb;
      }

      th,
      td {
        padding: 16px 24px;
        border: 1px solid #eee;
      }

      ::-webkit-scrollbar {
        height: 10px;
        border-radius: 5px;
        background-color: #ececec;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #ceced3;
      }
    }
  }

  #buorg {
    font-family: 'Inter', sans-serif;

    .buorg-pad {
      padding: 24px;
    }

    .buorg-buttons {
      margin-top: 8px;
    }

    #buorgig,
    #buorgul,
    #buorgpermanent {
      box-shadow: none;
      margin: 0 8px;
    }
  }
`;
