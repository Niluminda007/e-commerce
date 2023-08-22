import RegisterWallpaperNoraml from "../../assets/register_desktop_bakcground.jpg";
import RegisterWallpaperMobile from "../../assets/register_mobile_bakcground.jpg";

const RegisterBackground = () => {
  return (
    <div className="flex flex-[0.5]">
      <picture>
        <source
          media="(min-width: 640px)"
          srcSet={`${RegisterWallpaperNoraml} 640w`}
          sizes="640px"
        />
        <img
          className=" 
          sm:max-h-[100%]
          sm:h-auto
          h-full 
         absolute top-[50%] -translate-y-[50%] sm:translate-y-0 sm:static flex-[.5] rounded-lg  blur-sm sm:blur-none object-cover "
          src={RegisterWallpaperMobile}
          alt="login-wallpaper"
        />
      </picture>
    </div>
  );
};

export default RegisterBackground;
