import { Page } from 'konsta/react';
import LiveSVG from '@src/images/LiveSVG';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google';

export default function Signin() {
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
    },
    onError: errorResponse => console.log(errorResponse),
  });


  return (
    <Page>

      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute top-0 right-0 h-screen w-full overflow-hidden">
          <LiveSVG />
        </div>
        <div className="flex flex-col space-y-3 z-0">
          <button
            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center shadow-lg space-x-1"
            onClick={() => googleLogin()}
          >
            <FcGoogle size={20} />
            <p>Sign in with Google</p>
          </button>
        </div>
      </div>
    </Page>
  );
}
