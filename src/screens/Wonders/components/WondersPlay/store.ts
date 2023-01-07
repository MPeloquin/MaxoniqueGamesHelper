import create from 'zustand';

export enum ProgressTokens {
    'Agriculture' = 'agriculture',
    'Architecture' = 'architecture',
    'Economy' = 'economy',
    'Law' = 'law',
    'Masonry' = 'masonry',
    'Mathematics' = 'mathematics',
    'Philosophy' = 'philosophy',
    'Strategy' = 'strategy',
    'Theology' = 'theology',
    'Urbanism' = 'urbanism',
}

export enum TokenStatus {
    'Box' = 'box',
    'Player' = 'player',
    'Game' = 'game',
    'NotUsable' = 'notUsable',
}

export type Player = {
    id: number;
    money: number;
    progressTokens: ProgressTokens[];
    hasLostTwoCoins: boolean;
    hasLostFiveCoins: boolean;
};

export type WondersStore = {
    players: Player[];
    militaryScore: number;
    progressTokens: { [key in ProgressTokens]: TokenStatus };
    updatePlayerMoney: (playerId: number) => (amount: number) => void;
    updateMilitaryScore: (amount: number) => void;
    selectProgressToken: (token: ProgressTokens, playerId: number) => void;
    initializeGame: () => void;
    returnTokenToGame: (token: ProgressTokens) => void;
    returnTokenToBox: (token: ProgressTokens) => void;
};

function getRandomKeys<T extends object>(obj: T, num: number): (keyof T)[] {
    const keys = Object.keys(obj) as (keyof T)[];
    const randomKeys: (keyof T)[] = [];
    for (let i = 0; i < num; i++) {
        const index = Math.floor(Math.random() * keys.length);
        randomKeys.push(keys[index]);
        keys.splice(index, 1);
    }
    return randomKeys;
}

function takeRandom<T>(array: T[], count: number): T[] {
    const copy = [...array];
    const result = [];
    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * copy.length);
        result.push(copy.splice(index, 1)[0]);
    }
    return result;
}

export const useWondersGameStore = create<WondersStore>((set, get) => ({
    players: [
        { id: 0, money: 7, progressTokens: [], hasLostFiveCoins: false, hasLostTwoCoins: false },
        { id: 1, money: 7, progressTokens: [], hasLostFiveCoins: false, hasLostTwoCoins: false },
    ],
    militaryScore: 0,
    progressTokens: {
        [ProgressTokens.Agriculture]: TokenStatus.NotUsable,
        [ProgressTokens.Architecture]: TokenStatus.NotUsable,
        [ProgressTokens.Economy]: TokenStatus.NotUsable,
        [ProgressTokens.Law]: TokenStatus.NotUsable,
        [ProgressTokens.Masonry]: TokenStatus.NotUsable,
        [ProgressTokens.Mathematics]: TokenStatus.NotUsable,
        [ProgressTokens.Philosophy]: TokenStatus.NotUsable,
        [ProgressTokens.Strategy]: TokenStatus.NotUsable,
        [ProgressTokens.Theology]: TokenStatus.NotUsable,
        [ProgressTokens.Urbanism]: TokenStatus.NotUsable,
    },
    initializeGame: () => {
        set((state) => {
            const selectedTokens = getRandomKeys(state.progressTokens, 5);
            const newProgressTokens = { ...state.progressTokens };
            const notSelectedTokens = Object.keys(newProgressTokens).filter(
                (key) => !selectedTokens.includes(key as ProgressTokens),
            );
            const boxTokens = takeRandom(notSelectedTokens, 3) as ProgressTokens[];

            for (const key of Object.keys(newProgressTokens) as ProgressTokens[]) {
                newProgressTokens[key] = TokenStatus.NotUsable;
            }
            for (const key of boxTokens) {
                newProgressTokens[key] = TokenStatus.Box;
            }
            for (const key of selectedTokens) {
                newProgressTokens[key] = TokenStatus.Game;
            }

            return {
                players: [
                    { id: 0, money: 7, progressTokens: [], hasLostFiveCoins: false, hasLostTwoCoins: false },
                    { id: 1, money: 7, progressTokens: [], hasLostFiveCoins: false, hasLostTwoCoins: false },
                ],
                militaryScore: 0,
                progressTokens: newProgressTokens,
            };
        });
    },
    updatePlayerMoney: (playerId) => (amount) =>
        set((state) => {
            const updatedPlayers = [...state.players];
            updatedPlayers[playerId].money += amount;
            return { players: updatedPlayers };
        }),
    updateMilitaryScore: (amount) =>
        set((state) => {
            const newScore = state.militaryScore + amount;

            const players = [...state.players];
            const updatedPlayer1 = players[0];
            const updatedPlayer2 = players[1];

            if (newScore <= -3 && !updatedPlayer1.hasLostTwoCoins) {
                updatedPlayer1.hasLostTwoCoins = true;
                updatedPlayer1.money -= 2;
            }
            if (newScore <= -6 && !updatedPlayer1.hasLostFiveCoins) {
                updatedPlayer1.hasLostFiveCoins = true;
                updatedPlayer1.money -= 5;
            }
            if (newScore >= 3 && !updatedPlayer2.hasLostTwoCoins) {
                updatedPlayer2.hasLostTwoCoins = true;
                updatedPlayer2.money -= 2;
            }
            if (newScore >= 6 && !updatedPlayer2.hasLostFiveCoins) {
                updatedPlayer2.hasLostFiveCoins = true;
                updatedPlayer2.money -= 5;
            }
            return { militaryScore: newScore, players: [updatedPlayer1, updatedPlayer2] };
        }),
    selectProgressToken: (token, playerId) =>
        set((state) => {
            const updatedPlayers = [...state.players];
            updatedPlayers[playerId].progressTokens = [...updatedPlayers[playerId].progressTokens, token];
            return {
                progressTokens: {
                    ...state.progressTokens,
                    [token]: TokenStatus.Player,
                },
                players: updatedPlayers,
            };
        }),
    returnTokenToGame: (token) =>
        set((state) => {
            const players = [...state.players];
            players[0].progressTokens = players[0].progressTokens.filter((t) => t !== token);
            players[1].progressTokens = players[1].progressTokens.filter((t) => t !== token);
            return {
                progressTokens: {
                    ...state.progressTokens,
                    [token]: TokenStatus.Game,
                },
                players,
            };
        }),
    returnTokenToBox: (token) =>
        set((state) => {
            const players = [...state.players];
            players[0].progressTokens = players[0].progressTokens.filter((t) => t !== token);
            players[1].progressTokens = players[1].progressTokens.filter((t) => t !== token);
            return {
                players,
                progressTokens: {
                    ...state.progressTokens,
                    [token]: TokenStatus.Box,
                },
            };
        }),
}));
