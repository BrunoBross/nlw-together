type QuestionButton = {
  handleDeleteQuestion(questionId: string): void,
  deleteImg: string;
}

export function QuestionButton({
  handleDeleteQuestion,
  deleteImg
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