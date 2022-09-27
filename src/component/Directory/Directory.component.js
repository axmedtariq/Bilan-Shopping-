import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../Redux/Directory/directory.selectors";
import  Menuitems from  '../menu-items/menu-item.component';
import './directory.styles.scss';
const  Directory = ({ sections }) => (

    <div className = 'Directory-menu'>
    {sections.map(({ id, ...otherSectionProps}) => (

        <Menuitems key={id} {...otherSectionProps}/>
        ))}
    </div>
    );
   
          


const mapStateToProps = createStructuredSelector ({

    sections: selectDirectorySections 
});

export default connect(mapStateToProps)(Directory);