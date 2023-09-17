import React from 'react';
import {Link} from 'react-router-dom';
import AppLogo from '../assets/icons/main_logo.jpeg';

/**
 * The home page
 * @returns 
 */
const Home = ()=>{
    return (
        <div className="w-full h-screen bg-gradient-to-r from-baby-blue/10 
        to-azure/10 grid content-center justify-items-center">

            <img className="sm:w-1/6 w-1/2 m-2" src={AppLogo} alt="main_logo" />

            <p className="w-4/5 m-3 font-bold text-3xl text-center">
                Survey Master
            </p>

            <p className="w-4/5 m-2 font-bold text-2xl text-center">
                SurveyEase is a powerful and user-friendly survey management system designed to streamline the entire survey lifecycle, from creation and distribution to analysis and reporting.
            </p>

            <div className='inline-flex flex-col sm:flex-row items-center'>
                <Link 
                    className="bg-baby-blue px-10 pt-3 pb-4 rounded-2xl m-5
                        hover:bg-azure transition-all font-bold text-xl text-white 
                        shadow-lg shadow-baby-blue/50 hover:shadow-azure/40" 
                    to="/surveys">
                    Browse surveys
                </Link>

                <Link 
                    className="bg-baby-blue px-10 pt-3 pb-4 rounded-2xl m-5
                        hover:bg-azure transition-all font-bold text-xl text-white 
                        shadow-lg shadow-baby-blue/50 hover:shadow-azure/40"
                    to="/newsurvey">
                    Create a survey
                </Link>
            </div>
        </div>
    );
}

export default Home;