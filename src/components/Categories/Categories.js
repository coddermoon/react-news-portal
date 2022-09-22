import React from 'react';

const Categories = (props) => {
    const {category_name}=props.category

    
    return (
       
           <span className='font-medium text-gray-700 p-2 hover:text-primary hover:bg-[#EEEFFF] cursor-pointer'>{category_name}</span> 
       
    );
};

export default Categories;