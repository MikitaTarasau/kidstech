import React from 'react';

import '../styles/menu.scss';

interface MenuProps {
    onMenuClick?: (childData:React.MouseEvent<HTMLLIElement>) => void;
}

export const Menu:React.FC<MenuProps> = ({onMenuClick}) => {
    const menuItems = ["Все темы", "Логика и мышление", "Загадки", "Головоломки", "Путешествия"];
    return (
        <div className="menu">
            <ul className="menu__wrap">
                {
                    menuItems.map((item, index) => {
                        const key: string = (index.toString() + Math.random.toString());
                        return (
                            <li className="menu__item" key={key} onClick={(event:React.MouseEvent<HTMLLIElement>) => onMenuClick && onMenuClick(event.target as any)}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}