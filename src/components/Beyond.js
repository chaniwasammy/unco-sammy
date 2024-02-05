import React from 'react';
import styled from 'styled-components';
const Wrapper  = styled.section`
display :flex;
gap:60px;
padding:90px;
@media(max-width:400px){
    padding :40px;
}
@media(max-width:900px){
    flex-direction:column;
}
.Anesu{
    position: relative;
    img{
        width:100%;
        height:100%;
    }
    height:40vh;
    @media(max-width:1024px){
        height:31vh;
    }
    @media(max-width:900px){
        width:582px;
    }
    @media(max-width:669px){
            width:575px;
        }
    @media(max-width:400px){
    width:270px;}
    width:400px;
    background:blue;
    color:black;
    overflow:hidden;
   text-align:center;
   h1{
    margin-top:100px;
    margin-bottom:20px;
    font-size:40px;
   }

}
.Anesu h1,
.Anesu p{
    opacity:0;
    transition:opacity 0.3s ease;
    
}
.Anesu:hover{
    background:white;  
    img{
        opacity: 0.5;
    } 
    .text{
        
        display: block;
    }
}
.Anesu:hover h1,
.Anesu:hover p{
    opacity:1;
}

.Kambuzama h1,
.Kambuzama p{
    opacity:0;
    transition:opacity 0.3s ease;
    
}
.Kambuzama:hover{
    background:white;   
}
.Kambuzama:hover h1,
.Kambuzama:hover p{
    opacity:1;
}
.Anesu{
    height:40vh;
    width:400px;
    @media(max-width:1024px){
        height:31vh;
    }
    @media(max-width:900px){
        width:582px;
    }
    @media(max-width:669px){
            width:575px;
        }
    @media(max-width:400px){
    width:270px;}
    background:black;
    color:black;
    overflow:hidden;
   text-align:center;
   h1{
    margin-top:100px;
   }
}

.Anesu{
    height:40vh;
    width:400px;
    @media(max-width:1024px){
        height:31vh;
    }
    @media(max-width:900px){
        width:582px;
    }
    @media(max-width:669px){
            width:575px;
        }
    @media(max-width:400px){
    width:270px;}
    background:yellow;
    color:black;
    overflow:hidden;
   text-align:center;
   h1{
    margin-top:100px;
   }
}
.text{
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: .9s ease-in-out;
}
`;

function Beyond() {
    return (
  <Wrapper>
    <div className = 'Anesu' >
    <div className = 'text' >
        <h1>Mufakose</h1>
        <p>Read More</p>
       </div> 
        <img src='./images/anesu.jpeg' alt='' />
    </div>
    
    <div className = 'Anesu' >
        <div className = 'text'>
        <h1>Kambuzama</h1>
        <p>Read More</p>
        </div>
    
        <img src='./images/hu.png' alt='' />
    </div>
    <div className = 'Anesu' >
        <div className = 'text'>
        <h1>Warran Park</h1>
        <p>Read More</p>
        </div>
    
        <img src='./images/IMG_0812-1024x768.jpeg' alt='' />
    </div>
  
    </Wrapper>
  )
}

export default Beyond