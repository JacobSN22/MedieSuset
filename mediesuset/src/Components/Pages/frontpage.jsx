import axios from "axios";
import { Nav } from '../Partials/nav'
import React, { useEffect, useState } from 'react';
import { FrontPagestyle } from "../Style/frontpage.style";


export const Frontpage = () => {

  useEffect(() => {
    document.title = 'Forside';
  }, []);

  const url = "https://api.mediehuset.net/mediesuset/news";
  const [news, setNews] = useState([]);
  useEffect(() => {
      axios.get(url).then((data) => {
          console.log(data.data.items);
          setNews(data.data.items.slice(0, 6));
      });
  }, []);

  return (
  <FrontPagestyle>
    <div>
        <Nav />
        <h1>NYHEDER</h1>
        <div className="news">
                {news.map((data) => {
                    return( 
                    <div className="newsboxes" key={data.id}>
                        <img src={data.image} alt="Billed" />
                        <div className="text">
                          <h2>{data.title.slice(0, 31)}</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sequi natus quaerat eius, voluptas sed optio provident recusandae nisi quidem corrupti enim dolore sit possimus omnis. Omnis eos pariatur obcaecati!</p>
                          <div className="button">
                            <button>Læs mere</button>
                          </div>
                        </div>

                    </div>
                    )
                
                })}
            </div> 
    </div>
  </FrontPagestyle>
  )
}
