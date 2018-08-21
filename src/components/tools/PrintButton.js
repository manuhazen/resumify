import React from 'react';

const PrintButton = () => {
    return (
        <div className="resumify-print">
            <label>Print Your CV</label>
            <button onClick={ () =>  window.print() }>Print</button>
        </div>
    );
}

export default PrintButton;