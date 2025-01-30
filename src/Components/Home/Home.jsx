import { use } from 'react'
import React, {useEffect} from 'react'

// Imported Assets ===========>
  import vidio from '../../Assets/p.mp4'
  import aeroplane from '../../Assets/takeOff.png'

// import IOS ===========>
  import aos from 'aos'
  import 'aos/dist/aos.css'
import Aos from 'aos'

  
const Home = () => {
  // UseEffect to set animation duration ===============>
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])


  return (
    <div className='home flex container'>

      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">Create Ever-lasting Memories with Us</h1>
      </div>

      <div className="homeImages flex">

        <div className="vidioDiv">
          <video src={vidio} autoPlay muted loop className='vidio'></video>
        </div>

        <img src={aeroplane}  className='plane'/>
      </div>
    </div>
  )
}

export default Home