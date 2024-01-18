import { Questions } from "@/types/Questions";

export const quizList: Questions[] = [
    {
        id: 1,
        question: 'Qual ingrediente não pode faltar?',
        alternatives: [
            {
                answer: 'Farinha',
                correct: false
            },
            {
                answer: 'Corante',
                correct: true
            },
            {
                answer: 'Água',
                correct: false
            },
            {
                answer: 'Acúcar',
                correct: false
            },
        ]
    }
];