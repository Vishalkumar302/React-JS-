import { useState } from 'react';
function Profile() {
    const [loggedIn] = useState(true)

    if (loggedIn) {
        return (
            <div>
                <h1>Welcome Vishal</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Welcome Guest</h1>
            </div>
        )
    }
}
export default Profile;



