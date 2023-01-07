import { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

export const useLockLandscape = () => {
    useEffect(() => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);

        return () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        };
    }, []);
};
