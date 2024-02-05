import React,{useState} from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
.unknown{
  @keyframes slide{
  from {
    transform: translateY(-100px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-in-from-top {
  from {
    transform: translateY(-100px);
  }
  to {
    transform: translateY(0);
  }
}
  background:#4B59F6;
  position:absolute;
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  @media(min-width:992px){
      justify-content: flex-start;
      background:transparent;
    }
  img{
    margin:5%;
    color:white;
    z-index:9;
    width:50%;
    margin:0;
  position: relative;
  left: -10px; 
  animation: slideIn 1s forwards;
  @keyframes slideIn {
  0% {
    left: -100px; 
  }
  100% {
    left: 0; 
  }
}
    @media(min-width:768px){
      
    
      width:40%;
      margin-left:5px;
    }
    @media(min-width:992px){
     margin:0;
     width:35%;
    }
    @media(min-width:1200px){
      margin-top:0;
      width:30%
    }



  }
  .hamburger{
    padding:20px 41px 20px 8px;
    position:relative;
    z-index:9;
    @media(min-width:992px){
      display:none;
    }
    span{
      width:40px;
      height:4px;
      background:white;
      position:absolute;
      border-radius:10px;
      right:72px;
      transition:all 0.7s ease-in-out;
      &:before{
        background:white;
        width:100%;
        height:100%;
        position: absolute;
        content:"";
        top:-7px;
        border-radius:10px;
        transition:all 0.7s ease-in-out;
      }
      &:after{
        background:white;
        width:100%;
        height:100%;
        position: absolute;
        content:"";
        top:7px;
        border-radius:10px;
        transition:all 0.7s ease-in-out;
      }
    }
  }
  .open{
    span{
      background:transparent;
      &:before{
        top:0;
        background:white;
        transform:rotate(495deg);
      }
      &:after{
        top:0;
        background:white;
        transform:rotate(-495deg);
      }
    }
  }
  ul{
    position:absolute;
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    width:100%;
    height:90vh;
    top:95%;
    max-height:0;
    overflow:hidden;
    background-color:#4B59F6;
    transition:all 0.4s ease-in-out;
    gap: 5%;
    animation: slide-in-from-top 1s linear;
    @media(min-width:992px){
      max-height:unset;
      height:unset;
      flex-direction:row;
      position:relative;
      top: unset;
      margin-left:85px;
      gap:2%;
      background-color:transparent;
    }

    @media(min-width:1200px){
      padding-top:5px;
      margin-left:240px;
    }

    li{
      a{
        font-size: 15px;
        font-weight: 600;
        color:white;
        @media(min-width:992px){
          font-size: 20px;
          color:black;
          
    
          
        }
      }
      a:hover{
          color: #4B59F6;
        }
    }

    @media(min-width:992px){
    .btn1{
        height:unset;
        width:unset;
        background-color:#4B59F6;
        border:none;
        border-radius:5px;
        font-weight:600;
        padding:2% 2%;
        margin-left:20px;
        a{
          color:white;
          padding:unset;
          margin-top:unset;
          &:hover{
          color: #4B59F6;

        }
          
        }
        &:hover{
          color: #4B59F6;
          background: transparent;
          border: 1px solid #4B59F6;

        }
    }
  }

  @media(min-width:1200px){
    .btn1{
        height:unset;
        width:unset;
        background-color:#4B59F6;
        border:none;
        color:white;
        border-radius:7px;
        font-weight:600;
        padding:2% 3%;
        margin-top:1px;
        a{
          color:white;
          padding:unset;
          margin-top:unset;
        }
    }
  }

    }
  
  .change{
    max-height:100vh;
  }
}
  `


function Header() {
  const [checked, setChecked] = useState(false);

  return (
    <Wrapper>
      <div className='unknown'>
        <img src="./images/Logo-With-Text-1.png" alt="" />
        <div className={checked ? "hamburger open" : "hamburger"} onClick={() => setChecked(!checked)}>
          <span></span>
        </div>
        <ul className={checked ? "change" : ""}>
          <li>
        <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/OurStory">OurStory</Link>
          </li>
          <li>
            <Link to="/innovationHubs">Innovation Hubs</Link>
          </li>
          <li>
            <Link to="/HireUs">Hire Us</Link>
          </li>
          <li className='btn1'>
            <Link to="/Donate">Donate</Link>
          </li>
          <li>

          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Header;