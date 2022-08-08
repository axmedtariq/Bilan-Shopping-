import React from 'react';
import './menu-items.styles.scss';

const MenuItem = ({title, imageurl, size}) => (
    <div style={{ backgroundImage: `url(${imageurl})`}} className={`${size} MenuItem`}>
      <div className='content'>
         <h1 className='title'>{title} </h1>
         <span className='subtitle'>SHOP NOW </span>

      </div>
     </div>
);
export default MenuItem;