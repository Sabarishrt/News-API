import React from 'react'

const NewsIteam = ({ title, description, image, url }) => {
  return (
    <div>
      <img
        src={image || 'https://dummyimage.com/600x400/000/fff'}
        alt="News"
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />

      <h4>{title}</h4>
      <p>{description || 'No description for this news'}</p>

      <a href={url} target="_blank" rel="noreferrer">
        Read More
      </a>
    </div>
  )
}

export default NewsIteam
