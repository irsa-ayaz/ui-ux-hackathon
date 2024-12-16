import React from 'react';
import Navbarmanu from "../../components/navbarmanu";
import Heromanu from "../../components/heromanu";
import Hero2manu from "../../components/hero2manu";
import Hero3manu from "../../components/hero3manu";
import Cta from "../../components/cta";
import Hero4manu from "../../components/hero4manu"
import Hero5manu from "../../components/hero5manu"
import Merged_footer from "../../components/merged_footer"


const Page = () => {
  return (
    <div>
      <Navbarmanu />
      <Heromanu />
      <Hero2manu />
    
      <Hero3manu />
      <Cta/>
      <Hero4manu/>
      <Hero5manu/>
      <Merged_footer/>
      
      
    </div>
  );
};

export default Page;
