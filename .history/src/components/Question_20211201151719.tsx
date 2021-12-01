import { ReactNode } from 'react';
import '../styles/question.scss'

export type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isHighlighted?: boolean;
  isAnswered?: boolean;
  isAdmin?: boolean;
}

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
  isAdmin = false,
}: QuestionProps){
  return(
    <div className={`question ${isAnswered ? 'answered' : ''} ${isHighlighted && !isAnswered ? 'highlighted' : ''}`}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
          {isAdmin && (
            <div id="admin">ADMIN</div>
          )}
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  );
}