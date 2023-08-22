import { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../assets/google_signIn.png";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    await googleSignIn();
  };
  useEffect(() => {
    if (user !== null) {
      navigate("/home");
    }
  }, [user]);
  return (
    <button
      className="bg-transparent text-white text-sl h-8 w-8 rounded-full hover:scale-125 transition-all ease-linear"
      onClick={handleGoogleSignIn}
      type="button">
      <img
        className="h-12 w-12 object-contain"
        src={GoogleLogo}
        alt="google-sign-in-logo"
      />
    </button>
  );
};

export default GoogleLoginButton;
