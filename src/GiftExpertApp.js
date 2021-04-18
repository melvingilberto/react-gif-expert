import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

    const [categories, setCategory] = useState([
        'One Punch'
    ]);

    // const handleAdd = () => {
    //     setCategory( cats => ['HunerxHunter', ...cats ] );
    // }

    return (
        <div>
            <h2>GiftExpertApp</h2>
            <hr />

            <AddCategory setCategories = {setCategory}/>

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category = {category} 
                        />
                    ))
                }
            </ol>
        </div>
    )
}
