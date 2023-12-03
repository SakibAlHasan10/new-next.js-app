import React from 'react';

const DynamicPage = ({params, searchParams}) => {
    console.log(searchParams)
    return (
        <div>
            <h1>This is dynamic page:{params.id} </h1>
            <h1>This is dynamic page:{searchParams.category}{searchParams.price} </h1>
        </div>
    );
};

export default DynamicPage;