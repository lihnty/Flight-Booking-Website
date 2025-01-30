import React, {useEffect} from 'react'

// Imported Destanation Images ===========>
  import paris from '../../Assets/paris.jpg'
  import newyork from '../../Assets/newyork.jpg'
  import dubai from '../../Assets/dubai.jpg'
  import london from '../../Assets/london.jpg'

// Imported Traveler Images ===========>
  import traveler1 from '../../Assets/user (1).jpg'
  import traveler2 from '../../Assets/user (2).jpg'
  import traveler3 from '../../Assets/user (3).jpg'
  import traveler4 from '../../Assets/user (4).jpg'

// import IOS ===========>
  import Aos from 'aos'
  import 'aos/dist/aos.css'


// We are going to use high order array method called Map to display all the data ====>

const travelers = [
  {
    id: 1,
    destanationImage: paris,
    travelerImage: traveler1,
    travelerName: 'AnnaTeach',
    socialLink: '@AnnaDreeme.com'
  },

  {
    id: 2,
    destanationImage: newyork,
    travelerImage: traveler2,
    travelerName: 'IsraTeach',
    socialLink: '@Israteach8.com'
  },

  {
    id: 3,
    destanationImage: dubai,
    travelerImage: traveler3,
    travelerName: 'Malik Saad',
    socialLink: '@MalikSaadsteam.com'
  },

  {
    id: 4,
    destanationImage: london,
    travelerImage: traveler4,
    travelerName: 'Marcello',
    socialLink: '@Marcelloxinn.com'
  },
]

const Travelers = () => {
// UseEffect to set animation duration ===============>
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])


  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos="fade-down" data-aos-duration="2500">
          Top Travelers of this Month!
        </h2>

        <div className="travelersContainer grid">
        
         
         {
          travelers.map(({id, destanationImage, travelerImage, travelerName, socialLink}) => {
            return(
                // {/* single passanger card */}
              <div data-aos="fade-up" data-aos-duration="2500" key={id} className="singleTraveler">
              <img src={destanationImage} className='destanationImage'/>
  
              <div className="travelerDetails">
                <div className="travelerPicture">
                  <img src={travelerImage} className='travelerImage'/>
                </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
              </div>
  
            </div>
            )
          })
         }

        </div>
      </div>

    </div>
  )
}

export default Travelers