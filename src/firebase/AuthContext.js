import React, { useContext, useEffect, useReducer, useRef } from "react";
import { auth } from "./config";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const getErrorMessage = (errorCode) => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "The email you provided is already in use.";
    case "auth/wrong-password":
      return "Invalid credentials.";
    case "auth/user-not-found":
      return "Invalid credentials";
    default:
      return null;
  }
};

const showTime = 3000; // duration when the snackbar and error message is shown

const AuthContext = React.createContext();
AuthContext.displayName = "Auth";

// ACTIONS
AuthProvider.actions = {
  setUser: "SET_USER",
  setError: "SET_ERROR",
  toggleLoading: "TOGGLE_LOADING",
  manageSnackbar: "MANAGE_SNACKBAR",
};

// REDUCER
const reducer = (state, action) => {
  switch (action.type) {
    case AuthProvider.actions.setUser: {
      return {
        ...state,
        user: action.payload.user,
        error: null,
        isInitiallyLoading: false,
        isLoading: false,
      };
    }
    case AuthProvider.actions.setError: {
      return {
        ...state,
        user: null,
        error: action.payload.error,
        isInitiallyLoading: false,
        isLoading: false,
      };
    }
    case AuthProvider.actions.toggleLoading: {
      return {
        ...state,
        isLoading: action.payload.value,
      };
    }
    case AuthProvider.actions.manageSnackbar: {
      return {
        ...state,
        snackbar: { ...action.payload },
      };
    }
    default:
      throw new Error(`No case for type ${action.type} found.`);
  }
};

export function useAuth() {
  const authContext = useContext(AuthContext);
  if (!authContext)
    throw new Error("useAuth should only be used within AuthContext Provider");

  return authContext;
}
const initialState = {
  isInitiallyLoading: true,
  isLoading: false,
  user: null,
  error: null,
  snackbar: {
    show: false,
    message: null,
  },
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isInitiallyLoading, isLoading, user, error, snackbar } = state;

  const signingInSoDontDispatchOnAuthStateChange = useRef(false);

  useEffect(() => {
    console.log("EFFECT RAN");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed in
        if (signingInSoDontDispatchOnAuthStateChange.current) {
          signingInSoDontDispatchOnAuthStateChange.current = false;
          return;
        }

        // set user
        setUser(user);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    return unsubscribe;
  }, [user]);

  const login = (email, password) => {
    signingInSoDontDispatchOnAuthStateChange.current = true;

    toggleLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);

        toggleLoading(false);
      })
      .catch((error) => {
        // Handle Errors here.
        handleError(error);
      });
  };

  const register = (email, password, displayName) => {
    signingInSoDontDispatchOnAuthStateChange.current = true;

    toggleLoading(true);

    let user = null;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user;
        updateProfile(user, { displayName });
        setUser(user);
        toggleLoading(false);
      })
      .catch((error) => {
        // Handle Errors here.
        handleError(error);
      });
  };

  const updateUserProfile = (displayName, photoUrl) => {
    toggleLoading(true);

    updateProfile(auth.currentUser, { displayName })
      .then(() => toggleLoading(false))
      .then(() => manageSnackbar(true, "Profile was successfully updated!"))
      .catch((error) => {
        // Handle Errors here.
        handleError(error);
      });
  };

  const updateUserPhoto = (photoURL) => {
    updateProfile(auth.currentUser, { photoURL })
      .then(() => toggleLoading(false))
      .then(() =>
        manageSnackbar(true, "Profile photo was successfully updated!")
      )
      .catch((error) => {
        // Handle Errors here.
        handleError(error);
      });
  };

  const logout = () => {
    toggleLoading(true);
    signOut(auth)
      .then(() => toggleLoading(false))
      .catch((error) => {
        // Handle Errors here.
        handleError(error);
      });
  };

  const toggleLoading = (isLoading) => {
    dispatch({
      type: AuthProvider.actions.toggleLoading,
      payload: {
        value: isLoading,
      },
    });
  };

  const manageSnackbar = (show, message) => {
    dispatch({
      type: AuthProvider.actions.manageSnackbar,
      payload: { show, message },
    });

    setTimeout(() => {
      dispatch({
        type: AuthProvider.actions.manageSnackbar,
        payload: { show: false, message: null },
      });
    }, showTime);
  };

  const setUser = (user) => {
    dispatch({
      type: AuthProvider.actions.setUser,
      payload: {
        user,
      },
    });
  };

  const handleError = (error) => {
    // Handle Errors here.
    const errorCode = error.code;

    const errorMessage = getErrorMessage(errorCode);

    console.warn("errorCode", errorCode, "errorMessage", errorMessage);

    setError(errorMessage);

    setTimeout(() => {
      setError(null);
    }, showTime);

    toggleLoading(false);
  };

  const setError = (error) => {
    dispatch({
      type: AuthProvider.actions.setError,
      payload: {
        error,
      },
    });
  };

  const value = {
    isInitiallyLoading,
    isLoading,
    user,
    error,
    snackbar,
    login,
    register,
    logout,
    updateUserProfile,
    updateUserPhoto,
  };

  return isInitiallyLoading ? (
    <h1>Loading......</h1>
  ) : (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
