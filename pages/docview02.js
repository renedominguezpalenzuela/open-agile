// import { Document, Page } from 'react-pdf';
// import samplePDF from '../doc/agbs.pdf';

import Head from "next/head";

import { useEffect, useRef } from 'react';

export default function Home()
{
 const viewer = useRef(null);
  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          initialDoc: '/doc/datenschutz.docx',
          showToolbarControl: true,
          FitMode:'FitWidth'
         
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;

        instance.setFitMode('FitWidth');

        // you can now call WebViewer APIs here...
      });

    });
  }, []);

  return (
    <>
      <Head>
        <title>DatenSchutz</title>
        <meta name="description" content="OPEN AGILE" />
        <link rel="icon" href="/favicon.ico" />
     
      </Head>
    <div className='MyComponent'>
      <div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>
    </div>
    </>
  );

}