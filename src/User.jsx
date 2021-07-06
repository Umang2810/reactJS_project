import React from 'react';
const User=(props)=>{
   
    return(<>
        <div onClick={props.click}>
            I am {props.name} and I am {props.age} years old.
        </div>
        
        </>
    )
}
export default User;