import React, {useEffect} from 'react'

// Imported Images ===========>
  import imageGrid from '../../Assets/Images-Grid2.png'

// import IOS ===========>
  import Aos from 'aos'
  import 'aos/dist/aos.css'

const Lounge = () => {
// UseEffect to set animation duration ===============>
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])


  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">

        <div data-aos="fade-down" data-aos-duration="2500" className="imgDiv">
          <img src={imageGrid} />
        </div>

        <div className="textDiv">
          <h2 data-aos="fade-down" data-aos-duration="2500">Unaccompanied Minor Lounge</h2>

          <div className="grids grid">

                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                  <span className='gridTitle'>
                    Help through the airport
                  </span>
                  <p>
                  Find help with booking and travel plans, see what to expact along the journey to your favorite destination!
                  </p>
                </div>

                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                  <span className='gridTitle'>
                    Priority Boarding
                  </span>
                  <p>
                  Find help with booking and travel plans, see what to expact along the journey to your favorite destination!
                  </p>
                </div>

                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                  <span className='gridTitle'>
                    Care on the flight
                  </span>
                  <p>
                  Find help with booking and travel plans, see what to expact along the journey to your favorite destination!
                  </p>
                </div>

                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                  <span className='gridTitle'>
                  Chauffeur-drive service
                  </span>
                  <p>
                  Find help with booking and travel plans, see what to expact along the journey to your favorite destination!
                  </p>
                </div>

           </div>
        </div>


      </div>
    </div>
  )
}

export default Lounge