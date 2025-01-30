import React, {useEffect} from 'react'

  // Imported images ===========>
    import logo from '../../Assets/logo.png'

  // Imported Icons ===========>
    import { FaTwitter } from 'react-icons/fa'
    import { FaFacebook } from 'react-icons/fa'
    import { AiFillYoutube } from 'react-icons/ai'
    import { FaPinterestP } from 'react-icons/fa'

  // import IOS ===========>
    import Aos from 'aos'
    import 'aos/dist/aos.css'


const Footer = () => {
  // UseEffect to set animation duration ===============>
      useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])


  return (
    <div className='footer'>

        <div className="sectionContainer container grid">

          <div data-aos="fade-up" data-aos-duration="2500" className="gridOne">
            <div className="logoDiv">
              <img src={logo} className='Logo'/>
            </div>
            <p>Your mind should be stronger than your feelings, fly!</p>
            <div className="socialIcon flex">
            <FaFacebook className='icon'/>
            <FaTwitter  className='icon'/>
            <AiFillYoutube className='icon'/>
            <FaPinterestP className='icon'/>
            </div>
          </div>

            <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">

              <span className="linkTitle">Information</span>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Explore</a>
              </li>
              <li>
                <a href="">Flight Status</a>
              </li>
              <li>
                <a href="">Travel</a>
              </li>
              <li>
                <a href="">Chack-In</a>
              </li>
              <li>
                <a href="">Manage your Booking</a>
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">

              <span className="linkTitle">Quick Guide</span>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">How to</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Baggage</a>
              </li>
              <li>
                <a href="">Route Map</a>
              </li>
              <li>
                <a href="">Our communities</a>
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">

              <span className="linkTitle">Information</span>
              <li>
                <a href="">Chauffuer</a>
              </li>
              <li>
                <a href="">Our partners</a>
              </li>
              <li>
                <a href="">Destination</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Programme Rulles</a>
              </li>
            </div>

        </div>

        <div className="copyRightDiv flex">
          <p>Courtesy Design | Devoloped by <a href="https://github.com/lihnty" target='_blank'>Ahmad sholeh</a></p>
        </div>

    </div>
  )
}

export default Footer