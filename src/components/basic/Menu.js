import React from 'react';
const Menu = () => {
    return (
        <div className="flex items-center justify-center space-x-6">
        <p className="active_menu_tab poppins bg-primary">Breakfast</p>
        <p className="menu_tab poppins">Lunch</p>
        <p className="menu_tab poppins">Dinner</p>
    </div>
    );
}

export default Menu;