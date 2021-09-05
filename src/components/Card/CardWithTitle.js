import React from 'react';
import './CardWithTitle.scss'

function CardWithTitle({title, children}) {
    return (
        <React.Fragment>
            <div className={"card-with-title__title"}>
                {title}
            </div>
            {children}
        </React.Fragment>

    );
}

export default CardWithTitle;