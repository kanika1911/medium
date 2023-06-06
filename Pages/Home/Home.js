import React from 'react'
import './Home.css'
import image from '../../../assets/A.png'
const Home = () => {
  return (
    <div className="home">
      <div className="first">
        <div className="left">
          <div className="hh">
            <h1>Stay curious.</h1>
            <p>
              Discover stories,thinking and expertise from writers on any topic.
            </p>
            <div className="btn">
              <span>Start reading</span>
              <br />
            </div>
          </div>
        </div>
        <div className="right">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
