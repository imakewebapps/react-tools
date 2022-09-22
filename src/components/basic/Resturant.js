import React from 'react';
import { useState, useEffect } from 'react';
import Item from './Item';
import Menu from './Menu';
import itemsFromApi from './menuApi';


const Resturant = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [menuCategories, setMenuCategories] = useState([]);
    const menu_categories = [...new Set(itemsFromApi.map((val)=>{
            return val.category;
        })), "All"];


    useEffect(() => {
        setMenuItems(itemsFromApi);
        setMenuCategories(menu_categories);
    }
    , []);



const filterItem  = (category) =>{
        const updateMenu = (category === "All") ? itemsFromApi : itemsFromApi.filter((val)=> val.category === category );
        setMenuItems(updateMenu);
}

    return (
        <div className="my-12 max-w-screen-xl mx-auto px-6">
            <Menu filterItem={filterItem} menu={menuCategories} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {menuItems.map((item) =>
                    <Item key={item.id} details={item} />
                )}

            </div>
        </div>

    );
}

export default Resturant;