import { QuestionType } from "../hooks/useRoom";

type QuestionButton = {
  handleDeleteQuestion(questionId: string): void,
  Img: string;
  question: QuestionType;
}

export function QuestionButton({
  handleDeleteQuestion,
  Img,
  question,
}:QuestionButton){
  return(
    <button
      type="button"
      onClick={() => handleDeleteQuestion(question.id)}
      >
        <img src={Img} alt="Remover pergunta" />
    </button>
  );
}