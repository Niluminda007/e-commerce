import noramlLoginImage from "../../assets/login_image.jpg";
import mobileLoginImage from "../../assets/mobile_login_image.jpg";

const LoginBackground = () => {
  return (
    <picture>
      <source
        media="(min-width: 640px)"
        srcSet={`${noramlLoginImage} 640w`}
        sizes="640px"
      />
      <img
        className=" 
          sm:max-h-[100%]
          sm:h-auto
          h-full 
         absolute top-[50%] -translate-y-[50%] sm:translate-y-0 sm:static flex-[.5] rounded-lg  blur-sm sm:blur-none object-cover "
        src={mobileLoginImage}
        alt="login-wallpaper"
      />
    </picture>
  );
};

export default LoginBackground;
