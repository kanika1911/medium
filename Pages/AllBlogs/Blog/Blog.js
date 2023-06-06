import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Blog.css'
const Blog = ({ date, name, title, desc, path }) => {
  const navigate = useNavigate()
  return (
    <div
      className="blog"
      onClick={() => {
        navigate(`/blogs/${path}`)
      }}
    >
      <div className="left">
        <div className="userInfo">
          <img
            src="https://media3.giphy.com/media/2smegWIwAjU6pW3w6k/200w.gif?cid=82a1493b8k5cftj89lwyj32mf6u0m6ga12qv4uq91p36wi6d&ep=v1_gifs_related&rid=200w.gif&ct=g"
            alt=""
          />
          <span id="name">{name}</span>
          <span id="date">{date}</span>
        </div>
        <div className="heading">
          <span>{title}</span>
        </div>
        <div className="desc" dangerouslySetInnerHTML={{ __html: desc }}></div>
        {/* <div className="desc">
          <span>{desc}</span>
        </div> */}
      </div>
      <div className="right1">
        <img
          src="https://i.gifer.com/origin/a6/a6b6c68285b2389353c579c87ad9c1d3.gif"
          alt=""
        />
      </div>
    </div>
  )
}

export default Blog
