import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
.confused{
    background-color:white;
   color:black;
   text-align:center;
   height:145vh;
   
   @media(min-width:768px){
    display:flex;
    height:100vh;

   }


   .mom{
    
    @media(min-width:768px){

     height:100vh;
     width:56%;

 }
    @media(min-width:992px){

     height:100vh;
     width:47%;




 }
    @media(min-width:1200px){

     height:100vh;
     width:47%;




 }


    img{
    width:100%;
    height:100%;
object-fit: cover;
    }  


   }
  .alisha{
   
    h2{
      
        padding-top:33px;
        line-height:45px;
        font-size:30px;
        .line{
          
          
          font-size:60px;
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
          width: 46%;
          bottom:10%;
         
        }
       }
      }
        @media(min-width:768px){
             

          margin-top:350px;
          text-align:left;
          padding-left:35px;



        }
        @media(min-width:992px){
             

          margin-top:490px;
          text-align:left;
          padding-left:57px;



        }
        @media(min-width:1200px){
             

          margin-top:80px;
          text-align:left;
          padding-left:70px;
          line-height:70px;
          font-size:50px;



        }



    }
    p{
        padding-top:20px;
        line-height:38px;
        text-align:center;
        font-size:20px;



        @media(min-width:768px){


          text-align:left;
          padding-left:35px;
        }

        @media(min-width:992px){


          text-align:left;
          padding-left:57px;
        }
       
        @media(min-width:1200px){

          margin-left:15px;
          margin-top:5px;
          font-size:25px;
          line-height:48px;




        }



    }
    button{
        margin-top:15px;
        height:50px;
        width:158px;
        background-color:#4B59F6;
        border:none;
        color:white;
        border-radius:5px;
        font-weight:600;
        &:hover{
          background-color:transparent;
          border: 1px solid #4B59F6;
          color: #4B59F6;
        }
  
        @media(min-width:768px){

          margin-right:200px
          
        }

        @media(min-width:992px){

          margin-right:240px;
          
        }


        @media(min-width:1200px){
          margin-top:40px;
          margin-right:340px;
        }
    }
  
 
  }
}


`



function Banner() {
  return (
    <Wrapper>
      <div className='confused'>

        <div className='mom'>
          <img src="./images/hero 2.png" alt="" />
        </div>
        <div className='alisha'>
          <h2>Tech education &<br></br>
            employment, for<br></br>
            <h2 className='line'> everyone.</h2></h2>
          <p>We believe that everyone, everywhere <br></br>should have
            access to life changing <br></br>technology education and
            employment opportunities.</p>
          <button >Donate Today</button>
        </div>

      </div>



    </Wrapper>
  )
}

export default Banner;