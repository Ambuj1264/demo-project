import { useGoogleLogin } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = "please provide the auth ";

function SignIn() {
    const googleLogin = useGoogleLogin({
        onSuccess:async (tokenResponse) => {
            console.log('Google login successful', tokenResponse);
           localStorage.setItem("GoogleToken", tokenResponse)
        },
        onError: () => {
            console.error('Google login failed');
            // Handle login errors here
        },
        clientId: GOOGLE_CLIENT_ID, // Pass the client ID here
        responseType: "token" // Specify the response type as token
    });

    return (
        <button onClick={googleLogin}>
            Sign in with Google
        </button>
    );
}

export default SignIn;
