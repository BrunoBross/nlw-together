import { stringify } from 'querystring';
import { ReactNode } from 'react';
import '../styles/question.scss'

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isHighlighted?: boolean;
  isAnswered?: boolean;
}

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps){
  return(
    <div className={`question ${isAnswered ? 'answered' : ''} ${isHighlighted && !isAnswered ? 'highlighted' : ''}`}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
          <span>{new Date().getHours()}</span>
          {/* <div id="admin">ADMINISTRADOR</div> */}
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  );
}