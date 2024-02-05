import React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
 @media(min-width: 768px) {
padding:10% 0;
 }
 @media(min-width: 1200px) {
padding:10% 0 0 0;
 }
.blue{
    background-color: #4A5AF9;
    height: 12vh;
    width: 100%;
    margin-top:90px;
    @media(min-width: 768px) {
        display: none;
        margin-bottom:90px;
    }
    @media(min-width: 992px) {
        display: block;
        margin: 2% 0 0 0;
    }
}

.outer{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction:row;
    @media(min-width: 768px) {
        flex-direction:column
    }
    @media(min-width: 1200px) {
        width: 100%;
        
    }
    
    .top {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    @media(min-width: 768px) {
        width: 100%;
        flex-direction:unset;
        gap: 13%;
    }
    @media(min-width: 992px) {
        align-items: flex-start;
        gap: 7%;
    }
    @media(min-width: 1200px) {
        justify-content: flex-start;
        margin-top: -8%;
        gap: 14%;
        
    }
}
.bottom {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    @media(min-width: 768px) {
        width: 100%;
        flex-direction:unset;
        align-items: flex-start;
        margin-left: -2%;
        gap: 20%;
        margin: 10% 0;
    }
    @media(min-width: 992px) {
        gap: 5%;
        justify-content: flex-start;
        margin-left: 0%;
    }
    @media(min-width: 1200px) {
        gap: 20%;
        margin-top: 10%;
    }
}

}
h6{
    font-size: 18px;
    font-weight: 800;
    padding: 10px;
    line-height: 30px;
   text-align: center;
   @media(min-width: 768px) {
        text-align: left;
        padding: 10px 0;
    }
   @media(min-width: 1200px) {
        padding: 0% 0 25% 0;
    }
}
p{
   padding: 5px;
   text-align: center;
   @media(min-width: 768px) {
    padding: 15px;
    font-size: 18px;
   }
   @media(min-width: 768px) {
        text-align: left;
    }
    @media(min-width: 1200px) {
        padding: 10px 0;
    }
}
h5{
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 30px;
    
    @media(min-width: 768px) {
        text-align: left;
    }
    @media(min-width: 1200px) {
        padding: 10px 0;
    }
}
button {
        margin-top: 2%;
        color: #fff;
        background: #4a5af9;
        border-radius: 7px;
        padding: 3% 1%;
        font-size: 20px;
        font-weight: 600;
        width: 35%;
        border: none;
        &:hover {
          color: #4a5af9;
          background: transparent;
          border: 1px solid #4a5af9;
        }
        @media (min-width: 568px) {
          font-size: 23px;
          border-radius: 4px;
          font-weight: 500;
          width: 36%;
          padding: 1.5% 1%;
        }
        @media (min-width: 768px) {
          padding: 2% 0;
          width: 50%;
        }
        @media (min-width: 992px) {
          padding: 2%;
          width: 40%;
        }
        @media (min-width: 1200px) {
          font-size: 20px;
          margin-top: 0%;
          width: 20%;
          padding: 2% 1%;
        }
      }
.contact{
    @media (min-width: 992px) {
        display:flex;
        justify-content: center;
        align-items: center;
        padding-left: 5%;

    }  
    @media (min-width: 1200px) {
        width: 100%;

    }  
    .forms{
        padding: 7%;
        background-color:#F3F3FE;
        @media (min-width: 1200px) {
            width:75%;
            padding: 7% 11% 7% 6%;
           
        }
        p{
            margin-top:79px;
            @media (min-width: 1200px) {
                left:-30px;

            }

        }
      

        h5{
            font-size:35px;
        }
       form{
        
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;

        .lft{
            width: 100%;
            margin-bottom: 5%;
        border: none;
        border-bottom: 1px solid #000;
        padding: 5% 5% 5% 0;
        background-color:#F3F3FE;
        @media (min-width: 1200px) {
            margin-bottom: 0%;
            &[placeholder=Email-Address]{
            font-size: 18px;
        }
        }
    }
        .lft1{
            width: 100%;
            margin-bottom: 5%;
            background-color:#F3F3FE;
        border: none;
        border-bottom: 1px solid #000 !important;
        padding: 5% 5% 5% 0;
        @media (min-width: 1200px) {
            margin-bottom: 0%;
            &[placeholder=Name]{
            font-size: 18px;
        }
        }
    }
        .lft2{
            width: 100%;
            margin-bottom: 5%;
            background-color:#F3F3FE;
        border: none;
        border-bottom: 1px solid #000 !important;
        padding: 5% 5% 0% 0%;
        height: 140px;
        @media (min-width: 1200px) {
        &[placeholder=Message]{
            font-size: 18px;
        }
    }
    }
    
       } 
       button{
        float: right;
    }
    }
    
}
`;


function Footerr() {
    return (
        <Wrapper>
            <div className="blue">
            </div>
            
       <div className="contact">
       <div className="outer">
                <div className="top">
                        <div className="one ">
                            <h6>
                                Make a <br />
                                Donation
                            </h6>
                            <p>
                                monthly donors
                            </p>
                            <p>
                                support a student
                            </p>
                            <p>
                                general
                            </p>
                        </div>
                        <div className="one">
                            <h6>
                                Get <br />
                                Involved
                            </h6>
                            <p>
                                build / sponsor
                            </p>
                            <p>
                                hire uncommon
                            </p>
                            <p>
                                donate hardware
                            </p>
                        </div>
                        <div className="one">
                            <h6>
                                Volunteer <br />
                                Opportunities
                            </h6>
                            <p>
                                mentorship
                            </p>
                            <p>
                                host a dinner
                            </p>
                            <p>
                                ambassadors
                            </p>
                        </div>
                    </div>
                <div className="bottom">
                        <div className="one">
                            <h6>
                                Uncommon <br />
                                Notes

                            </h6>
                            <p>
                                blog
                            </p>
                            <p>
                                our story
                            </p>

                        </div>
                        <div className="one">
                            <h6>
                                Uncommon <br />
                                Notes

                            </h6>
                            <p>
                                blog
                            </p>
                            <p>
                                our story
                            </p>

                        </div>
                        <div className="one">
                            <h6>
                                Annual <br />
                                Reports
                            </h6>
                            <p>
                                2019
                            </p>
                            <p>
                                2020
                            </p>
                            <p>
                                2021
                            </p>
                            <p>
                                2022
                            </p>
                        </div>
                    </div>
            </div>
     
        <div className="forms">
        <h5>
                Get In Touch
            </h5>
            <form>
            <input placeholder="Name" type="name" className="lft lft1"/>
            <input placeholder="Email-Address" type="name" className="lft"/>
            <textarea placeholder="Message" rows={10} colums={20} type="name" className="lft2"/>
            </form>
            <button>Submit</button>
            <p>copyright 2023 | all rights reserved | uncommon.org</p>
        </div>
     </div>
         
        </Wrapper>
    )
}

export default Footerr