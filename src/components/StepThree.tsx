import React from 'react';

const StepThree = () => {
    return (
        <div className="survey-container">
            <div className="survey-card">
                <label className="survey-card-label gfg-input input-radio">
                    <span className="survey-right">Plains</span>
                    <input type="radio"  name="survey-step-1" />
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="survey-card active">
                <label className="survey-card-label gfg-input input-radio">
                    <span className="survey-right">Hills</span>
                    <input type="radio" name="survey-step-1" checked/>
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="survey-card">
                <label className="survey-card-label gfg-input input-radio">
                    <span className="survey-right">Mountains</span>
                    <input type="radio"  name="survey-step-1" />
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="survey-card">
                <label className="survey-card-label gfg-input input-radio">
                    <span className="survey-right">Mixed</span>
                    <input type="radio"  name="survey-step-1" />
                    <span className="checkmark"></span>
                </label>
            </div>
        </div>
    );
}
export default StepThree;