
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ArticleContainer = styled.div`
  padding: 10%;
  .two{
    display:flex;
    gap:5%;
    
  .god{
    .rss{
            height:2px;
            border:none;
            width: 81%;
            margin-top:-1%;
            background-color:#000;
        }
    .rsss{
            height:2px;
            border:none;
            width: 48%;
            margin-top:-1%;
            background-color:#000;
        }
    .rssss{
            height:2px;
            border:none;
            width: 69%;
            margin-top:-1%;
            background-color:#000;
        }
    .rsssss{
            height:2px;
            border:none;
            width: 35%;
            margin-top:-1%;
            background-color:#000;
        }
    .rssssss{
            height:2px;
            border:none;
            width: 53%;
            margin-top:-1%;
            background-color:#000;
        }
    .u{
        font-size:40px;
        line-height:50px;
        font-weight:300;
        margin-top:70px;
        
    }
    p{
        margin-top:20px;
        font-size:25px;
    }
    hr{
        width:90%;
        background-color:#F8F8F8;
        margin-top:80px;
    }
  }
  .good{
    h5{
        margin-top:50px;
        font-size:40px;
        line-height:50px;
    }
    h6{
        font-size:40px;
        font-weight:300;
    }
    .mom{
        display:flex;


        .anesu{
       width:200px;
       height:40px;
       border:none;
       background-color:#F2F2F2;
       text-align:left;
       border-radius:7px;
       margin-top:35px;
       padding-left:10px;
        }
        .beyond{
       width:200px;
       height:40px;
       border:none;
       background-color:#F2F2F2;
       margin-top:35px;
       padding-left:10px;
       text-align:left;
       border-radius:10px;
       margin-left:10px;

        }
    }
    .dad{
        .an{
       width:200px;
       height:40px;
       border:none;
       background-color:#F2F2F2;
       margin-top:15px;
       text-align:left;
       border-radius:10px;
       padding-left:10px;

        }
        .be{
       width:200px;
       height:40px;
       border:none;
       background-color:#4B59F6;
       margin-top:5px;
       padding-left:10px;
       text-align:center;
       border-radius:5px;
       margin-left:10px;
       color:white;
       font-size:20px;
        }
    }
   
  }
}    
.vee{
    h1{
    padding-bottom :30px; 
    margin-top:200px;

  }
.yy{
  h3{
    margin-top:80px;
  }
}
  .zet{
    color:black;
   
  }
  p{
    padding-top:20px;
    color:black;
    padding-bottom:20px;
    font-size:20px;
    line-height:40px;
  }
  hr{
    margin-top:50px;
    width:80%;
  }
}
`;
const FirstBlog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
      try {
       
        const apiKey = '6ee29b00a54742b2a536b36303052b30';
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        console.log(response.data);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ArticleContainer>

<div className='two'>
        <div className='god'>
            <h1>All Posts</h1>
            <p className='u'>Econet Zimbabwe CEO<hr className='rss'></hr>, Dr. Mboweni<hr className='rsss'></hr> Visits Uncommon.org’s<hr className='rssss'></hr> Mufakose<hr className='rsssss'></hr> Innovation Hub<hr className='rssssss'></hr></p>
            <p>Special thank you to Uncommon.org Board Member,...</p>
            <p className='s'>By Uncommon News | Mar 31, 2023</p>
            <hr></hr>
        </div>
        <div className='good'>
            <h6>Newsletter</h6>
            <h5>Stay up to date with all things Uncommon.</h5>
            <form className='mom' action="https://formsubmit.co/Chaniwasammy@gmail.com" method="POST">
                       <input className="anesu" type="" name="NAME" placeholder="First Name" />
                       <input className="beyond" type="Last Name" name="" placeholder="Last Name" />
                     </form>
                     <form className='dad' action="https://formsubmit.co/Chaniwasammy@gmail.com" method="POST">
                       <input className="an" type="" name="EMAIL" placeholder="Email" />
                       <input className="be" type="Subcribe" name="" placeholder="Subcribe" />
                     </form>
        </div>
    </div>

    <div className='vee'>
      <h1>All Posts</h1>
      {articles.map((article) => (
        <div className='yy' key={article.title}>
          <h3>
            <Link  className='zet'to={`/article/${encodeURIComponent(article.title)}`}>
              {article.title}
            </Link>
          </h3>
          <p>{article.description}</p>
          <hr />
        </div>
      ))}
    </div>
    </ArticleContainer>
  );
};

export default FirstBlog