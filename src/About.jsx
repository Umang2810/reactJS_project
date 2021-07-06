  import React from 'react';
  import Common from './Common';
  import wab from '../src/images/series.png'


  const About=(props)=>{
    return(
      <>
      <Common title="hope you enjoyed the site, you can contact us by clicking this button" btn="Get in touch" visit="/contact" img={wab}/>
      </>
    )
  }
  export default About;