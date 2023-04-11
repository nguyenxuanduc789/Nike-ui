import { GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom';
const client_id = '918995765716-l6epui4231mq1icgaahqh0rq7ogk8j5b.apps.googleusercontent.com';
function Logout() {
    const onSuccess = () => {
        console.log('thong cong');
    };
    return (
        <Link to="/">
            <div id="singInButton">
                <GoogleLogout client_id={client_id} buttonText="Logout" onLogoutSuccess={onSuccess} />
            </div>
        </Link>
    );
}

export default Logout;
