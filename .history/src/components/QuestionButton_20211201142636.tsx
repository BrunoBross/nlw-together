import { QuestionType } from "../hooks/useRoom";

type QuestionButton = {
  handleDeleteQuestion(questionId: string): void,
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
      onClick={() => handleDeleteQuestion(question.Id)}
      >
        <img src={image} alt="Remover pergunta" />
    </button>
  );
}