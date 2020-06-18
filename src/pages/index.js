import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import BigDate from '../components/BigDate'
import KnowUs from '../components/KnowUs';
import Speakers from '../components/Speakers/Speakers';
import Location from '../components/Location';
import Sponsors from '../components/Sponsors/Sponsors';

const Index = () => {
  return (
    <Layout>
      <SEO />
      <BigDate />
      <KnowUs />
      <Speakers />
      <Location />
      <Sponsors />
    </Layout>
  )
}

export default Index
