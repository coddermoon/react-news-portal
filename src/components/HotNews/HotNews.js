import React from 'react';
import LeatestNews from '../LeatestNews/LeatestNews';
import Tranding from '../Tranding/Tranding';

const HotNews = () => {
    return (
        <div className='container mx-auto'>
            <div className="content grid grid-cols-4">
                <div className="left col-span-3 ">
                <h1 className='font-bold text-5xl'>Latest News</h1>
<div className='grid grid-cols-2'>

<LeatestNews></LeatestNews>
<LeatestNews></LeatestNews>
<LeatestNews></LeatestNews>
<LeatestNews></LeatestNews>
</div>


                </div>
                <div className="right col-span-1"> 
                <Tranding></Tranding>
                </div>
            </div>
        </div>
    );
};

export default HotNews;