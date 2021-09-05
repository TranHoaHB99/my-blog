import React from 'react';
import classNames from "classnames";
import './CardVertical.scss'

function CardVertical({srcImage, category, title, createdAt, createdBy, classes}) {
    return (
        <div className={classNames("card-vertical", classes)}>
            <img src={srcImage} alt="" className={"card-vertical__image"}/>

            <div className="card-vertical__text">
                <h5 className={"category"}>
                    {category}
                </h5>
                <h4 className={"title"}>{title}</h4>
                <div className="publish">
                    <span className={"created-date"}>{createdAt}</span>
                    <span>{'--'}</span>
                    <span className={"created-by"}>{createdBy}</span>
                </div>
            </div>
        </div>
    );
}

export default CardVertical;