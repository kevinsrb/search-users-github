import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  

  render() {
    return (
      <Html lang="es">
        <Head>
            { CssBaseline.flush() } 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
