import React from 'react';
import styled from 'styled-components';
const Wrapper  = styled.section`
display: flex;
padding-right:80px;
flex-direction: column;
@media (min-width: 1200px) {
       height:92vh;
    }
@media (min-width: 1024px) {
    flex-direction: row;
  }
.right{
    margin-top:180px;
    padding-left:80px;
    @media (max-width: 1028px) {
        margin-top:90px; 
        padding-left:40px 

    }
    h1{
        font-size: 54.64px;

font-weight: 700;

line-height: 92.888px;

color: rgb(0, 0, 0);
    }
    p{

font-size: 24px;

font-weight: 200;

line-height: 43.2px;

color: rgb(0, 0, 0);
    }
    .StyledButton {
        margin-top:50px;
    display: inline-block;
    padding: 13px 35px;
    background-color: blue;
    color: white;
    text-decoration: none;
    border: 2px solid transparent;
    transition: background-color 0.3s, border-color 0.3s, opacity 0.3s;
    border-radius:5px;
    &:hover {
      background-color: transparent;
      border-color: blue;
      color:blue;
      opacity: 0.7;
    }
  }
}
.left{
    img{
        width:647px;
        height: 100vh;
    min-height: auto;
    max-height: none;
    
    @media (max-width: 900px) {
        width:769px; 
    }
    @media (max-width: 1025px) {
       height: 48vh;   
    }
    @media (max-width:669px){
     height:90vh;
        width:667px;
    }
    @media (max-width: 400px) {
        width:376px;   
    }

    }
}
`;

function HeaderBlog() {
    return (
  <Wrapper>
    <div className = 'left'>
        <img src ='https://uncommon.org/wp-content/uploads/2021/08/k-hands-on-computers@2x-1.png'/>
    </div>
    <div className = 'right'>
    
        <h1>Uncommon Notes</h1>
        
      <p><span></span></p>
        <p>Stories, news & insights from our journey to build a better, more inclusive, tech empowered world.</p>
        <div className="ButtonWrapper">
          <a href="#donate" className="StyledButton" data-trigger-click="donate">Subcribe To Our Newsletter</a>
        </div>
    </div>
    </Wrapper>
  )
}

export default HeaderBlog