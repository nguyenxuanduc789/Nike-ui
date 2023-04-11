import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
const client_id = '918995765716-l6epui4231mq1icgaahqh0rq7ogk8j5b.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log('thong cong', res.profileObj);
    };

    const onFailure = (res) => {
        console.log('that bai', res);
    };

    return (
        <Link to="/admin">
            <div id="singInButton">
                <GoogleLogin
                    client_id={client_id}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_orign'}
                    isSignedIn={true}
                />
            </div>
        </Link>
    );
}

export default Login;
