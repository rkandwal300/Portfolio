import React , { useState , useEffect } from 'react'
import Intro from './ProtFolio/Intro';
import PortFolio from './ProtFolio/PortFolio';
import { Helmet } from 'react-helmet';



function getFaviconEl() : any {
  return document.getElementById("favicon") 
}

function App() {

  // const handleGoogle = () => {
    const favicon = getFaviconEl(); // Accessing favicon element
    favicon.href = "./images/RLogo.png"; 
  //  };
    
    const [ hide , setHide ] = useState ( true);

    const handleHide = () =>setHide (false) ;

    useEffect (() => {
    const Timeout = setTimeout (handleHide , 3000)

    
      return () => {
        clearTimeout(Timeout)
;      }
    }, [])
    

    return (
        <div className=''>
            <Helmet>
                <meta charSet="utf-8" />
                <title> Protfilo</title>
                <meta name="description" content="Rahul Kandwal Portflio  build in React Typescript " />
            </Helmet>
          { hide ? (  <Intro /> ) :   ( <PortFolio/> ) }
            {/* <Profile /> */}
            </div>
    )
}

export default App;
