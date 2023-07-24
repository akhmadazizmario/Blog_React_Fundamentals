import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css"


function RootLayout () { 
    return (
        <>
         <NavLink className={({ isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""} 
         style={ {
            marginRight: '8px'
         }}
         to="/">Home</NavLink> 

         <NavLink style={ {
            marginRight: '8px'
         }} 
         to="/about">About</NavLink> 

         <NavLink style={ {
            marginRight: '8px'
         }} 
         to="/blog">Blog</NavLink>
         
         <p />
         <Outlet />
        </>
    )
 }

 export default RootLayout;