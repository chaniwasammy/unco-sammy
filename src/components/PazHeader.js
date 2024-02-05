import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
position: relative;
padding-bottom: 14%;
height:100vh;

@media (min-width: 375px) {
  height:120vh;
}
@media (min-width: 1200px) {
  height:100vh;
}





img{
  width: 100%;
    height: 69vh;
    object-fit: cover;

}
.hero-text-div{
  text-align: center;
  padding-top: 10%;
}
h1{
  font-size: 20px;
  font-weight: bolder;
  line-height: 1.6;
  padding: 0 50px 0 50px;
  
  
  .line{
          
          
          
          padding: 0;
          margin: 0;
            position:relative;
            z-index:1;
         &:before{
          bottom:3%;
            width:40%;
           background-color:#4B59F6;
           height:10px;
           border:none;
           content: "";
           z-index: -1;
           position:absolute;
           @media(min-width:568px){
         width: 25%;
          }
           @media(min-width:768px){
         width: 38%;
          }
           @media(min-width:992px){
         width: 30%;
          }
           @media(min-width:1200px){
            width: 35%;
            bottom:10%;
           
          }
         }
        }
}


.h1-second{
  font-size: 28px;
  font-weight: bolder;
  position: relative;
  z-index: 1;
  &:before{
    z-index: 2;
    left: 63px;
    right: 0;
    width: 140px;
    height: 10%;
    position: absolute;
    content: "";
    top: 31px;
    background-color: #4A5AF8;
    }
}
p{
  font-size: 20px;
  margin-top:19px;
  padding: 0  9px;
  line-height: 40px;
  margin-bottom: 20px;


}
button{
width: 185px;
height: 50px;
border-radius: 5px;
border: none;
background-color: #4A5AF8;
font-size: 22px;
color:#F1F1FE;
font-weight: bold;
}


@media (min-width: 768px) {
  position: relative;
    padding-bottom: 0%;
  .hero{
display: flex;
  }
  img{
    width: 50%;
    height: 100vh;
    object-fit: cover;
  }
.hero-text-div{
  text-align: center;
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
p{
  margin-top: 19px;
     padding: 0 0px; 
    text-align: left;
    line-height: 36px;
    margin-bottom: 20px;
    margin-left: 22px;
    margin-right: 60px;
    font-size: 16px;

}

h1 {
    font-size: 28px;
    font-weight: bolder;
    position: relative;
    line-height: 1.6;
    padding: 0 0px ;
    text-align: left;
  margin-left: 27px;
}

.h1-second{
  right: 25px;
    font-size: 28px;
    font-weight: bolder;
    text-align: left;
    /* padding-right: 155px; */
    position: relative;
    &:before {
      left: -7px;
    right: 0;
    width: 140px;
    height: 12%;
    position: absolute;
    content: "";
    top: 31px;
    background-color: #4A5AF8;
}
}

button {
    width: 185px;
    height: 50px;
    border-radius: 5px;
    border: none;
    background-color: #4A5AF8;
    font-size: 20px;
    color: #F1F1FE;
    font-weight: bold;
    margin-left: 28px;
}
 
}

@media (min-width: 992px){
  position: relative;
    padding-bottom: 0%;
  h1 {
    font-size: 47px;
    font-weight: bolder;
    position: relative;
    line-height: 1.4;
    padding: 0 45px 0 33px;
    text-align: left;
    margin-left: -6px;

}


.h1-second{
    right: 28px;
    font-size: 47px;
    font-weight: bolder;
    text-align: left;
    /* padding-right: 155px; */
    position: relative;
    &:before {
      left: 34px;
    right: 0;
    width: 209px;
    height: 12%;
    position: absolute;
    content: "";
    top: 48px;
    background-color: #4A5AF8;
}
}

p {
    margin-top: 19px;
    padding: 0 7px;
    text-align: left;
    line-height: 36px;
    margin-bottom: 20px;
    margin-left: 24px;
    font-size: 20px;
}
button {
    width: 185px;
    height: 53px;
    border-radius: 5px;
    border: none;
    background-color: #4A5AF8;
    font-size: 20px;
    color: #F1F1FE;
    font-weight: bold;
    margin-left: 31px;
}
}

@media (min-width:1200px){

  .hero-text-div{
width: 50%;
  }
  padding-bottom: 0%;
  img{
    width: 110%;
    object-fit: cover;
  }
  .hero-text-div {
    width: 100%;
    text-align: center;
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

}h1{
  font-weight: 750;
  font-size: 48px;
  line-height: 1.3;
  /* z-index: 2; */
  padding: 0 px 0px;
  margin-right:200px;
  margin-left: 40px;
  @media (min-width:1200px){
    margin-right:0;
  }


}




p {
  word-spacing: 0px;
    margin-top: 35px;
    padding: 0px 0px;
    text-align: left;
    line-height: 49px;
    margin-bottom: 30px;
    margin-left: 80px;
    margin-right: 146px;
    font-size: 20px;
    font-weight: 300;
    
    @media (min-width:1200px){
      margin-top:10px;
    }
    
}
button {
    width: 195px;
    height: 51px;
    border-radius: 5px;
    border: none;
    background-color: #4A5AF8;
    font-size: 20px;
    color: #F1F1FE;
    font-weight: bold;
    margin-left: 80px;
    &:hover{
          background-color:transparent;
          border: 1px solid #4B59F6;
          color: #4B59F6;
        }
}

}
`

function PazHeader() {
  return (

    <Wrapper>
    <div class="hero">
    <img src="./images/img-pazhero.jpeg" alt="photo"/>
    <div class="hero-text-div">
        <h1>Uncommon stories  start with people <h1 className='line'> like you.</h1> </h1>
        <p>We believe that everyone, everywhere should have access to life changing technology education and
            employment
            opportunities.
            
            </p>
        <button>Donate Today</button>
    </div>
</div>
</Wrapper>


//     <Wrapper>
//     <div className="banner">
//       <div className="ii">
//       <img src="../uncommon images/img-pazhero.jpeg" alt=""/>
//       </div>
//       <div className="ban">
//           <h2>
//           Uncommon stories <br/>
//           start with people <br/>
//           like you. <hr/>
//           </h2>
//           <h5>Join The Community Of Uncommon Donors.</h5>
//           <p>
//           We’re building a movement of people who
//            believe that access to technology education &
//             employment should be a basic human right.

// <br/>
             
               
//           </p>
//           <button className="btn">
//               Donate Today
//           </button>
//       </div>
//       </div>  
//   </Wrapper>

  )
}

export default PazHeader
