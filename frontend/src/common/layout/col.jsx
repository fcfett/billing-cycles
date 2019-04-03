import React, { Component } from 'react'

export default class Col extends Component {
    toCssClasses(width) {
        const cols = width ? width.split(' ') : []
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`

        return classes
    }
    
    render() {
        const width = this.toCssClasses(this.props.width || '12')
        return (
            <div className={width}>
                {this.props.children}
            </div>
        )
    }
}