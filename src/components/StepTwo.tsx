import React from 'react';

const StepTwo = () => {
    return (
        <div className="survey-container">
            <div className="survey-card">
                <label className="survey-card-label gfg-input input-radio">
                    <span className="survey-right">Less Than One Year</span>
                    <input type="radio"  name="survey-step-1" />
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="survey-card active">
                <label className="survey-card-label gfg-input input-radio">
                    <span className="survey-left">1 - 5 Year</span>
                    <span className="survey-right">Beginner</span>
                    <input type="radio" name="survey-step-1" checked/>
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="survey-card">
                <label className="survey-card-label gfg-input input-radio">
                    <span className="survey-left">5 - 10 </span>
                    <span className="survey-right">Intermediate</span>
                    <input type="radio"  name="survey-step-1" />
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="survey-card">
                <label className="survey-card-label gfg-input input-radio">
                    <span className="survey-right">10 Years Expert</span>
                    <input type="radio"  name="survey-step-1" />
                    <span className="checkmark"></span>
                </label>
            </div>

        </div>
    );
}
export default StepTwo;