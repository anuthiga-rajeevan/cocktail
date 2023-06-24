import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from "react-responsive";
import { AppDispatch, RootState } from "../store";
import { LoadingStatus, Theme } from "../Types";
import { getTheme, setTheme as setThemeStore } from "../store/theme";

export function useTheme() {
    const dispatch = useDispatch<AppDispatch>();
    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        },
        undefined
    );

    const theme = useSelector((state: RootState) => state.theme.theme);
    const getThemeStatus = useSelector((state: RootState) => state.theme.getThemeStatus);

    const setTheme = useCallback(
        (theme: string) => {
            dispatch(setThemeStore(theme))
        }, [dispatch]
    );


    useEffect(() => {
        if (getThemeStatus === LoadingStatus.idle) {
            dispatch(getTheme());
        }
        if (getThemeStatus === LoadingStatus.success && !theme) {
            setTheme(systemPrefersDark ? Theme.dark : Theme.light)
        }
    }, [getThemeStatus, theme, systemPrefersDark, dispatch, setTheme]);

    return {
        theme,
        setTheme,
    };
}