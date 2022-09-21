import React, { useEffect, useState } from 'react';
import Categories from '../../Categories/Categories';


const NavSec = () => {

  const [categories,setCategories]= useState([])

    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/news/categories`)
        .then(res => res.json())
        .then(data=> setCategories(data.data.news_category ) )
    },[])

    return (
        <div className='categotyNav flex justify-around items-center py-5'>
           
          
           {
            categories.map(category=> 
                <Categories category={category

}></Categories>)
          
           }
        </div>
    );
};

export default NavSec;