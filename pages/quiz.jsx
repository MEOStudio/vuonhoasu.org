import Image from "next/image";
import quizData from "../data/quiz.json";
import styles from "../styles/quiz.module.scss";
import { useState } from "react";

const Quiz = () => {
  const data = quizData;
  const [answer, setAnswer] = useState(Array(data.length));
  const [score, setScore] = useState(null);
  const handleSubmit = () => {
    const sum = answer.reduce((a, v) => a + v);
    setScore(sum);
  };
  return (
    <div className={styles.container}>
      <div className={styles.heroImg}>
        <Image
          src="/images/hero.jpg"
          width={1920}
          height={700}
          layout="responsive"
          objectFit="cover"
          alt="Hero Image"
        />
      </div>
      <main>
        <h1>Quiz</h1>
        <ol>
          {data.map((item1, id1) => {
            return (
              <li>
                <label>{item1.question}</label>
                {item1.choices.map((item2, id2) => {
                  return (
                    <div className={styles.choice}>
                      <input
                        type="radio"
                        name={item1.question}
                        onClick={() => {
                          answer[id2] = item2.correct;
                          setAnswer(answer);
                        }}
                      />
                      <span>{item2.answer}</span>
                    </div>
                  );
                })}
                <br />
              </li>
            );
          })}
        </ol>

        <button onClick={handleSubmit}>Submit</button>
        {score && <p>Your score:&nbsp;{score}</p>}
        {score == data.length && <p>Your reward</p>}
      </main>
    </div>
  );
};

export default Quiz;
