import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
.nigga{
  background-color:#F3F3FE;
  height:600px;

  @media(min-width:768px){


    display:flex;
    height:530px;

  }
  @media(min-width:992px){

    height:500px;
    padding:6% 2% 0% 0%;

  }
  @media(min-width:1200px){
    height:550px;
  }





  .image{
    video{
      width:90vw;
      margin-left:18px;
      border-radius:20px;
      margin-top:20px;


      @media(min-width:768px){


        width:87%;
        margin-top:150px; 
        

      }

      @media(min-width:992px){


        width:40vw;
        margin-top:70px; 
        margin-right:50px;
        height:25vh;

      }
      @media(min-width:1200px){

        height:60vh;
        margin-top:40px;
        border-radius:9px;
        width:45vw;
    

      }



    }
  }
  .one{
    h2{
     padding-top:35px;
     line-height:45px;
     margin-left:18px;

     @media(min-width:768px){

      margin-top:40px;
      margin-left:60px;
     }
     @media(min-width:1200px){
      margin-top:0px;
      margin-left:70px;
      font-size:26px;
     }

     

    }
    h1{
      line-height:50px;
      margin-left:18px;


      @media(min-width:768px){

    
      line-height:60px;
      margin-left:60px;



}
@media(min-width:1200px){
  margin-left:70px;
  font-size:56px;
  line-height:90px;
  margin-top:30px;
}
    }
    p{
      line-height:37px;
      margin-left:18px;
      font-size:21px;


      @media(min-width:768px){

      margin-left:60px;
      line-height:30px;
      margin-top:20px;

}  

@media(min-width:1200px){

  margin-left:70px;
  font-size:26px;
  line-height:55px;
}
    }

  }

}




`


function Some() {
  return (
    <Wrapper>
      <div className="nigga">
      <div className='one'>
        <h2>Uncommon Impact</h2>
        <h1>Education =
            <br></br>Earning Power.</h1>
            <p>Our mission is to help unemployed young adults
               from low-income communities launch their careers
                in the technology industry.</p>
      </div>
      <div className='image'>
       <video src='./images/vid.mp4' width={100} controls />
      </div>



      </div>





    </Wrapper>
  )
}

export default Some