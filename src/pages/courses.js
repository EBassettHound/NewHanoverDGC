import React, { useState } from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Courses = () =>{ 
  
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const [isVisible1, setIsVisible1] = useState(false);
  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };

  return(
  
  <Layout>
    <h1>Courses mantained by New Hanover DGC</h1>
    <div className="courses">
        <div className='containerStyle'  >
            <h3>Castle Hayne</h3>
            <button onClick={toggleVisibility}>{isVisible ? 'Close' : '+ Details'}</button>
        
      
            {isVisible && (
              <p style={{ marginTop: '20px' }}>
                Located at the Northeast Regional Park and locally known as Castle Payne, this 7,046 foot monster is a mostly wooded course that features a great mix of par 3, 4, and 5's.  

​

The narrow fairways encourage you to use the landing zones, emphasizing placement and shot creativity over distance.

​

We don't call it the Payne for nothing!
              </p>)}
        </div>
        <div className='containerStyle'>
            <h3>Arrowhead</h3>
            <button onClick={toggleVisibility1}>{isVisible1 ? 'Close' : '+ Details'}</button>
        
      
            {isVisible1 && (
              <p style={{ marginTop: '20px' }}>
                This short, wooded course stretches along former fluvial terraces of the Cape Fear River. These old sand deposits create a scenic course with uphill lines, downhill lines, and lines along the ridges.
It's located off River Road, in New Hanover County.
It is a great course for beginners and for more advanced players looking to polish their short game or rack up on some aces.
              </p>)}
        </div>

    </div>
    <h1>Other Courses in the area!</h1>
    
  </Layout>
)
}
export const Head = () => <Seo title="Courses" />

export default Courses
