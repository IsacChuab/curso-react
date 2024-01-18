export type Questions = {
    id: number;
    question: string;
    alternatives: Alternative[];
}

type Alternative = {
    answer: string;
    correct: boolean;
}