import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #f2f3fe;
  width: 100%;
  @media (min-width: 568px) {
    margin-top: 4%;
  }
  .mentors {
    padding: 15% ;
    @media (min-width: 568px) {
      padding: 9% 0%;
    }
    @media (min-width: 768px) {
      padding: 6% 5%;
    }
    @media (min-width: 992px) {
      padding: 5% 10%;
    }
    @media (min-width: 1200px) {
      padding: 7% 10%;
    }

    .mentors-inner {
      padding: 15% 10% 30% 5%;
      background: #fff;
      text-align: center;
      display: grid;
      gap: 9%;
      @media (min-width: 568px) {
        padding-bottom: 23%;
      }
      @media (min-width: 768px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 6% 5% 7% 1%;
        border-radius: 15px;
      }
      @media (min-width: 992px) {
        padding: 6% 15% 7% 9%;
      }
      @media (min-width: 1200px) {
        padding: 5% 9% 8% 10%;
        gap: 20%;
      }

      .images {
        h2{
            font-size:50px;
            text-align:left;
            line-height:85px;
           
        }
        
      }
        .abi {
          position: absolute;
          bottom: -20%;
          width: 38%;
          right: -2%;
          @media (min-width: 568px) {
            bottom: -25%;
          }
          @media (min-width: 768px) {
            bottom: -30%;
            z-index: 4;
            width: 50%;
            right: -34%;
          }
          @media (min-width: 992px) {
            width: 55%;
            right: -20%;
          }
          @media (min-width: 1200px) {
            bottom: -37%;
            width: 60%;
            right: -13%;
          }
        }
      }
    }
    .text {
      display: grid;
      gap: 5%;
      @media (min-width: 768px) {
        width: 90%;
        text-align: left;
      }
      @media (min-width: 1200px) {
        padding-right: 5%;
      }
      h4 {
        font-size: 15px;
        line-height: 25px;
        @media (min-width: 568px) {
          font-size: 27px;
          line-height: 35px;
        }
        @media (min-width: 768px) {
          font-size: 20px;
          line-height: 35px;
        }
        @media (min-width: 1200px) {
          font-size: 29px;
          line-height: 45px;
        }
      }
      p {
        font-size: 20px;
        line-height: 26px;
        @media (min-width: 992px) {
          line-height: 33px;
        }
      }
    }
  
`;

function BannerBlog() {
  return (
    <Wrapper>
      <div className="mentors">
      <div className="mentors-inner">
        <div className="images">
          
          <h2> Featured Post </h2>
         
        </div>
        <div className="text">
          <h4>Uncommon.org NYC Party</h4>
          <p>We hope you will join us in New York City on June 3rd for the second...</p>
          <p className="ree">By Uncommon News | April 19, 2023 |</p>
        </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default BannerBlog