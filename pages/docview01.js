// import { Document, Page } from 'react-pdf';
// import samplePDF from '../doc/agbs.pdf';


import { useEffect, useRef } from 'react';

export default function Home()
{
 const viewer = useRef(null);
  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          initialDoc: '../doc/agbs.pdf'
         
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
        // you can now call WebViewer APIs here...
      });
    });
  }, []);

  return (
    <div className='MyComponent'>
      <div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>
    </div>
  );

}