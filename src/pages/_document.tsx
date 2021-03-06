import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />

          <link
            href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fredoka+One&family=Inter:wght@100;200;300;600;700&family=Nunito+Sans:wght@300;400;600;700;800&family=Nunito:wght@700&family=Roboto:wght@400;500;700&family=Work+Sans:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />

          <link
            href='https://fonts.googleapis.com/css2?family=Fredoka+One&family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap'
            rel='stylesheet'
          />

          <link
            href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fredoka+One&family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap'
            rel='stylesheet'
          />

          <link
            href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fredoka+One&family=Inter:wght@400;500;600;700&family=Nunito:wght@700&family=Roboto:wght@400;500;700&display=swap'
            rel='stylesheet'
          />

          <link
            href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fredoka+One&family=Inter:wght@400;500;600;700&family=Nunito+Sans:wght@300;400;600;700;800&family=Nunito:wght@700&family=Roboto:wght@400;500;700&display=swap'
            rel='stylesheet'
          />

          <link
            href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fredoka+One&family=Inter:wght@400;500;600;700&family=Nunito+Sans:wght@300;400;600;700;800&family=Nunito:wght@700&family=Roboto:wght@400;500;700&family=Work+Sans:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
