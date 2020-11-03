import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import BigDate from '../components/BigDate'
import KnowUs from '../components/KnowUs';
import Speakers from '../components/Speakers/Speakers';
import Location from '../components/Location';
import Sponsors from '../components/Sponsors/Sponsors';

const Index = () => {

  const queryResults = useStaticQuery(graphql`
    query IndexSeo {
      markdownRemark(frontmatter: { id: { eq: "seo-md" } }) {
        frontmatter {
          featured {
            childImageSharp {
              resize(width: 200) {
                src
                height
                width
              }
            }
          }
        }
      }
    }`,
  );

  const metaimage = get(queryResults, 'markdownRemark.frontmatter') ;
  const image = metaimage.featured
    ? metaimage.featured.childImageSharp.resize
    : null

  return (
    <Layout>
      <SEO image={image} />
      <BigDate />
      <Speakers />
      <KnowUs />
      {/* <Speakers />*/}
      <Location />
      <Sponsors />
    </Layout>
  )
}

export default Index;
