import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <img className="circle-img" src={props.img}></img>
            </div>
            <div className="bottom"></div>
            <p className="info">{props.tel}</p>
            <p className="info">{props.email}</p>
      </div>
    </>
  )
}

export default Card
