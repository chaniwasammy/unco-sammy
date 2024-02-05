import React from 'react'
import PazDonateTODAY from './PazDonateTODAY'
import PazMorepages from './PazMorepages'
import PazFooter from './PazFooter'
import PazBluesec from './PazBluesec'
import PazHeader from './PazHeader'

function PazAllrounder() {
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

export default PazAllrounder
