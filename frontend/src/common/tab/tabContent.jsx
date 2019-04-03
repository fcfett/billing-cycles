import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

import If from '../operator/if'
//import { selectTab } from './tabActions'

class TabContent extends Component {
    render(){
        const { id } = this.props
        const isSelected = id === this.props.tab.selected
        const isVisible = this.props.tab.visible[id]

        return (
            <If test={isVisible}>
                <div id={id} className={`tab-pane ${ isSelected ? 'active' : '' }`}>
                    {this.props.children}
                </div>
            </If>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })
//const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)

export default connect(mapStateToProps)(TabContent)