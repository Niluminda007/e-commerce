import { useContext, createContext, useState, useEffect } from "react";
import {
  AuthContextType,
  GoogleSignInModel,
  UserLogin,
  UserRegisterModel,
  UserType,
} from "../Types/InterfaceTypes";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import createAxiosInstance from "../utils/axiosInstance";
import useMediaQuery from "../hooks/useMediaQuery";

const AuthContext = createContext<AuthContextType>({
  user: null,
  authHeader: "",
  googleSignIn: async () => {},
  logOut: () => {},
  logIn: async () => {},
  registerUser: async () => {},
  isLoading: false,
  checkAuthentication: () => false,
});

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [authHeader, setAuthHeader] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isMobile, isTablet } = useMediaQuery();

  const commonRequestHandling = async (
    axiosInstance: any,
    url: string,
    body: any
  ) => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.post(url, body);

      if (response.status === 200) {
        setAuthHeader(response.headers["authorization"]);
        sessionStorage.setItem("authHeader", response.headers["authorization"]);
        sessionStorage.setItem("isAuthenticated", "true");

        setUser(response.data);
      } else {
        console.log("Request failed:", response.status, response.statusText);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const googleSignIn = async () => {
    try {
      setIsLoading(true);
      sessionStorage.setItem("isRedirecting", "true");
      const provider = new GoogleAuthProvider();
      if (isMobile || isTablet) {
        await signInWithRedirect(auth, provider);
      } else {
        await signInWithPopup(auth, provider);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const logIn = async (data: UserLogin) => {
    const { userName, password } = data;
    const axiosInstance = createAxiosInstance(authHeader);
    const authUrl = "/Users/Login";
    const body = { userName, password };

    await commonRequestHandling(axiosInstance, authUrl, body);
  };

  const registerUser = async (data: UserRegisterModel) => {
    const axiosInstance = createAxiosInstance(authHeader);
    const registerUrl = "/Users/Register";
    const body = data;

    await commonRequestHandling(axiosInstance, registerUrl, body);
  };

  const logOut = () => {
    sessionStorage.removeItem("authHeader");
    sessionStorage.removeItem("isAuthenticated");

    signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const authToken = sessionStorage.getItem("authHeader");

    if (authToken !== undefined && authToken !== null) {
      setAuthHeader(authToken);
    }
  }, []);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setIsLoading(true);
        const token = await currentUser.getIdToken();
        const { displayName, email, photoURL } = currentUser;
        const axiosInstance = createAxiosInstance(authHeader);
        const googleSignInURL = "/Users/SignUp/Google";
        const body: GoogleSignInModel = {
          userName: displayName || "",
          fullName: displayName || "",
          email: email || "",
          photoURL: photoURL,
          token,
        };

        await commonRequestHandling(axiosInstance, googleSignInURL, body);

        const isRedirecting = sessionStorage.getItem("isRedirecting");
        if (isRedirecting === "true") {
          setIsLoading(false);
          sessionStorage.removeItem("isRedirecting");
        }
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const checkAuthentication = () => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    return !!isAuthenticated;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authHeader,
        googleSignIn,
        logOut,
        logIn,
        registerUser,
        isLoading,
        checkAuthentication,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const UserAuth = () => {
  return useContext(AuthContext);
};
