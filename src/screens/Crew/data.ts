import { Mission } from './types';

export const Missions: Mission[] = [
    {
        id: 1,
        numberTaskCards: 1,
    },
    {
        id: 2,
        numberTaskCards: 2,
    },
    {
        id: 3,
        numberTaskCards: 2,
        taskTokens: {
            one: true,
            two: true,
        },
    },
    {
        id: 4,
        numberTaskCards: 3,
    },
    {
        id: 5,
        instructions:
            'After everyone has looked at his or her cards, your commanded asks everyone how he or she feels. It may only be answered with "good" or "bad". Your commander then decides who is ill. The sick crew member must not win any tricks.',
    },
    {
        id: 6,
        numberTaskCards: 3,
        taskTokens: {
            before1: true,
            before2: true,
        },
        deadZone: true,
    },
    {
        id: 7,
        numberTaskCards: 3,
        taskTokens: {
            last: true,
        },
    },
    {
        id: 8,
        numberTaskCards: 3,
        taskTokens: {
            one: true,
            two: true,
            three: true,
        },
    },
    {
        id: 9,
        instructions: 'At least one color card with a value of one must win a trick',
    },
    {
        id: 10,
        numberTaskCards: 4,
    },
    {
        id: 11,
        numberTaskCards: 4,
        taskTokens: {
            one: true,
        },
        instructions:
            'The commander designates a crew member who must complete the recalculation of the course. This task will require a high level of concentration, thus the chosen crew member must not communicate during this part of the mission',
    },
    {
        id: 12,
        numberTaskCards: 4,
        taskTokens: {
            last: true,
        },
        instructions:
            'Immediately after the 1st trick, each of you must draw a random card from the crew member to your right. Then continue playing normally.',
    },
    {
        id: 13,
        instructions: 'You have to win a trick with each rocket card.',
    },
    {
        id: 14,
        numberTaskCards: 4,
        taskTokens: {
            before1: true,
            before2: true,
            before3: true,
        },
        deadZone: true,
    },
    {
        id: 15,
        numberTaskCards: 4,
        taskTokens: {
            one: true,
            two: true,
            three: true,
            four: true,
        },
    },
    {
        id: 16,
        instructions: 'You must not win a trick with a nine.',
    },
    {
        id: 17,
        numberTaskCards: 2,
        instructions: 'You still must not win a trick with a nine.',
    },
    {
        id: 18,
        numberTaskCards: 5,
        disruption: 2,
    },
    {
        id: 19,
        numberTaskCards: 5,
        taskTokens: {
            one: true,
        },
        disruption: 3,
    },
    {
        id: 20,
        commanderDecision: 2,
        instructions:
            'Your commander determines woh receives the tasks and carries out the repair, the commander cannot choose himself or herself.',
    },
    {
        id: 21,
        numberTaskCards: 5,
        taskTokens: {
            one: true,
            two: true,
        },
        deadZone: true,
    },
    {
        id: 22,
        numberTaskCards: 5,
        taskTokens: {
            before1: true,
            before2: true,
            before3: true,
            before4: true,
        },
    },
    {
        id: 23,
        numberTaskCards: 5,
        taskTokens: {
            one: true,
            two: true,
            three: true,
            four: true,
            five: true,
        },
        instructions:
            'Before you select the task cards, you can swap the position of two task tokens. Decide together but do not reveal anything about your own cards.',
    },
    {
        id: 24,
        numberTaskCards: 6,
        commanderDistribution: true,
        instructions:
            "Once everyone has looked at their cards, the commander asks each crew member about the willingness to take on the task. This may only be answered with 'yes' or 'no'. The commander then distributes the tasks.",
    },
    {
        id: 25,
        numberTaskCards: 6,
        taskTokens: {
            before1: true,
            before2: true,
        },
        deadZone: true,
    },
    {
        id: 26,
        instructions: 'At least two color cards, each with a value of one, must win one trick each',
    },
    {
        id: 27,
        commanderDecision: 3,
        instructions: 'Your commander specified who should carry out the repair',
    },
    {
        id: 28,
        numberTaskCards: 6,
        taskTokens: {
            one: true,
            last: true,
        },
        disruption: 3,
    },
    {
        id: 29,
        deadZone: true,
        instructions:
            'At no time may any crew member have won two tricks more than any other crew member. Communication is down',
    },
    {
        id: 30,
        numberTaskCards: 6,
        taskTokens: {
            before1: true,
            before2: true,
            before3: true,
        },
        disruption: 2,
    },
    {
        id: 31,
        numberTaskCards: 6,
        taskTokens: {
            one: true,
            two: true,
            three: true,
        },
    },
    {
        id: 32,
        numberTaskCards: 7,
        commanderDistribution: true,
        instructions: 'Your commander takes over the organization and distributes the individual tasks',
    },
    {
        id: 33,
        instructions:
            'After everyone has looked at his or her cards, your Commander asks everyone for their willingness. But you can only answer with "Yes" or "No". Your Commander then selects a crew member. The selected crew member must win exactly 1 trick, but not with a Rocket card.',
    },
    {
        id: 34,
        instructions:
            'At no time may a crew member have won two tricks more than another crew member. In addition, your commander must win the first and last trick.',
    },
    {
        id: 35,
        numberTaskCards: 7,
        taskTokens: {
            before1: true,
            before2: true,
            before3: true,
        },
    },
    {
        id: 36,
        numberTaskCards: 7,
        taskTokens: {
            one: true,
            two: true,
        },
        commanderDistribution: true,
    },
    {
        id: 37,
        commanderDecision: 4,
    },
    {
        id: 38,
        numberTaskCards: 8,
        disruption: 3,
    },
    {
        id: 39,
        numberTaskCards: 8,
        taskTokens: {
            before1: true,
            before2: true,
            before3: true,
        },
        deadZone: true,
    },
    {
        id: 40,
        numberTaskCards: 8,
        taskTokens: {
            one: true,
            two: true,
            three: true,
        },
        instructions:
            'Before you begin to distribute the tak cards, you may move a task token to another task card that currently has no task tokens. Decide together but do not reveal anything about your own cards.',
    },
    {
        id: 41,
        instructions:
            'After everyone has looked at their hand of cards, your Commander will ask everyone for their willingness. However, you may only answer "Yes" or "No". Your Commander then selects a person. Your mission is that this person only wins the first and last trick. Since only the thrusters are used for position correction, both tricks may not be won with Rocket cards.',
    },
    {
        id: 42,
        numberTaskCards: 9,
    },
    {
        id: 43,
        numberTaskCards: 9,
        commanderDistribution: true,
    },
    {
        id: 44,
        instructions:
            'Every rocket card must win a trick. First the one rocket card, then the two, the three, and finally the four.',
    },
    {
        id: 45,
        numberTaskCards: 9,
        taskTokens: {
            before1: true,
            before2: true,
            before3: true,
        },
    },
    {
        id: 46,
        instructions:
            'Your task is that the crew member ot the left of the member with the pink nine must win all pnik cards. Say who has pink nine.',
    },
    {
        id: 47,
        numberTaskCards: 10,
    },
    {
        id: 48,
        numberTaskCards: 3,
        taskTokens: {
            last: true,
        },
        instructions: 'The last task must be won in the last trick',
    },
    {
        id: 49,
        numberTaskCards: 10,
        taskTokens: {
            before1: true,
            before2: true,
            before3: true,
        },
    },
    {
        id: 50,
        instructions:
            "Everyone looks at their hand of cards. A crew member must win the first 4 tricks. Another crew member must win the last trick. The remaining crew members must win all tricks in between. Your Commander asks everyone for his preferred task, then you decide together as a crew who should take over which position. But don't tell them anything about your hand of cards.",
    },
];
