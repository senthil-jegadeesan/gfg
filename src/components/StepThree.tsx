import React from 'react';

const StepThree = () => {
    return (
        <div className="survey-container">
            <div className="survey-state-container">
                <select name="select_state">
                    <option value="TN">Tamilnadu</option>
                    <option value="KA">Karnataka</option>
                </select>
            </div>

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

            <footer className="footer subfooter">
                <a href="/" className="btn btn-secondary left column2">Back</a>
                <a href="/step4" className="btn btn-primary right column2">Next</a>
            </footer>
        </div>
    );
}
export default StepThree;