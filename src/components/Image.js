import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .join {
    padding: 20% 7%;
    text-align: center;
    display: grid;
    gap: 15%;

    @media (min-width: 568px) {
      padding: 15% 7%;
      gap: 10%;
    }
    @media (min-width: 992px) {
      padding: 10% 7%;
      gap: 20%;
    }
    h2 {
      font-size: 19px;
      line-height: 25px;
      @media (min-width: 568px) {
        font-size: 35px;
        line-height: 45px;
      }
      @media (min-width: 768px) {
        font-size: 16px;
      }
      @media (min-width: 992px) {
        font-size: 20px;
      }
      @media (min-width: 1200px) {
        font-size: 27px;
      }
      a {
        text-decoration: underline;
        color: #000;
      }
    }
    .join-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 5%;
      @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
      }
      @media (min-width: 1200px) {
        gap: 12%;
        width:100%;
      }
      img {
        display: none;
        @media (min-width: 768px) {
          display: block;
          width: 40%;
        }
        @media (min-width: 992px) {
          width: 19%;
        }
        @media (min-width: 1200px) {
          width: 12%;
          margin: 2% 0;
        }
      }
      .img {
        display: block;
        width: 55%;
        @media (min-width: 568px) {
          width: 30%;
        }
        @media (min-width: 768px) {
          width: 40%;
        }
        @media (min-width: 992px) {
          width: 19%;
        }
        @media (min-width: 1200px) {
          width: 12%;
        }
      }
      .img3 {
        margin: 15% 0 8% 0;
        @media (min-width: 768px) {
          margin: 0;
        }
      }
    }
  }
`;

function Image() {
  return (
    <Wrapper>
      <div className="join">
        <h2>
          <a href="#">Join</a> Our Community Of Mentors From Companies All Over
          The World.
        </h2>
        <div className="join-inner">
          <img src="./images/m1.png" className="img img1" alt="image" />
          <img src="./images/m2.png" className="img img2" alt="image" />
          <img src="./images/m3.png" className="img img3" alt="image" />
          <img src="./images/m4.png" className="img img4" alt="image" />
          <img src="./images/m5.png" alt="image" />
          <img src="./images/m6.png" alt="image" />
          <img src="./images/m7.png" alt="image" />
          <img src="./images/m8.png" alt="image" />
          <img src="./images/m9.png" className="zuu" alt="image" />
          <img src="./images/m10.png" alt="image" />
          <img src="./images/m11.png" alt="image" />
          <img src="./images/m12.png" alt="image" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Image
