import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.section`
img{
    width: 100%;
    height: 536px;
    object-fit: cover;
}
h2{
  margin-top: 15%;
  margin-left: 36px;
    font-size: 28px;
    font-weight: 700;
    margin-right: 27px;
    line-height: 1.4;
    margin-bottom: 5%;
  }
  span{
    margin-left: 36px; 
    color: blue;
    font-size: 19px;
    font-weight: 500;
  }
  p{
    margin-bottom: 9%;
    margin-top: 8%;
    font-size: 19px;
    font-weight: 300;
    margin-left: 36px;
    margin-right: 49px;
    line-height: 1.7;
  }
@media (min-width:768px) {
  .PagesHero{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
 p {
    margin-bottom: 9%;
    margin-top: 8%;
    font-size: 19px;
    font-weight: 300;
    margin-left: 36px;
    margin-right: 8px;
    line-height: 1.7;
}

}

@media (min-width: 992px) {
  img{
    width: 50%;
    height: 100vh;
    object-fit: cover;
}
h2 {
    margin-top: 15%;
    margin-left: 68px;
    font-size: 72px;
    font-weight: 600;
    margin-right: 27px;
    line-height: 1.3;
    margin-bottom: 5%;
}
 span {
    margin-left: 68px;
    color: blue;
    font-size: 25px;
    font-weight: 500;
}
p {
  margin-bottom: 9%;
    margin-top: 8%;
    font-size: 25px;
    font-weight: 300;
    margin-left: 63px;
    margin-right: 69px;
    line-height: 1.7;
}
}


@media (min-width: 1200px) {
  .text-div{
    width: 50%;
  }
  p {
  margin-bottom: 9%;
    margin-top: 6%;
    font-size: 25px;
    font-weight: 300;
    margin-left: 63px;
    margin-right: 80px;
    line-height: 1.7;
}
h2 {
    margin-top: 15%;
    margin-left: 68px;
    font-size: 70px;
    font-weight: 600;
    margin-right: 27px;
    line-height: 1.3;
    margin-bottom: 5%;
}
}
`


function PagesHero() {
  return (
    <Wrapper>
      <div className='PagesHero'>
      <img src="./images/little-girl-looking-at-campera-in-mufakose-1@2x.png" alt="photo"/>
<div className='text-div'>
<h2>Our Uncommon Approach.</h2>
<span>Your Work Changes Lives</span>
<p>When we design, develop and market web products, 100% of the profits are used to fund access to technology education & employment.</p>
</div>
      </div>
    </Wrapper>
  )
}

export default PagesHero
