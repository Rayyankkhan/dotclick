import React from 'react'
import { NavLink } from 'react-router-dom'
import MainCon from './MainCon'


const SideBar = () => {
    const menuItem=[
        {
            path:"/",
            name:"Current Request",
        },
        {
            path:"/OngoingStays",
            name:"Ongoing Stays",
        },
        {
            path:"/PreviousStays",
            name:"Previous Stays",
        },
        {
            path:"/Reports",
            name:" Reports",
        },
    ]
  return (
    <>
      <div className='main'>
      
      <div className="container">
        <div className="sidebar">
            <div className="top-section">
                <h1 className='mx-7 my-10 text-3xl bold italic font-extrabold'>LODGN</h1>
            </div>
            {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           
                           <div  className="link_text">{item.name}<hr className='h-5  mt-3 w-40'></hr></div>
                       </NavLink>
                   ))
               }
               <button className='mt-96 mx-5 button1 '>LOGIN</button>
               <p className='help mt-2 text-center'>Help Desk</p>
               <p className='help text-center'>786-874 9988</p>
        </div>
        <div><MainCon/></div>
      </div>
      </div>
    </>
  )
}

export default SideBar

