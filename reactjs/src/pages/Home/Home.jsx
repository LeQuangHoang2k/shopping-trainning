import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Body from '../../components/Body/Body';
// import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';


function Home(props) {
    return (
        <div>
            <Navbar/>  
            {/* <Breadcrumb />  */}
            <Body />
        </div>
    );
}

export default Home;