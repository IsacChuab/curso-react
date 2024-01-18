import { Questions } from "@/types/Questions"

type Props = {
    question: Questions;
}

export const QuizQuestion = ({question}: Props) => {
    return (
        <div>
            <h1>{question.question}</h1>
            {question.alternatives.map((alternative, i) => (
                <ul key={i}>{alternative.answer}</ul>
            ))}
        </div>
    )
}