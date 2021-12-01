import { QuestionType } from "../hooks/useRoom";

type QuestionButton = {
  handleFunction(questionId: string): void,
  image: string;
  question: QuestionType;
}

export function ButtonQuestion({
  handleFunction,
  image,
  question,
}:QuestionButton){
  return(
    <button
      type="button"
      onClick={() => handleFunction(question.id)}
      >
        <img src={image} alt="Remover pergunta" />
    </button>
  );
}