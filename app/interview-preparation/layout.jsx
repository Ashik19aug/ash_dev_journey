import React from 'react';

const InterviewPreparationLayout = ({children}) => {
    return (
        <div>
            <div className="flex justify-center bg-gray-400 mx-auto rounded mb-4">
                <h4>Main topics</h4>
            </div>
            <div className="flex justify-center bg-gray-400 mx-auto rounded">
                <h4>Select interview questions category</h4>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default InterviewPreparationLayout;