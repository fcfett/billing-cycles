import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import If from '../operator/if'
import { selectTab } from './tabActions'

class TabHeader extends Component {
    render(){
        const { selectTab, target, label, icon } = this.props
        const isSelected = target === this.props.tab.selected
        const isVisible = this.props.tab.visible[target]
        
        return (
            <If test={isVisible}>
                <li className={ isSelected ? 'active' : '' }>
                    <a href="javascript:false;" data-toggle="tab" data-target={target} onClick={() => selectTab(target)}>
                        <i className={`fa fa-${icon}`}></i>
                        &nbsp;
                        <span>{label}</span>
                    </a>
                </li>
            </If>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)