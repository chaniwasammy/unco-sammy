import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
.things{
    padding: 7%;
    height:277vh;
    p{
      font-size:30px;
      font-weight:300;
      @media(min-width:1200px){
       
        font-family:bold;

      }

    }
    h1{
      font-size:60px;
    }
    h2{
      font-size:40px;
    }

    @media(min-width:768px){
        padding:8% 7% 11% 9%;
        
    }

    @media(min-width:768px){
        padding:12% 20% 13% 10%;
        
    }
 

  @media(min-width:992px){


    .me{
    color:#DFDFDF;
    @media(min-width:1200px){
      color:#000;
      font-size:40px;

    }

  }
    
  .zaa{
    color:#DEDEDE;
    @media(min-width:1200px){
      color:#000;
      font-size:30px;
      font-weight:300;

    }
  }
    .you{
    color:#DFDFDF;
    @media(min-width:1200px){
      color:#000;
      font-size:40px
      

    }
  }
    
  .zee{
    color:#DEDEDE;
    @media(min-width:1200px){
      color:#000;
      font-size:30px;
      font-weight:300;

    }
  }
  }

  @media(min-width:1200px){
    padding:7%;
  }
   
  .some{
   

    
      height:90%;
      @media(min-width:768px){
       .angazi{
        display:flex;

        .text{
          margin-left:70px;
          p{
          font-size:20px;
          line-height:25px;
          @media(min-width:1200px){
          font-size:30px;
          line-height:50px;
        }
        @media(min-width:1200px){
          font-size:26px;
        }
   
          }
          h2{
            font-size:20px;
            line-height:22px;
            margin-top:175px;
            @media(min-width:1200px){
              margin-top:280px;
              font-size:50px;
              line-height:60px
            }
            @media(min-width:1200px){
        margin-top:230px;

        
      }
          }
        }
       }
       
      }
      video{
        margin-top:200px;
        border-radius:20px 20px 20px 20px;

        
        @media(min-width:1200px){
          width:40%;
          margin-top:190px;
        }
    
      }

    .three{
    
     

      h2{
      text-align:left;
      font-size:40px;
      line-height:50px;
      margin-top:60px;

      @media(min-width:768px){
        margin-left:85px;
      }
      @media(min-width:1200px){
        margin-left:300px;
        font-size:60px;
        margin-top:160px;
      }
    
     
    }

    p{
      text-align:left;
      line-height:40px;
      @media(min-width:768px){

       margin-left:70px;
       text-align:center;
       font-size:20px;

}
@media(min-width:1200px){
       margin-top:40px;
        font-size:27px;
      }

    }
    }
     .text{
      button{
      margin-top:30px;
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
      @media(min-width:1200px){
        margin-top:20px;
      }
      }
    h2{
      margin-top:60px;
      line-height:40px;
      font-size:30px;
    
    }
   

     }
    }

  




}
    h1{
        margin-top:35px;
    }
    h2{
        margin-top:25px;

        @media(min-width:768px){

            margin-top:58px;
        }
    }
    p{
        margin-top:20px;
        line-height:30px;
        font-size:20px;

        @media(min-width:768px){
            font-size:25px;
            line-height:35px;
        }
        @media(min-width:1200px){
          font-size:20px;
          line-height:50px;
        }

    }
    hr{
        margin-top:20px;
        margin-right:20px;
        @media(min-width:768px){
          margin-right:20px;

       }
        @media(min-width:768px){
          margin-right:0%;

       }

   
    }




`




function Hubs() {
  return (
    <Wrapper>
      <div className='things'>
        <h1>How It Works</h1>
        <h2>Innovation Hubs</h2>
        <p>We make longterm investments in our target communities by building innovative,
          sustainable workspaces to run our free education programs.</p>

        <hr></hr>

        <h2 className='me'>Workforce Development</h2>
        <p className='zaa'>Our Technology Bootcamp is for unemployed young adults. Students take crash courses
          Design, Coding and Marketing before picking a track to specialize in.</p>

        <hr></hr>

        <h2 className='you'>Youth Coding</h2>
        <p className='zee'>In addition to learning, our Bootcamp Students volunteer their time, teaching free, after-
          school coding lessons to local primary & secondary students.</p>

        <hr></hr>
        <div className='some'>
          <div className='angazi'>
          <video src='./images/fin.mp4' width={300} controls />


          <div className='text'>

            <h2>Join The Uncommon Community.</h2>
            <p>Our Donors believe everyone should have access to high
              quality technology education & employment opportunities.
              Let’s close the access gap together.</p>
            <button>Donate Today</button>

            
          </div>
          </div>
          <div className='three'>
            <h2>Mentors Change Lives.</h2>
            <p>When our Bootcamp students pick their track for specialization, they’re matched with industry
              professionals for one on one Mentorship.</p>

          </div>
        </div>

      </div>


    </Wrapper>
  )
}

export default Hubs;