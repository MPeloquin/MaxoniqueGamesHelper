import { MissionsProgressStore } from './store';

export type Mission = {
    id: number;
    numberTaskCards?: number;
    taskTokens?: {
        one?: boolean;
        two?: boolean;
        three?: boolean;
        four?: boolean;
        five?: boolean;
        last?: boolean;
        before1?: boolean;
        before2?: boolean;
        before3?: boolean;
        before4?: boolean;
    };
    disruption?: number;
    deadZone?: boolean;
    instructions?: string;
    commanderDecision?: number;
    commanderDistribution?: boolean;
};

export type MissionWithProgress = Mission & {
    progress?: MissionsProgressStore['progress'][number];
};
