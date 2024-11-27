import React from 'react'
import Hero from '../product/Hero'
import Kite from './Kite'
import Console from './Console'
import Coin from './Coin'
import KiteApi from './KiteApi'
import Mobile from './Mobile'
import Universe from './Universe'

const ProductPage = () => {
  return (
    <div>
      <Hero/>
      <Kite/>
      <Console/>
      <Coin/>
      <KiteApi/>
      <Mobile/>
      <Universe/>
    </div>
  )
}

export default ProductPage
