import LogOut from "./LogOut"

export const Header= ({username})=>{
    return (
        <>
           <h1> Task App</h1> 
           <div>
            <p>Welcome {username}</p>
           </div>
           <LogOut/>
        </>
    )
}