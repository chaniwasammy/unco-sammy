import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
display:flex;
flex-direction:row;
background: #F2F3FF;
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
.ree{margin-top:30px;
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

const First = () => {
    return (
        <Wrapper>
            
            <div className = 'left'>
            <img className='se' src = './images/working-in-Mufakuse-1024x658.jpeg'/>
            </div>
            <div className = 'right'>
                <h1>Our First Hub. </h1>
                <p className = 'loo'>As a grassroots organization, it has always been important for us to fully invest into the communities we serve.</p>
                <p className = 'ree '>Now that we had our education model ready to go, we needed a home to make it official.</p>
                <p>We decided to use shipping containers and solar power to deal with a lot of the infrastructure challenges we had been facing. Our first Hub was built in 2019, and we’ve been off to the races ever since.</p>
            </div>
        </Wrapper>
        );
    };
    
    export default First;