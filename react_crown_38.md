## 1

- chrome 截圖
  ![](https://i.imgur.com/YfS4YVr.jpg)
- 目錄結構及 App_xx 部分內容截圖 (以學號後 2 碼來展開 category 內容，其他收起)
  ![](https://i.imgur.com/ThNGSEO.png)

- App_xx.js code (程式碼，非圖片 )

```
import './App_38.scss';

function App_38() {
  return (
    <div className="App">
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-item">
            <img className="background-image" src="https://i.ibb.co/cvpntL1/hats.png" alt="" />
            <a href="./hats.html" className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="menu-item">
            <img className="background-image" src="https://i.ibb.co/px2tCc3/jackets.png" alt="" />
            <a href="./jackets.html" className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="menu-item">
            <img className="background-image" src="https://i.ibb.co/0jqHpnp/sneakers.png" alt="" />
            <a href="./sneakers.html" className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="large menu-item">
            <img className="background-image" src="https://i.ibb.co/GCCdy8t/womens.png" alt="" />
            <a href="./womens.html" className="content">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="large menu-item">
            <img className="background-image" src="https://i.ibb.co/R70vBrQ/men.png" alt="" />
            <a href="./mens.html" className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App_38;
```

## 2

- Chrome 截圖
  ![](https://i.imgur.com/ziHfFno.jpg)
- 目錄結構，要含所有用到的 components
  ![](https://i.imgur.com/3HHPqu2.png)
- Homepage_xx.js code (程式碼，非圖片 )

```
import Directory_38 from "../components/Directory_38";
function Homepage_38() {
    return (
        <div>
            <Directory_38 />
        </div>
    )
}

export default Homepage_38

```

- Directory_xx.js code

```
import './Directory_38.scss';
import MenuItem_38 from './MenuItem_38';
function Directory_38() {
    return (
        <div>
            <div className="directory-menu">
                <MenuItem_38
                    name='HATS'
                    remoteUrl='https://i.ibb.co/cvpntL1/hats.png'
                    size=''
                />
                <MenuItem_38
                    name='JACKETS'
                    remoteUrl='https://i.ibb.co/px2tCc3/jackets.png'
                    size=''
                />
                <MenuItem_38
                    name='SNEAKERS'
                    remoteUrl='https://i.ibb.co/0jqHpnp/sneakers.png'
                    size=''
                />
                <MenuItem_38
                    name='WOMENS'
                    remoteUrl='https://i.ibb.co/GCCdy8t/womens.png'
                    size='large'
                />
                <MenuItem_38
                    name='MENS'
                    remoteUrl='https://i.ibb.co/R70vBrQ/men.png'
                    size='large'
                />
            </div>
        </div>
    )
}

export default Directory_38

```

- MenuItem_xx.js code

```
import './MenuItem_38.scss';

function MenuItem_38({ name, remoteUrl, size }) {
    return (
        <div className={`${size} menu-item`} >
            <img className="background-image" src={remoteUrl} alt="" />
            <a href="./hats.html" className="content">
                <h1 className="title">{name}</h1>
                <span className="subtitle">SHOP NOW</span>
            </a>
        </div>
    )
}

export default MenuItem_38;

```

## 3

- Chrome 截圖
  ![](https://i.imgur.com/MOoIatN.jpg)
- JSON 陣列 (程式碼，非圖片 )

```
const items = [
    {
        id: 1,
        name: 'HATS',
        remoteUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        size: ''
    },
    {
        id: 2,
        name: 'JACKETS',
        remoteUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        size: ''
    },
    {
        id: 3,
        name: 'SNEAKERS',
        remoteUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        size: ''
    },
    {
        id: 4,
        name: 'WOMENS',
        remoteUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large'
    },
    {
        id: 5,
        name: 'MENS',
        remoteUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large'
    }
]

export default items;
```

- Directory_xx.js code (程式碼，非圖片 )

```
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

```

## 4
