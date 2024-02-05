import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
display:flex;
flex-direction:row;
background: #F2F3FF;
padding :90px;

@media (max-width: 1030px) {
  flex-direction: column;
  padding:30px;}
.right{
h1{
    @media (max-width: 400px) { font-size: 40px;}
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
.saama{margin-top:60px;
margin-bottom:30px;}  
.left{
    img{ 
        @media (min-width: 1100px) {
        width:600px;
        height:450px;
        border-radius:20px;
    padding-left:120px;}
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

const Spirit = () => {
    return (
        <Wrapper>
             <div className = 'right'>
                <h1>Initial Concept. </h1>
                
                <p className = ' saama '>After successfully fundraising in the beginning of 2018, we created a business plan and put our ideas to the test.</p>
                <p>The initial model was simple. Train unemployed young adults to be after school coding instructors.</p>
            </div>
            <div className = 'left'>
            <img className='se' src = './images/working-in-Mufakuse-1024x658.jpeg'/>
            </div>
           
        </Wrapper>
        );
    };
    
    export default Spirit;