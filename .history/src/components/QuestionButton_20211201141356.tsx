export function QuestionButton(){
  return(
    <button
      type="button"
      onClick={() => handleDeleteQuestion(question.id)}
      >
        <img src={deleteImg} alt="Remover pergunta" />
    </button>
  );
}