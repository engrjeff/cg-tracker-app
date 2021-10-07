import React, { useCallback, useContext, useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "./config";
import useFirestore from "./useFirestore";

const LessonSeriesContext = React.createContext();
LessonSeriesContext.displayName = "LessonSeries";

const showTime = 3000; // duration when the snackbar and error message is shown

// ACTIONS
LessonSeriesProvider.actions = {
  setSeries: "SET_SERIES",
  setLessons: "SET_LESSONS",
  setError: "SET_ERROR",
  toggleLoading: "TOGGLE_LOADING",
  manageSnackbar: "MANAGE_SNACKBAR",
};

// REDUCER
const reducer = (state, action) => {
  switch (action.type) {
    case LessonSeriesProvider.actions.setSeries: {
      return {
        ...state,
        series: action.payload.series,
        error: null,
        isInitiallyLoading: false,
        isLoading: false,
      };
    }
    case LessonSeriesProvider.actions.setLessons: {
      return {
        ...state,
        lessons: action.payload.lessons,
        error: null,
        isInitiallyLoading: false,
        isLoading: false,
      };
    }
    case LessonSeriesProvider.actions.setError: {
      return {
        ...state,
        user: null,
        error: action.payload.error,
        isInitiallyLoading: false,
        isLoading: false,
      };
    }
    case LessonSeriesProvider.actions.toggleLoading: {
      return {
        ...state,
        isLoading: action.payload.value,
      };
    }
    case LessonSeriesProvider.actions.manageSnackbar: {
      return {
        ...state,
        snackbar: { ...action.payload },
      };
    }
    default:
      throw new Error(`No case for type ${action.type} found.`);
  }
};

export function useLessonSeries() {
  const lessonSeriesContext = useContext(LessonSeriesContext);
  if (!lessonSeriesContext)
    throw new Error(
      "useLessonSeries should only be used within LessonSeriesContext Provider"
    );

  return lessonSeriesContext;
}
const initialState = {
  isLoading: false,
  series: [],
  lessons: [],
  error: null,
  snackbar: {
    show: false,
    message: null,
  },
};

function LessonSeriesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isLoading, lessons, series, error, snackbar } = state;

  const setSeries = useCallback((series) => {
    toggleLoading(true);
    dispatch({
      type: LessonSeriesProvider.actions.setSeries,
      payload: { series },
    });
    toggleLoading(false);
  }, []);

  const { docs: seriesDocs } = useFirestore("series", setSeries);

  useEffect(() => {
    setSeries(seriesDocs);
  }, [seriesDocs, setSeries]);

  const getSeries = async () => {
    console.log("GET SERIES");
    const querySnapshot = await getDocs(collection(db, "series"));
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({ ...doc.data(), id: doc.id });
    });
    setSeries(documents);
  };

  const addSeries = async (series) => {
    toggleLoading(true);
    await addDoc(collection(db, "series"), {
      ...series,
      createdAt: new Date().toISOString(),
    });
    toggleLoading(false);
    manageSnackbar("Series successfully added!");
  };

  const addLesson = async (seriesId, lesson) => {
    toggleLoading(true);
    const docRef = doc(db, "series", seriesId);
    await updateDoc(docRef, {
      lessons: arrayUnion({
        ...lesson,
        createdAt: new Date().toISOString(),
        id: uuid(),
      }),
    });
    toggleLoading(false);
    manageSnackbar("Lesson successfully added!");
  };

  const updateSeries = async (seriesId, title) => {
    toggleLoading(true);
    const docRef = doc(db, "series", seriesId);
    await updateDoc(docRef, {
      title,
    });
    toggleLoading(false);
    manageSnackbar("Series successfully updated!");
  };

  const deleteSeries = async (seriesId) => {
    toggleLoading(true);
    const docRef = doc(db, "series", seriesId);
    await deleteDoc(docRef);
    toggleLoading(false);
    manageSnackbar("Series successfully deleted!");
  };

  const toggleLoading = (isLoading) => {
    dispatch({
      type: LessonSeriesProvider.actions.toggleLoading,
      payload: {
        value: isLoading,
      },
    });
  };

  const manageSnackbar = (message) => {
    dispatch({
      type: LessonSeriesProvider.actions.manageSnackbar,
      payload: { show: true, message },
    });

    setTimeout(() => {
      dispatch({
        type: LessonSeriesProvider.actions.manageSnackbar,
        payload: { show: false, message: null },
      });
    }, showTime);
  };

  const value = {
    isLoading,
    series,
    lessons,
    error,
    snackbar,
    getSeries,
    addSeries,
    addLesson,
    updateSeries,
    deleteSeries,
  };

  return (
    <LessonSeriesContext.Provider value={value}>
      {children}
    </LessonSeriesContext.Provider>
  );
}

export default LessonSeriesProvider;
