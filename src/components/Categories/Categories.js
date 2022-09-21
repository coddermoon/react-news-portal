import React from 'react';

const Categories = (props) => {
    const {category_name,category_id}=props.category

    
    return (
       
           <span className='font-medium text-gray-700 p-2 hover:text-primary hover:bg-smallBg cursor-pointer'>{category_name}</span> 
       
    );
};

export default Categories;