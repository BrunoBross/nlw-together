import { Button } from "./Button";

type FormProps = {
  handleSendQuestion(): void,
  setNewQuestion(): void,
  newQuestion: string,
  user: {
    name: string,
    avatar: string;
  }
}

export function Form({
  handleSendQuestion,
  setNewQuestion,
  newQuestion,
  user,
}:FormProps){
  return(
    <form onSubmit={handleSendQuestion}>
      <textarea
        placeholder="O que você quer perguntar?"
        onChange={event => setNewQuestion(event.target.value)}
        value={newQuestion}
      />

      <div className="form-footer">
        { user ? (
          <div className="user-info">
            <img src={user.avatar} alt={user.name} />
            <span>{user.name}</span>
          </div>
        ) : (
          <span>Para visualizar ou enviar uma pergunta, <button onClick={loginBack}>faça seu login</button></span>
        )}
        <Button type="submit" disabled={!user}>Enviar pergunta</Button>
      </div>
    </form>
  );
}