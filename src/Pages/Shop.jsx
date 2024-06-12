import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Shawl from '../Components/Shawl/Shawl'
import EmbroideredClassics from '../Components/Embroidered/EmbroideredClassics'
import Festive from '../Components/Festive/Festive'
import Topselling from '../Components/Topselling/Topselling'


const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Shawl/>
        <EmbroideredClassics/>
        <Festive/>
        <Topselling/>
    </div>
  )
}

export default Shop