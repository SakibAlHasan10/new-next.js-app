import React from 'react';

const DynamicPage = ({params, searchParams}) => {
    console.log(params)
    console.log(searchParams)
    return (
        <div>
            <h2>This is a Dynamic Page: {params.id}</h2>
            <h2>{searchParams.category} {searchParams.price}</h2>
        </div>
    );
};

export default DynamicPage;