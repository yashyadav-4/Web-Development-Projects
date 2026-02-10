import { Navigation } from "./Navigation"


export const Header= ({username})=>{
    return (
        <>
           <h1> Task App</h1> 
           <div>
            <p>Welcome</p>
            <p>{username}</p>
           </div>
           <Navigation/>
        </>
    )
}