import React from 'react'
import PazDonateTODAY from '../components/PazDonateTODAY'
import PazMorepages from '../components/PazMorepages'
import PazFooter from '../components/PazFooter'
import PazBluesec from '../components/PazBluesec'
import PazHeader from '../components/PazHeader'

function Donate() {
  return (
    <div>
      <PazHeader/>  
      <PazDonateTODAY/>
      <PazMorepages/>
      <PazBluesec/>
      <PazFooter/>
    </div>
  )
}

export default Donate