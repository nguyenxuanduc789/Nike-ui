import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import Login from '../../Login';
import Logout from '../../logout';

const client_id = '918995765716-l6epui4231mq1icgaahqh0rq7ogk8j5b.apps.googleusercontent.com';
const redirect_uri = 'http://localhost:3001';

function APP() {
    useEffect(() => {
        function start() {
            gapi.client.init({
                client_id: client_id,
                scope: 'profile',
                redirect_uri: redirect_uri,
            });
        }
        gapi.load('client:auth2', start);
    });
    return (
        <div>
            <Login></Login>
            <Logout></Logout>
        </div>
    );
}

export default APP;
