import { Page } from 'konsta/react';
import LiveSVG from '@src/images/LiveSVG';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

export default function Signin() {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code',
  });

  return (
    <Page>

      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute top-0 right-0 h-screen w-full overflow-hidden">
          <LiveSVG />
        </div>
        <div className="flex flex-col space-y-3 z-0">
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
      </div>
    </Page>
  );
}
