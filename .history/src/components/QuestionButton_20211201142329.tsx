import { QuestionType } from "../hooks/useRoom";

type QuestionButton = {
  handleDeleteQuestion(questionId: string): Promise<void>,
  image: string;
  question: QuestionType;
}

export function QuestionButton({
  handleDeleteQuestion,
  image,
  question,
}:QuestionButton){
  return(
    <button
      type="button"
      onClick={() => handleDeleteQuestion(question.id)}
      >
        <img src={image} alt="Remover pergunta" />
    </button>
  );
}