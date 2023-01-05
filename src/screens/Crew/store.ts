import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface MissionsProgressStore {
    progress: {
        [key: number]: {
            failures: number;
            successes: number;
        };
    };
    completeMission: (id: number) => void;
    failMission: (id: number) => void;
    resetMission: (id: number) => void;
    reset: () => void;
}

export const useMissionProgressStore = create<MissionsProgressStore>()(
    persist(
        (set, get) => ({
            progress: {},
            completeMission(id) {
                const currentProgress = get().progress[id] || { failures: 0, successes: 0 };
                return set({
                    progress: {
                        ...get().progress,
                        [id]: { failures: currentProgress.failures, successes: currentProgress.successes + 1 },
                    },
                });
            },
            failMission(id) {
                const currentProgress = get().progress[id] || { failures: 0, successes: 0 };

                return set({
                    progress: {
                        ...get().progress,
                        [id]: { failures: currentProgress.failures + 1, successes: currentProgress.successes },
                    },
                });
            },
            resetMission(id) {
                return set({
                    progress: {
                        ...get().progress,
                        [id]: { failures: 0, successes: 0 },
                    },
                });
            },
            reset() {
                return set({ progress: {} });
            },
        }),
        {
            name: 'missions-progress',
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);
