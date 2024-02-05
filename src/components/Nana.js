import React from 'react';
import styled from 'styled-components';
const Wrapper  = styled.section`
display:flex;
flex-direction:row;

padding :150px;
@media(max-width:900px){
    display:block;
    padding :80px;
}
@media(max-width:400px){
    padding :20px;
}

.left{
    a{font-size:30px;}
    .zee{
        @media(min-width:1200px){
            font-size:40px;
            font-family:bold;
        }
   

}
    padding-right:80px;
    @media(max-width:900px){
        padding-right:0px;
    }
    p{
       font-size: 20px;
       margin-bottom:20px;
font-weight: 200;

line-height: 37.23px;

color: rgb(0, 0, 0);
    }
    h1{
        hr{
            height:10px;
            border:none;
            width: 86%;
            margin-top:-4%;
            background-color:#4B59F6;
        }
        font-size: 65px;
        @media(max-width:900px){
            font-size: 53px;
        }

font-weight: 700;

line-height: 95.03px;

color: rgb(0, 0, 0);
    }
    hr{
        margin-top:20px;
        margin-bottom:40px;
    }
}
.right{
    img{
        margin:0;
        width:550px;
        height:400px;
        @media(max-width:669px){
            width:509px;
        }
        @media(max-width:400px){
            width:330px;
        height:200px;  
        }
        
    } 
}

`;

function Nana() {
    return (
  <Wrapper>
    <div className = ' left'>


<h1>Nicki Keszler <hr></hr></h1>
<p className='zee'>Innovation Hub</p>
<p>Nedbank has been the ultimate corporate sponsor and we have loved working with their team.</p>
<hr/>
<a>Read More</a>
    </div>
    <div className = 'right'>
    <img  className = 'gray'src = 'https://uncommon.org/wp-content/uploads/2021/09/Nicki-keszler-Innovation-HIb-480x377.jpg '/>
    </div>
    </Wrapper>
  )
}

export default Nana