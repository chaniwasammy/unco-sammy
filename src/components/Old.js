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
.loon{margin-top:30px;
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

const Old = () => {
    return (
        <Wrapper>
             <div className = 'right'>
                <h1>New Model. </h1>
                <p className = 'loo'>Our new goal was to build a generation of purpose minded, tech savvy, entrepreneurial young adults.</p>
                <p className = ' loon '>With this said, we knew we HAD to continue educating the youth.</p>
                <p>Today, when you join an Uncommon Bootcamp, not only are you training for the workforce, you’re also volunteering teaching coding to kids in the community.</p>
            </div>
            <div className = 'left'>
            <img className='se' src ='./images/anesu.jpeg' alt=''/>
            </div>
           
        </Wrapper>
        );
    };
    
    export default Old;