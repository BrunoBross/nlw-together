import { QuestionProps } from "./Question";

type QuestionButton = {
  handleDeleteQuestion(questionId: string): void,
  deleteImg: string;
  question: QuestionProps;
}

export function QuestionButton({
  handleDeleteQuestion,
  deleteImg,
  question,
}:QuestionButton){
  return(
    <button
      type="button"
      onClick={() => handleDeleteQuestion(question.id)}
      >
        <img src={deleteImg} alt="Remover pergunta" />
    </button>
  );
}