import React from 'react'
import Col from '../layout/col'

export default props => (
    <Col width={props.cols}>
        <div className={`small-box bg-${props.color}`}>
            <div className="icon">
                <i className={`fa fa-${props.icon}`}></i>
            </div>
            <div className="inner">
                <h3>{props.value}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    </Col>
)