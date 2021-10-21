import React, { useState, useEffect } from 'react';
import './Directory_38.scss';
import MenuItem_38 from './MenuItem_38';
import axios from 'axios';
// import items from './menu-items-data_38';
function Directory2_38() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            const HEROKU_URL = 'https://crown1101.herokuapp.com/api_xx/category_xx'
            const { data } = await axios.get(HEROKU_URL)
            console.log('./api/category_xx', data)
            setMenuItems(data)
        }
        fetchMenuItems()
    }, [])

    return (
        <div>
            <div className="directory-menu">
                {menuItems.map(item => {
                    const { id, name, remote_url, size } = item;
                    return (
                        <MenuItem_38
                            id={id}
                            name={name}
                            remoteUrl={remote_url}
                            size={size}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Directory2_38
