import { MissionWithProgress } from '@/screens/Crew/types';

export function getMissionScreenTitle(mission: MissionWithProgress) {
    const progress = mission.progress || { failures: 0, successes: 0 };

    if (progress.successes === 0 && progress.failures === 0) {
        return `Mission #${mission.id}`;
    }
    let extra = ' - ';

    if (progress.successes > 0) {
        extra += `${progress.successes} ${progress.successes > 1 ? 'wins ' : 'win '}`;
    }
    if (progress.failures > 0) {
        extra += `${progress.failures} ${progress.failures > 1 ? 'losses ' : 'loss '}`;
    }
    return `Mission #${mission.id}${extra}`;
}
