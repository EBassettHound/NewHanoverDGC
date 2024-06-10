import React, { useState } from 'react';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"




const IndexPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return(
  <Layout>
    <div className={styles.textCenter}>
      <h1>
        Welcome to <b>New Hanover Disc Golf Club!</b>
      </h1>
      <p className={styles.intro}>Home to the beloved Castle Hayne and Arrowhead Disc Golf Courses</p>
      <StaticImage
        src="../images/NHDGC-HOME.jpg"
        loading="eager"
        
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""/>
      <h3>The New Hanover Disc Golf Club is a not-for-profit organization that promotes the awesome sport, lifestyle and activity of Disc Golf. </h3>
      <h2> Founded in 2002.  </h2>
    </div>
  <div >
  <h1>Our Mission</h1>
    <ul >
      <li>Maintain a Non-Profit, Volunteer Organization for the purpose of promoting the sport of Disc Golf in and around New Hanover County, North Carolina</li><br/>
      <li>Provide a safe environment for citizens to socialize and recreate</li><br/>
      <li>Conduct tournaments where both amateurs and professionals may compete</li><br/>
      <li>Conduct clinics for the introduction of the game to new players</li><br/>
      <li>Promote and contribute to charitable causes</li><br/>
      <li>Maintain and beautify the area Disc Golf Courses</li><br/>
      <li>Promote the general benefits of health through exercise</li><br/>
      <li>Teach good sportsmanship and positive social values</li><br/>
    </ul>
  </div>
  <div>
    <h1>New Hanover County Park Rules</h1>{isVisible && (
    <p>"Dogs must be on a leash in all county parks unless they are in the enclosed Dog Park locations; failure to follow this may result in a citation and resulting fine.

The ordinance states:

Sec. 5-9. - Dogs, cats, or ferrets running at large prohibited.

(a)It shall be unlawful for any owner of a dog, cat, or ferret to allow it to run at large off the premises of its owner.

(b)Upon an animal services officer's observation of a dog, cat, or ferret running at large, or off the premises of its owner and not under the restraint of a competent person, the officer may, at his discretion, impound the dog, cat, or ferret or return it to its owner.

(c)Upon an animal services officer's receipt of a complaint that a dog, cat, or ferret is running at large or is off the premises of its owner and not under the restraint of a competent person, the officer shall investigate the complaint; and upon finding that there is probable cause that a violation has occurred, the officer may issue a citation or a warning or take any other action contained in this chapter or any state law as the circumstances may require.

(d)Any owner cited for a violation of this chapter may discharge the citation upon payment of the current fee schedule adopted by the board county commissioners. If the dog, cat, or ferret is impounded, the owner may redeem the dog, cat, or ferret under the provisions of section 5-17, provided the owner is in compliance with all other applicable provisions of this chapter. If the owner is charged under a warrant, summons, or bill of indictment and convicted, the provisions of section 5-23 shall apply.

(Code 1978, § 3-7; Ord. of 12-20-2010, § 7; Ord. of 3-12-2012)"</p>)}
    <button onClick={toggleVisibility}>{isVisible ? 'Close' : '+ Details'}</button>
  </div>
  </Layout>
)
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
