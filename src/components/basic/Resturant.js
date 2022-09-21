import React from 'react';
import { useState, useEffect } from 'react';
import Item from './Item';
import Menu from './Menu';
import MenuItems from './menuApi';
const Resturant = () => {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => setMenuItems(MenuItems));

    return (
        <div className="my-12 max-w-screen-xl mx-auto px-6">
            <Menu />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {MenuItems.map((item, index) =>
                    <Item key={item.id} details={item} />
                )}

            </div>
        </div>

    );
}

export default Resturant;