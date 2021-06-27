import React from 'react';

const StepFour = () => {
    return (
        <div className="survey-container">
            
            <div className="survey-card">
                <label className="survey-card-label gfg-input input-radio">
                    <span className="survey-right">Kharif / Food Grains</span>
                    <input type="radio"  name="survey-step-1" />
                    <span className="checkmark"></span>
                </label>
                <div className="survey-dropdown">
                    <select>
                        <option>Rice</option>
                        <option>Wheat</option>
                    </select>
                </div>
            </div>

            <div className="survey-card active">
                <label className="survey-card-label gfg-input input-radio">
                    <span className="survey-right">Cash Crops / Non - Food Crops</span>
                    <input type="radio" name="survey-step-1" checked/>
                    <span className="checkmark"></span>
                </label>
                <div className="survey-dropdown">
                    <select>
                        <option>Sugarcane</option>
                        <option>Sugarcane</option>
                    </select>
                </div>
            </div>

        </div>
    );
}
export default StepFour;