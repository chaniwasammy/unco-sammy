import React from 'react'
import PazDonateTODAY from '/Users/uncommonstudent/Desktop/react project/uncommon project/src/components/PazDonateTODAY.js'
import PazMorepages from '/Users/uncommonstudent/Desktop/react project/uncommon project/src/components/PazMorepages.js'
import PazFooter from '/Users/uncommonstudent/Desktop/react project/uncommon project/src/components/PazFooter.js'
import PazBluesec from '/Users/uncommonstudent/Desktop/react project/uncommon project/src/components/PazBluesec.js'
import PazHeader from '/Users/uncommonstudent/Desktop/react project/uncommon project/src/components/PazHeader.js'

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