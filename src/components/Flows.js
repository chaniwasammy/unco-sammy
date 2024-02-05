import React from 'react'
import styled from "styled-components";



const Wrapper = styled.div`

.uncommon{
    .whole{
        
      h2{
        margin-left:60px;
        font-size:40px;
        @media(min-width:768px){

          margin-top:120px;
          margin-left:280px;
          font-size:50px;
        }

        @media(min-width:1200px){
            margin-left:500px;
            font-size:65px;
        }


      }
    
    .first{
      @media(min-width:768px){
        display:flex;
        margin-top:25px;
        
      }
     
      .ree{
        width:102%;
        margin-top:20px;
        @media(min-width:768px){
          width:40%;
          margin-left:50px;
        }
        @media(min-width:1200px){
            width:20%;
            margin-left:190px;
            
        }
      
      }
   
    .middl{
        @media(min-width:1200px){
            .nn{
                height:25%;
            }
            .mm{
                height:25%;
               
            }

        }
     img{
      width:30px;
      padding:10px;
      margin-left:20px;
      border-radius:14px;
      margin-top:30px;
      @media(min-width:768px){
        margin-top:70px;
      
      }
      @media(min-width:1200px){
            width:15%;
            margin-left:30px;
            margin-top:10px;
            

            
        }
     }
     h6{
      margin-top:10px;
      margin-left:70px;
      font-size:17px;

      @media(min-width:768px){
        margin-left:30px;
        margin-top:40px;
        @media(min-width:1200px){
          margin-left:40px;

        }
      }
     }
     h3{
      display:none;
      @media(min-width:1200px){
        display:block;
        margin-left:40px;
        margin-top:40px;
       }
     }
    }

    .mom{
    
      .anesu{
        width:120px;
       height:40px;
       border:none;
       background-color:#F2F2F2;
       padding-left:10px;
       text-align:left;
       border-radius:10px;
       margin-left:25px;
       @media(min-width:768px){
        margin-top:70px;
       }
       @media(min-width:1200px){
        width:300px;
        margin-top:20px;
        height:8vh;
        border-radius:5px;
        margin-left:40px;
       }
 
      }
      .beyond{
        width:165px;
       height:40px;
       border:none;
       background-color:#F2F2F2;
       margin-top:35px;
       padding-left:10px;
       text-align:left;
       border-radius:10px;
       margin-left:10px;
       @media(min-width:1200px){
        width:300px;
        height:8vh;
        border-radius:5px;
       }
 
      }
    }
    .dad{
      .an{
        width:120px;
       height:40px;
       border:none;
       background-color:#F2F2F2;
       margin-top:15px;
       padding-left:10px;
       text-align:left;
       border-radius:10px;
       margin-left:25px;
       @media(min-width:1200px){
        width:300px;
        height:8vh;
        border-radius:5px;
        margin-left:40px;
       }
 
      }
      .be{
        width:175px;
       height:40px;
       border:none;
       background-color:#4B59F6;
       margin-top:5px;
       padding-left:10px;
       text-align:left;
       border-radius:10px;
       margin-left:10px;
       color:white;
       @media(min-width:768px){
        text-align:center;
       }
       @media(min-width:1200px){
        width:320px;
        height:7vh;
        border-radius:5px;
       }
 
      }
     

    }
  }
}
}




`

function Flows() {
  return (
    <Wrapper>
         <div className='uncommon'>
           
            
           

           

           <div className='second'>
             

             <div className='too'>
               <div className='whole'>
                 <h2>Stay Engaged</h2>
                 <div className='first'>
                   <img src='./images/mdala.png' className='ree' alt='' />



                   <div className='middl'>
                    <a href='https://www.instagram.com/p/C03ZEPLtNlj/'><img src='./images/insa1.png' className='nn' alt='' /></a>
                    <a href='https://www.instagram.com/p/C01eLLLt0eK/'><img src='./images/Smart Watches for Sale Instagram Post.png' alt='' /></a>
                    <a href='https://www.instagram.com/p/C01dH2qNENj/'> <img src='./images/2.png'className='mm'  alt='' /></a>
                    <a href='https://www.instagram.com/p/C01bjNXNrJc/'> <img src='./images/Upgrade your tech game with tttour IT gadgets.png' alt='' /></a>
                    
                     <h6>Instagram | LinkedIn | Blog</h6>
                     <h3>Sign Up For Our Mailing List</h3>

                     <form className='mom' action="https://formsubmit.co/Chaniwasammy@gmail.com" method="POST">
                       <input className="anesu" type="" name="NAME" placeholder="First Name" />
                       <input className="beyond" type="Email" name="" placeholder="Email" />
                     </form>
                     <form className='dad' action="https://formsubmit.co/Chaniwasammy@gmail.com" method="POST">
                       <input className="an" type="" name="NAME" placeholder="Last Name" />
                       <input className="be" type="Submit" name="" placeholder="Submit" />
                     </form>
                   </div>
                 </div>
               </div>




               
             </div>

           </div>
           </div>
    </Wrapper>
  )
}

export default Flows
