import { QuestionType } from "../hooks/useRoom";

type QuestionButton = {
  handleDeleteQuestion(questionId: QuestionType): void,
  image: string;
}

export function QuestionButton({
  handleDeleteQuestion,
  image
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