import React from 'react'
import Col from '../layout/col'

export default props => (
    <Col width={props.width}>
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} className="form-control" {...props.input}
                placeholder={props.placeholder} readOnly={props.readOnly}/>
        </div>
    </Col>
)