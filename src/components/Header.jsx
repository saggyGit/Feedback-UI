import React from 'react';

const Header = () => {
   

    const headerStyle={

        backgroundColor:'black',
        color:'pink'
    }

    return (
        <>

        <header style={headerStyle}>
        <div className="container">
         <h1>Feedback UI</h1>
        </div> 
        </header>           
        </>
    );
};

export default Header;