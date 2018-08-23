import React from 'react';

const PrintButton = () => {
    return (
        <div className="resumify-print">
            <button className="button is-outlined is-fullwidth" onClick={ () =>  window.print() }>Print 🖨</button>
        </div>
    );
}

export default PrintButton;