import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps{
  content: string;
  onDeleteComment: (comment:string) =>  void;
}


export function Comment({content, onDeleteComment}: CommentProps) {

  const [likeCount, setLikeCont] = useState(0);


  function handleDeleteComment() {
    console.log('deletar')

    onDeleteComment(content)
  
  }

  function handleLikeComment() {
    setLikeCont((state)=>{
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https:github.com/maykbrito.png' alt='' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Victor</strong>
              <time dateTime="2022-06-07 17:30:22">Cerca de ha 1h atras</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <div>
          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
