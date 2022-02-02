// @flow 

import React from 'react';

type Item = {
  id: Number,
  title: string,
  category: string,
  description: string,
  link: string,
  release_date: string,
  views: string,
  image: string
}


function Single({ item }: Item ) {
  return (
    <li className="col l6 s12">
      <div className="card">
        <div className="card-image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="card-content">
          <span className="card-title">{item.title}</span>
          <p>{item.description}</p>
          <div className="row">
            <div className="col l6 center">
              <blockquote>
                <h5>
                  Released:
                  {item.release_date}
                </h5>
              </blockquote>
            </div>
            <div className="col l6 center">
              <blockquote>
                <h5>
                  Views:
                  {item.views}
                </h5>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="card-action">
          <a href={item.link} target="noopener _blank">Link to course</a>
        </div>
      </div>
      <br />
    </li>
  );
}

export default Single;
