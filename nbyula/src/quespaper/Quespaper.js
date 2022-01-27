import { Typography, Accordion, AccordionSummary, FormControlLabel, AccordionDetails, MenuItem, Select, IconButton } from '@mui/material';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import SubjectIcon from '@material-ui/icons/Subject';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Radio from '@material-ui/core/Radio';
import ShortTextIcon from '@material-ui/icons/ShortText';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Switch from '@material-ui/core/Switch';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import DeleteIcon from '@material-ui/icons/Delete';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import TextFieldsIcon from '@material-ui/icons/TextFields';


import { useState } from 'react';
import '../quespaper/quespaper.css'


function Quespaper() {
    const [questions, setQuestions] = useState(
        [
            {
                questionText: "what is your name?",
                questionType: "radio",
                options: [
                    { optionText: "rajat" },
                    { optionText: "kalam" },
                    { optionText: "rocket" }
                ],
                answer: false,
                answerKey: "",
                points: 0,
                open: true,
                required: false
            }])

    //function for changing the question
    function changeQues(text, i) {
        var newQues = [...questions];
        newQues[i].questionText = text;
        setQuestions(newQues);
        console.log(newQues)
    }
    //function for adding question type
    function addQuesType(i, type) {
        let qs = [...questions];
        console.log(type);
        qs[i].questionType = type;
        setQuestions(qs);
    }

    function changeOptionValue(text, i, j) {
        var optionsQuestion = [...questions];
        optionsQuestion[i].options[j].optionText = text;

        setQuestions(optionsQuestion);
        console.log(optionsQuestion);
    }

    function removeOption(i, j) {
        var RemoveOptionQuestion = [...questions];
        if (RemoveOptionQuestion[i].options.length > 1) {
            RemoveOptionQuestion[i].options.splice(j, 1);
            setQuestions(RemoveOptionQuestion);
            console.log(i + "__" + j);
        }
    }

    function addOption(i) {
        var optionsOfQuestion = [...questions];
        if (optionsOfQuestion[i].options.length < 5) {
            optionsOfQuestion[i].options.push({ optionText: "option" + (optionsOfQuestion[i].options.length + 1) })
        }
        else {
            console.log("Max 5 options");
        }
        setQuestions(optionsOfQuestion)
    }

    function deleteQuestion(i) {
        let qs = [...questions];
        if (questions.length > 1) {
            qs.splice(i, 1);
        }
        setQuestions(qs);

    }

    function copyQuestion(i) {

        let qs = [...questions];
        var newQuestion = qs[i];
        setQuestions([...questions, newQuestion])
    }

    function requiredQuestion(i) {
        var reqQuestion = [...questions];
        reqQuestion[i].required = !reqQuestion[i].required;
        console.log(reqQuestion[i].required + " " + i);
        setQuestions(reqQuestion)
    }
    function addMoreQuestionField() {
        setQuestions([...questions,
        { questionText: "Question", questionType: "radio", options: [{ optionText: "Option 1" }], open: true, required: false }])
    }

    function setOptionAnswer(ans, qno) {
        var Questions = [...questions];

        Questions[qno].answerKey = ans;


        setQuestions(Questions)
        console.log(qno + " " + ans)
    }

    function setOptionPoints(points, qno) {
        var Questions = [...questions];

        Questions[qno].points = points;


        setQuestions(Questions)
        console.log(qno + " " + points)
    }

    function addAnswer(i) {
        var answerOfQuestion = [...questions];

        answerOfQuestion[i].answer = !answerOfQuestion[i].answer;

        setQuestions(answerOfQuestion)
    }

    function doneAnswer(i) {
        var answerOfQuestion = [...questions];

        answerOfQuestion[i].answer = !answerOfQuestion[i].answer;

        setQuestions(answerOfQuestion)
    }

    function questionsUI() {
        return questions.map((ques, i) => (
            <div>
                <Accordion expanded={questions.open} className={questions[i].open ? 'add_border' : ""}>
                    <AccordionSummary
                        aria-controls='panel1a-content' id="panel1a-header" elevation={1} style={{ width: '100%' }} >

                        {questions[i].open ? (
                            <div className='saved_questions'>
                                <Typography style={{ fontSize: "15px", fontWeight: "400", letterSpacing: '.1px', lineHeight: '24px', paddingBottom: "8px" }} >{i + 1}.  {questions[i].questionText}</Typography>
                                {ques.options.map((op, j) => (
                                    <div key={j}>
                                        <div style={{ display: 'flex', }}>
                                            <FormControlLabel style={{ marginLeft: "5px", marginBottom: "5px" }} disabled control={<input type={ques.questionType} color="primary" style={{ marginRight: '3px', }} required={ques.type} />}
                                                label={
                                                    <Typography style={{
                                                        fontFamily: ' Roboto,Arial,sans-serif',
                                                        fontSize: ' 13px',
                                                        fontWeight: '400',
                                                        letterSpacing: '.2px',
                                                        lineHeight: '20px',
                                                        color: '#202124'
                                                    }}>
                                                        {ques.options[j].optionText}
                                                    </Typography>
                                                } />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : ""}

                    </AccordionSummary>
                    <div className='ques_box'>
                        {!questions[i].answer ? (
                            <AccordionDetails className="addQues">
                                <div className='add_ques_top'>
                                    <input type="text" className='question' placeholder='Question' value={ques.questionText} onChange={(e) => { changeQues(e.target.value, i) }}></input>
                                    <CropOriginalIcon />
                                    <Select className="select" style={{ fontSize: "13px" }} >
                                        <MenuItem id='radio' value="Radio" onClick={() => { addQuesType(i, "radio") }}><Radio style={{ marginRight: "10px" }} checked />MCQ</MenuItem>
                                    </Select>
                                </div>
                                {ques.options.map((op, j) => (
                                    <div className='add_question_body' key={j}>
                                        {
                                            (ques.questionType != "text") ?
                                                <input type={ques.questionType} style={{ marginRight: "10px" }} /> :
                                                <ShortTextIcon style={{ marginRight: "10px" }} />
                                        }
                                        <div>
                                            <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText} onChange={(e) => { changeOptionValue(e.target.value, i, j) }}></input>
                                        </div>
                                        <CropOriginalIcon />
                                        <IconButton aria-label='delete'>
                                            <CloseIcon onClick={() => { removeOption(i, j) }} />
                                        </IconButton>
                                    </div>
                                ))}

                                {ques.options.length < 5 ? (
                                    <div className="add_question_body">
                                        <FormControlLabel disabled control={

                                            (ques.questionType != "text") ?
                                                <input type={ques.questionType} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} style={{ marginLeft: "10px", marginRight: "10px" }} disabled /> :
                                                <ShortTextIcon style={{ marginRight: "10px" }} />

                                        }
                                            label={
                                                <div>
                                                    <input type="text" className="text_input" style={{ fontSize: "13px", width: "60px" }} placeholder="Add other"></input>
                                                    <Button size="small" onClick={() => { addOption(i) }} style={{ textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: "600" }}>Add Option</Button>
                                                </div>
                                            } />
                                    </div>

                                ) : ""}

                                <div className="add_footer">
                                    <div className="add_question_bottom_left">

                                        <Button size="small" style={{ textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: "600" }} onClick={() => { addAnswer(i) }} ><LaunchOutlinedIcon style={{ padding: "2px", marginRight: "8px" }} /> Answer key</Button>

                                    </div>

                                    <div className="add_question_bottom">

                                        <IconButton aria-label="Copy" onClick={() => { copyQuestion(i) }} >
                                            <FilterNoneIcon />
                                        </IconButton>

                                        <IconButton aria-label="delete" onClick={() => { deleteQuestion(i) }} >
                                            <DeleteIcon />
                                        </IconButton>

                                        <span style={{ color: "#5f6368", fontSize: "13px" }}>Required </span> <Switch name="checkedA" color="primary" checked={ques.required} />

                                        <IconButton >
                                            <MoreVertIcon />
                                        </IconButton>

                                        <IconButton >
                                            <AddCircleOutlineIcon onClick={addMoreQuestionField} className="edit" />
                                        </IconButton>

                                    </div>
                                </div>
                            </AccordionDetails>) : (
                            <AccordionDetails className="add_question" >
                                <div className="top_header">
                                    Choose Correct Answer
                                </div>
                                <div >
                                    <div className="add_question_top">
                                        <input type="text" className="question " placeholder="Question" value={ques.questionText} disabled />
                                        <input type="number" className="points" min="0" step="1" placeholder="0" onChange={(e) => { setOptionPoints(e.target.value, i) }} />


                                    </div>




                                    {ques.options.map((op, j) => (
                                        <div className="add_question_body" key={j} style={{ marginLeft: "8px", marginBottom: "10px", marginTop: "5px" }}>

                                            <div key={j}>
                                                <div style={{ display: 'flex' }} className="">
                                                    <div className="form-check">
                                                        <label style={{ fontSize: "13px" }} onClick={() => { setOptionAnswer(ques.options[j].optionText, i) }}>

                                                            {(ques.questionType != "text") ?
                                                                <input
                                                                    type={ques.questionType}
                                                                    name={ques.questionText}

                                                                    value="option3"
                                                                    className="form-check-input"
                                                                    required={ques.required}
                                                                    style={{ marginRight: "10px", marginBottom: "10px", marginTop: "5px" }}
                                                                /> :
                                                                <ShortTextIcon style={{ marginRight: "10px" }} />
                                                            }

                                                            {ques.options[j].optionText}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}



                                    <div className="add_question_body">


                                        <Button size="small" style={{ textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: "600" }}> Add Answer Feedback</Button>


                                    </div>




                                    <div className="add_question_bottom">

                                        <Button variant="outlined" color="primary" style={{ textTransform: 'none', color: "#4285f4", fontSize: "12px", marginTop: "12px", fontWeight: "600" }} onClick={() => { doneAnswer(i) }}>
                                            Done
                                        </Button>

                                    </div>
                                </div>

                            </AccordionDetails>
                        )}

                    </div>
                </Accordion>
            </div>
        ))
    }
    return <div>
        <div className='question_paper'>
            <div className='ques_head'>
                <input type="text" className='top_name' placeholder='Enter Quiz Head..'></input>
                <input type="text" className='top_disc' placeholder='Enter Quiz discription..'></input>
            </div>
            {questionsUI()}
        </div>

    </div>;
}

export default Quespaper;
