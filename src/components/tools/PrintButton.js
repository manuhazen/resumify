import React from 'react';

export default PrintButton = () => {
    return (
        <div className="resumify-print">
            <label>Print Your CV</label>
            <button onClick={ () =>  window.print() }>Print</button>
        </div>
    );
}