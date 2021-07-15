import React from 'react';

const SelectorCard = () => {
    return (
        <div className="survey-container">
            <div className="survey-card">
                <label className="survey-card-label gfg-input input-radio">
                    <span className="survey-right">Less Than One Acre</span>
                    <input type="radio"  name="survey-step-1" />
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="survey-card active">
                <label className="survey-card-label gfg-input input-radio">
                    <span className="survey-left">1 - 5</span>
                    <span className="survey-right">Acre</span>
                    <input type="radio" name="survey-step-1" checked/>
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="survey-card">
                <label className="survey-card-label gfg-input input-radio">
                    <span className="survey-left">5 - 10</span>
                    <span className="survey-right">Acre</span>
                    <input type="radio"  name="survey-step-1" />
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="survey-card">
                <label className="survey-card-label gfg-input input-radio">
                    <span className="survey-left">10</span>
                    <span className="survey-right">Acre</span>
                    <input type="radio"  name="survey-step-1" />
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="survey-card">
                <label className="survey-card-label gfg-input input-radio">
                    <span className="survey-right">More than Ten Acre</span>
                    <input type="radio"  name="survey-step-1" />
                    <span className="checkmark"></span>
                </label>
            </div>
            <footer className="footer subfooter">
                <a href="/" className="btn btn-secondary left column2">Back</a>
                <a href="/step2" className="btn btn-primary right column2">Next</a>
            </footer>
        </div>
    );
}
export default SelectorCard;