import React from 'react'

import PagesHero from './PagesHero'
import PagesHeader from './PagesHeader'
import PagesOurExpertise from './PagesOurExpertise'
import PagesRecentWork from './PagesRecentWork'
import PagesSectionBlueFirst from './PagesSectionBlueFirst'
import PagesFOOTER from './PagesFOOTER'
import PagesBlueSECTIONtwo from './PagesBlueSECTIONtwo'
import Pagestogether from './Pagestogether'









// import Navbar from './Navbar'
function PagesALLrounder() {
  return (
    <>
{/* <Navbar/> */}
    <PagesHeader/>
    <PagesHero/>
    <PagesSectionBlueFirst/>
    <PagesOurExpertise/>
    <PagesRecentWork/>
<PagesBlueSECTIONtwo/>
<Pagestogether/>
<PagesFOOTER/>
{/* <SectionBlueFirst/> */}

    {/* <PagesOurUncommon/> */}
    </>
  )
}

export default PagesALLrounder
