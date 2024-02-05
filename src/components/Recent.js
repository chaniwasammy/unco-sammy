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
    a{

        font-size:30px;
       
    }
    h2{
        font-size:50px;
        margin-bottom:90px;
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
    .zee{
        @media(min-width:1200px){
            font-size:40px;
            font-family:bold;
        }
   

}
    h1{
        hr{
            height:10px;
            border:none;
            width: 55%;
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
        
        width:504px;
        height:400px;
        margin-top:100px;
        @media(max-width:400px){
            width:330px;
        height:200px;  
        }
    } 
}

`;

function Recent() {
    return (
  <Wrapper>
   
    <div className = ' left'>
    <h2>Recent Builds</h2>

<h1>Nedbank <hr></hr></h1>
<p className='zee'>Innovation Hub</p>
<p>Nedbank has been the ultimate corporate sponsor and we have loved working with their team.</p>
<hr/>
<a>Read More</a>
    </div>
    <div className = 'right'>
    <img  className = 'gray'src = 'https://uncommon.org/wp-content/uploads/2021/09/Nedbank-Hub-1.jpg'/>
    </div>
    </Wrapper>
  )
}

export default Recent