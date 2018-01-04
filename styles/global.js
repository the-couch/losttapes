const gray = '#223355'

module.exports = () => (
  <div>
    <style global jsx>{`
      * {
        box-sizing: border-box;
      }
      body, html {
        padding: 0;
        margin: 0;
      }
      font-face {
      	font-family: 'Inter';
      	src: url('/static/fonts/Inter-UI-Regular.woff') format('woff');
      	font-weight: 400;
      	font-style: normal;
      }
      @font-face {
      	font-family: 'Inter';
      	src: url('/static/fonts/Inter-UI-Italic.woff') format('woff');
      	font-weight: 400;
      	font-style: italic;
      }
      @font-face {
      	font-family: 'Inter';
      	src: url('/static/fonts/Inter-UI-Bold.woff') format('woff');
      	font-weight: 700;
      	font-style: normal;
      }
      @font-face {
      	font-family: 'Inter';
      	src: url('/static/fonts/Inter-UI-BoldItalic.woff') format('woff');
      	font-weight: 700;
      	font-style: italic;
      }

      ::selection {
        background: ${gray};
        color: white;
      }
      ::-moz-selection {
        background: ${gray};
        color: white;
      }

      html, body {
        font-family: 'Inter', helvetica;
        color: ${gray};
        background: white;
      }

      .px2 {
        padding: 2rem;
      }

      .italic {
        font-style: italic;
        letter-spacing: 0.3rem;
        font-size: 0.9rem;
      }

      .caps {
        text-transform: uppercase;
      }

      .ar {
        text-align: right;
      }

      h1, h2, h3, h4, h5, h6 {
        margin: 0.6em 0;
        line-height: 1.3;
      }
      h1, .h1 {
        max-width: 18em;
        font-size: 3rem;
      }
      h2, .h2 {
        max-width: 20em;
      }
      h3, .h3 {
        max-width: 27em;
      }
      h4, .h4 {
        max-width: 28em;
      }
      h5, .h5 {
        max-width: 34em;
      }
      h6, .h6 {
        max-width: 45em;
      }
      .small {
        font-size: 0.8rem;
      }
      p {
        font-size: 1.2rem;
        font-weight: normal;
        max-width: 40em;
      }
      a {
        text-decoration: none;
        color: ${gray};
      }
      hr {
        height: 4px;
        background-color: var(--c1);
      }
      blockquote {
        border-left: 4px solid var(--c1);
        margin: 2em 0;
        padding: 0.5em 0 0.5em 3em;
      }
      blockquote * {
        font-size: 2rem;
        max-width: 27em;
      }
      pre {
        padding: 2em;
        background-color: whitesmoke;
        word-wrap: normal;
        overflow: auto;
      }
      pre code {
        padding: 0;
        margin: 0;
        font-size: 100%;
        word-break: normal;
        white-space: pre;
        background: transparent;
        border: 0;
      }
      .track {
        letter-spacing: 0.2em;
      }
      .rte a {
        color: var(--c1);
      }
      .rte img {
        max-width: 100%;
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
      }
      .f {
        display: flex;
      }
      .jcb {
        justify-content: space-between;
      }
      `}</style>
  </div>
)
