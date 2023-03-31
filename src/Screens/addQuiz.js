import SMButton from "../components/SMButton";
import SMInput from "./../components/SMinput";
import { useState , useEffect } from "react";
import { postFBData ,getFBData } from "../config/firebase/firbasemethods";
import { v4 as uuid } from 'uuid';


const AddQuiz = () => {
  const [quizData, setQuizData] = useState({});
  const [quizDataOption, setQuizDataOption] = useState({});

  const handleOptionInput = (event) => {
    let { value, name } = event.target;
    setQuizDataOption({
      ...quizDataOption,
      [name]: value,
    });
  };
  let inputOptions = [
    { name: "option1", label: "Option 1" },
    { name: "option2", label: "Option 2" },
    { name: "option3", label: "Option 3" },
    { name: "option4", label: "Option 4" },
  ];

  const submitData = () => {

    const array = [];
    Object.entries(quizDataOption).forEach(([key, value]) => array.push(value));

    let questions = {
      question: quizData.question,
      correctAns: quizData.correctAns,
      options: array,
    };

    console.log("==========", questions);

    const unique_id = uuid();
    
    postFBData("quiz/",unique_id)
    .then(()=>{
      console.log("save succefully")
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const showFbData = () => {
    getFBData("quiz/")
      .then((res) => {
        setQuizData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    showFbData();
  }, []);


  const handleInput = (event) => {
    let { value, name } = event.target;
    setQuizData({
      ...quizData,
      [name]: value,
    });
  };
;



  return (
    <>
      <h1 className="text-center  rounded shadow">Add Quiz</h1>
      <div className="container">
        <div className="p-2 text-center">
          <textarea
            name="question"
            placeholder="Add Question"
            className="p-2 w-80 fs-5 border-0 rounded shadow bg-light"
            cols="30"
            rows="5"
            value={quizData.value}
            onChange={handleInput}
          ></textarea>
        </div>
        <div className="p-2 text-center">
          <div className="p-3">
            {inputOptions.map((eachOptions) => {
              return (
                <SMInput
                  styles={{ marginBottom: "10px", marginLeft: "10px" }}
                  value={quizDataOption.value}
                  name={eachOptions.name}
                  onChange={handleOptionInput}
                  label={eachOptions.label}
                  className="p-2 w-100 fs-5 border-0 rounded shadow
                 bg-light"
                />
              );
            })}
          </div>
          <div className="p-3">
            <SMInput
              name="correctAns"
              value={quizData.value}
              onChange={handleInput}
              label={"Add CorrectAnsware"}
            />
          </div>

          <div className="p-3">
            <SMButton label={"Submit Question"} onClick={submitData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuiz;
