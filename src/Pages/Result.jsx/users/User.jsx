import React from "react"
import data from "./data"
import "./users.module.css"

const User = (value) => {
  return (
    <>
      <section className={`users grid grid-cols-4 justify-center items-center px-[4vw]`}>
        {data.map((value) => {
          return (
            <div className='cardBox '>
              <div className='img'>
                <img src={value.cover} alt='' className="imageCircle w-[15vw] h-[22.5vw] object-cover object-center" />
              </div>
              <div className='title'>
                <h3>{value.title}</h3>
                <p>{value.email}</p>
                <span>{value.user}</span>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default User