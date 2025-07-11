'use client'

import { useState, useEffect } from 'react'
import BounceLoader from 'react-spinners/SyncLoader'
import HeaderNavbar from '@/components/Menu/indexnavbar'
import Hero from '@/components/Hero'
import IconMarket from '@/components/IconMarket'
import Content1 from '@/components/Content'
import MarketingServices from '@/components/MarketingServices'
import Content3 from '@/components/Content3'
import Content4 from '@/components/Content4'
import STPMarketing from '@/components/STPMarketing'
import DigitalTouchpoint from '@/components/DigitalTouchpoint'
import BlogSection from '@/components/BlogSection'
import Review from '@/components/Review'
import Newletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import LogoPic from '@/components/Img/logo-infinity.png'
import ServiceGrid from '@/components/ServiceGrid/page'
import ServiceGrid2 from '@/components/ServiceGrid2/page'

export default function HomeClient() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const img = new Image()
    img.src = LogoPic.src
    img.onload = () => setTimeout(() => setLoading(false), 300)
  }, [])

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <img src={LogoPic.src} width="200" alt="Loading Logo" />
          <BounceLoader color="white" loading={loading} size={12.5} />
        </div>
      )}

      {!loading && (
        <>
          <HeaderNavbar />
          <main>
            <Hero />
            <ServiceGrid />
            <IconMarket />
            <Content1 />
            <MarketingServices />
            <ServiceGrid2 />
            <Content3 />
            <Content4 />
            <STPMarketing />
            <DigitalTouchpoint />
            <BlogSection />
            <Review />
            <Newletter />
            <Footer />
          </main>
        </>
      )}
    </>
  )
}
