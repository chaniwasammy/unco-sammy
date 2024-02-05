import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
.uncommon{
  

  @media(min-width:1200px){
        margin-top:3px;

        .tx{
          h2{
            font-size:40px;
          }
      
        }
      }
  .broo{
    margin-left:20px;
    text-align:center;
    font-size:20px;
  
  }
    @media(min-width:768px){
    .boo{
    margin-left:50px;
    font-size:40px;
    text-align:left;
    line-height:34px;
    
    }
    .broo{
      text-align:left;
      margin-left:90px;
      font-size:25px;
      position:absolute;
      @media(min-width:992px){
      margin-left:390px;
    }
      
      @media(min-width:1200px){
      margin-left:630px;
      font-size:23px;
      
    }
      
    }
  }
    .lost{
      padding:12% 9% 2% 10%;
      @media(min-width:768px){
        display:flex;
        gap:10%
      }
      @media(min-width:992px){
        
      }

      h2{
      margin-top:40px;
      @media(min-width:768px){
        margin-top:7px;
      }
    }
    p{
      margin-top:30px;
      line-height:33px;
      font-size:20px;
   

    }
    button{
      margin-top:30px;
        height:50px;
        width:159px;
        background-color:#4B59F6;
        border:none;
        color:white;
        border-radius:5px;
        font-weight:900;
        font-size:20px;
        @media(min-width:1200px){}

    }

    .image{
      position:relative;
      @media(min-width:768px){
        background-color:blue;
          border-radius:10px;
          width:158vw;
          right:8%;
        gap:20%;
      
      }
      @media(min-width:992px){
          width:200vw;
          left:40px;
          

        }
      @media(min-width:1200px){
          width:50vw;
          left:100px;
          height:198px;
          top:50px;
          

        }

        .boo{
        margin-top:65px;
        margin-left:19px;
        @media(min-width:768px){
         position:absolute;
         bottom:0%;
         width:100%;
         margin-top:60px;
         @media(min-width:992px){
          width:110%;
          left:1px;
          
        }
         @media(min-width:1200px){
          width:90%;
          margin-left:30px;
          
          
        
          
        }
    
        }
      }

      .baa{
        position:absolute;
        right:0%;
        margin-top:250px;
        width:43%;
        margin-left:300px;
        @media(min-width:768px){
          right:-35%;
          width:70%;
          margin-top:170px;
        }
        @media(min-width:992px){
          margin-top:280px;
        }
        @media(min-width:1200px){
          margin-top:120px;
        }
        
      }

    }
    .bo{
        margin-top:40px;
        margin-left:50px;
        line-height:30px;
        @media(min-width:768px){
          display:none;
        }
        @media(min-width:992px){
          display:block;
        }
        @media(min-width:1200px){
          font-size:25px;
          line-height:49px;
        }
        
        
    }

}

}
`

 function Zanka() {
  return (
    <Wrapper>

<div className='uncommon'>
<div className='lost'>

<div className='tx'>
  <h2>Hire Uncommon</h2>
  <p>We design, develop and market web products
    for clients all over the world and use the profits
    to help fund our education mission.</p>
  <button>See Portfolio</button>

</div>
<div className='image'>
  <img src='./images/natas@2x.png' className='boo' alt='' />
  <img src='./images/lo3.png' className='baa' alt='' />
  
</div>
<h4 className='bo'>The Uncommon team
              was professional,
              responsive and went above and beyond to
              deliver.</h4>

</div>
<p className='broo'>– Natasha Chadenga, CEO, DaaS Africa</p>
</div>
    </Wrapper>
  )
}
export default Zanka