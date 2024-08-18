import React from 'react'
import Hero  from '../components/Hero/Hero'
import Populer from '../components/populer/Populer'
import Offer from '../components/offers/Offer.jsx'
import NewCollection from '../components/Newcollection/NewCollection.jsx'
import Newsletter from '../components/Newsletter/Newsletter.jsx'
import Footer from '../components/Footer/Footer.jsx'
const Shop = () => {
  console.log("first");
  return (
    <div>
    <Hero/>
    <Populer/>
    <Offer/>
    <NewCollection/>
    <Newsletter/>
    <Footer/>
     </div>
  )
}

export default Shop