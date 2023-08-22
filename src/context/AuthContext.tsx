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
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import createAxiosInstance from "../utils/axiosInstance";

const AuthContext = createContext<AuthContextType>({
  user: null,
  auhtHeader: "",
  googleSignIn: async () => {},
  logOut: () => {},
  logIn: async () => {},
  registerUser: async () => {},
  isLoading: false,
});

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [auhtHeader, setAuthHeader] = useState<any>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setIsLoading(true);
      const userCredential = await signInWithPopup(auth, provider);
      const token = await userCredential.user.getIdToken();
      const { displayName, email, photoURL } = userCredential.user;
      const axiosInstance = createAxiosInstance(auhtHeader);
      const googleSignInURL = "/Users/SignUp/Google";
      const body: GoogleSignInModel = {
        userName: displayName || "",
        fullName: displayName || "",
        email: email || "",
        photoURL: photoURL,
        token,
      };

      const response = await axiosInstance.post(googleSignInURL, body);
      if (response.status === 200) {
        setAuthHeader(response.headers["authorization"]);
        setUser(response.data);
      } else {
        console.log("Google Signing failed");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const logIn = async (data: UserLogin) => {
    const { userName, password } = data;
    try {
      setIsLoading(true);
      const axiosInstance = createAxiosInstance(auhtHeader);
      const authUrl = "/Users/Login";
      const body = { userName, password };
      const response = await axiosInstance.post(authUrl, body);

      if (response.status === 200) {
        setAuthHeader(response.headers["authorization"]);

        setUser(response.data);
      } else {
        console.log("Login failed:", response.status, response.statusText);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const registerUser = async (data: UserRegisterModel) => {
    try {
      setIsLoading(true);
      const axiosInstance = createAxiosInstance(auhtHeader);
      const registerUrl = "/Users/Register";
      const body = data;
      const response = await axiosInstance.post(registerUrl, body);
      if (response.status === 200) {
        console.log("user registered successfully");
      } else {
        console.log("registration failed");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const logOut = () => {
    signOut(auth);
    setUser(null);
  };

  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     console.log(currentUser);
  //   });
  //   return () => {
  //     unSubscribe();
  //   };
  // }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        auhtHeader,
        googleSignIn,
        logOut,
        logIn,
        registerUser,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const UserAuth = () => {
  return useContext(AuthContext);
};
