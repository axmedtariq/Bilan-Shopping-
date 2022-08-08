import React from 'react';
import  Menuitems from  '../menu-items/menu-item.component';
import './directory.styles.scss';
class Directory extends React.Component {
    constructor() {
        super();


        this.state = {
            sections:[{
            title: 'Hats',
            imageurl: 'https://www.wholesalehats.com/uploads/images/43516_large.jpg',
            id:1
        },
        {
            title: 'JACKETS',
            imageurl: 'https://pyxis.nymag.com/v1/imgs/e43/903/437b0ed73cb434536152e90a7a3a51442a-10-jackets.2x.rsocial.w600.jpg',
            id:2
        },
        {
            title: 'SNEAKERS ',
            imageurl: 'https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-4187.jpg',
            id:3
        },
        {
            title: 'WOMEN',
            imageurl: 'https://image.made-in-china.com/202f0j00mZylwDLdyGpP/Wholesale-Hijab-Women-Dress-Muslim-Robe-Abaya-Dresses-Open-Modest-Dubai-Robes-Front-Muslim-Abayas-Islamic-Clothes.jpg',
            size: 'large',
            id:4
        },
        {
            title: 'MENS',
            imageurl: 'https://www.suitsexpert.com/wp-content/uploads/2020/02/mens-dress-code-types-guide-scaled.jpg',
            size:'large',
            id:5
        }
    ]
}
    }
    render() {
        return (
            <div className='Directory-menu'>
                {
                    this.state.sections.map(({title, imageurl, id, size }) => (
                        <Menuitems key={id} title={title} imageurl={imageurl} size={size} />
                    )
                    )
        
                }
            </div>
        );
        
    }
}

export default Directory;