import React from 'react';

import './item-list.css';

const ItemList = () => {
    return (
        <div className="item-list section">
            <ul className="list-group">
                <li className="list-group-item">Curt</li>
                <li className="list-group-item">Landen</li>
                <li className="list-group-item">Stephen</li>
            </ul>
        </div>
    );
}

export default ItemList;