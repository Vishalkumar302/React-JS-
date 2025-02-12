import { useState } from 'react';
function Profile() {
    const [loggedIn] = useState(true)

    
        return (
            <div>
                {loggedIn?<h1>Welcome Vishal Ji</h1>:<h1>Welcome guest</h1>}
            </div>
        )
   
}
export default Profile;



