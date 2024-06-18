import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

const AuthPage = ({ setIsAuth }) => {
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setIsAuth(true);
      localStorage.setItem("TOKEN", data.user.refreshToken);
    });
  };
  return (
    <div className="bg-white w-4/5 max-sm:w-full h-2/3 max-sm:h-full flex flex-col justify-center items-center gap-12 rounded max-sm:rounded-none">
      <h1 className="text-4xl max-sm:text-6xl font-bold">Login Chat Room</h1>
      <p className="text-base max-sm:text-xl">Login to continue</p>
      <button
        onClick={handleClick}
        className="bg-[#242424] hover:bg-white text-white hover:text-[#242424] py-2 max-sm:py-3 px-4 max-sm:px-5 rounded flex items-center gap-2 border border-transparent hover:border-[#242424] duration-300"
      >
        <img src="/g-logo.png" className="w-8 h-8" />
        <span>Login with Google</span>
      </button>
    </div>
  );
};

export default AuthPage;
