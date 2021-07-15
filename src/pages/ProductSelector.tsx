import React from 'react';
import Step from "../components/ProgressStep";
import QuestionCard from "../components/QuestionCard";
import QuestionCard2 from "../components/QuestionCard2";
import QuestionCard3 from "../components/QuestionCard3";
import QuestionCard4 from "../components/QuestionCard4";
import SelectorCard from "../components/SelectorCard";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepFour from "../components/StepFour";

const arrayList = [{ lavel: 1, label: "size"}, { lavel: 2, label: "Experience" }, { lavel: 3, label: "Terrain"},
{ lavel: 4, label: "Crops"}, { lavel: 5, label: "Finish"}]

const ProductSelector = () => {
    const PATH_NAME = window.location.pathname;
    let steps;
    let stepQuestion;
    if(PATH_NAME=="/step1") {
        steps = <SelectorCard />;
        stepQuestion = <QuestionCard />;
    } else if(PATH_NAME=="/step2") {
        steps = <StepTwo/>
        stepQuestion = <QuestionCard2 />;
    }else if(PATH_NAME=="/step3") {
        steps = <StepThree/>
        stepQuestion = <QuestionCard3 />;
    }else if(PATH_NAME=="/step4") {
        steps = <StepFour/>
        stepQuestion = <QuestionCard4 />;
    }
    let current = 0;
    return (
        <div className="p-survey">
            <ul className="progress">
                {arrayList.map((data, index) => <Step level={data.lavel} label={data.label} current={index} />)}
            </ul>
            <div className="p-survey-container">
                {stepQuestion}
                <div className="survey">
                    {steps}
                </div>
            </div>
        </div>
    );
}
export default ProductSelector;