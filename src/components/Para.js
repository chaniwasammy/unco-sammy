import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
display:flex;
flex-direction:row;
background: #FFFF;
padding :80px;
@media (max-width: 1030px) {
  flex-direction: column;
  padding:30px;}
  @media (min-width: 1130px) {
    padding-left:revert-layer;
    padding-top:175px;
padding-right:150px;
}
 
.right{
h1{
    font-size: 50px;

font-weight: 700;

line-height: 73.1px;

color: rgb(0, 0, 0);

}
p{
    font-size: 20px;

font-weight: 250;

line-height: 36px;
color: rgb(0, 0, 0) ;
}
}
.bong{margin-top:30px;
margin-bottom:30px;} 
.loo{
    margin-top:30px   
} 
.left{
    img{
        @media (min-width: 1100px) {
        width:600px;
        height:450px;
        border-radius:20px;
    padding-right:70px;}
        @media (max-width: 1028px) {
        width:960px;
        height:800px;}
        @media (max-width: 900px) {
        width:700px;
        height:600px;}
       
        @media (max-width:669px){
            width:606px;
    height:573px;
        }
        @media (max-width: 400px) {
            width:300px;
        height:200px; 
        }
    }
}
`;

const Para = () => {
    return (
        <Wrapper>
            
            <div className = 'left'>
            <img className='se' src = './images/anesu.jpeg'/>
            </div>
            <div className = 'right'>
                <h1>Pivoting. </h1>
                <p className = 'loo'>Before long, we realized a flaw in the model.</p>
                <p className = 'bong '>While training unemployed young adults to become teachers was creating jobs, and kids were learning how to code, we didn’t feel we were making the type of impact we knew we could.</p>
                <p>So we decided to change our model, and to focus on training young adults for the tech workforce.</p>
            </div>
        </Wrapper>
        );
    };
    
    export default Para;