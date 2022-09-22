const Menu = ({ filterItem, menu }) => {
    return (
        <div className="flex items-center justify-center space-x-6">
            {
                menu.map((item, key) =>
                    <button key={key} className="poppins " onClick={() => filterItem(item)}>{item}</button>
                )
            }
        </div>
    );
}
export default Menu;