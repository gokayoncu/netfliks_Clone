import { useEffect, useState } from "react"

function Navbar() {
  const[show,setshow]=useState(false)
  
  useEffect(() => {
    window.addEventListener("scroll",()=>{
      if(window.scrollY>50){
        setshow(true)
      }else{
        setshow(false)
      }
    });
    return () => {
      window.removeEventListener("scroll",()=>{})
    }
  }, [])
  
  return (
    <nav className={`nav ${show && "newNavbar"}`}>
      <img src="https://images-ext-1.discordapp.net/external/TomoUBSv86YVJEyTcg5meRzRApqhsqPjJusY70vwEf0/https/upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png?format=webp&quality=lossless&width=212&height=57" alt="" className="logo"/>
      <img src="https://images-ext-1.discordapp.net/external/rSjyCvgVh-XPJF_GEupyPl_DXXNASkWzlVVGL5c6_ks/https/media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg?format=webp&width=506&height=670" alt="" className="avatar"/>
    </nav>
  )
}

export default Navbar
