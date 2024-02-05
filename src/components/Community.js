import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
background-color:#FFFF;
height:400px;

.community{
  
  .text{
   
   .something{
     padding:10%;
     h1{
       @media(min-width:1200px){
       
       font-size:70px;
       margin-top:0px;
     }
     }
     h3{
        margin-top:70px; 
       font-size:20px; 
       @media(min-width:1200px){
       font-size:40px;
     }
     }
     p{
       margin-top:30px;
       line-height:33px;
       font-size:20px;
       @media(min-width:1200px){
       font-size:26px;
       line-height:45px;
     }
     }

   }
 }
  }

   
   
  










`;





function Community() {
  return (
    <Wrapper>
      <div className='community'>

        <div className='text'>
          <div className='something'>
            <h1>Sustainability</h1>
            <h3>Business Model</h3>
            <p>For nonprofits, sustainability is everything. As a team of entrepreneurs & out-of-the-box thinkers,
              we have challenged ourselves to come up with creative ways to make impact sustainably and at
              scale.</p>

          </div>
          </div>
        </div>





      











    </Wrapper>
  )
}

export default Community