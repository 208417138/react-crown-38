import React, { useState } from 'react';
import './Directory_38.scss';
import MenuItem_38 from './MenuItem_38';
import items from './menu-items-data_38';
function Directory_38() {
    const [menuItems, setMenuItems] = useState(items);
    return (
        <div>
            <div className="directory-menu">
                {menuItems.map(item => {
                    const { id, name, remoteUrl, size } = item;
                    return (
                        <MenuItem_38
                            id={id}
                            name={name}
                            remoteUrl={remoteUrl}
                            size={size}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Directory_38
