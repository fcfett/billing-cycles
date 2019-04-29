import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Field, arrayInsert, arrayRemove } from 'redux-form'

import Col from '../common/layout/col'
import Input from '../common/form/input'
import If from '../common/operator/if'

class ItemList extends Component {
    addToList(index, item = {}) {
        if(!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }

    removeFromList(index) {
        const { readOnly, list } = this.props
        if(!readOnly && list.length > 1) {
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }

    renderRows() {
        const field = this.props.field
        const list = this.props.list || []

        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field name={`${field}[${index}].name`} component={Input}
                        placeholder="Informe o nome" readOnly={this.props.readOnly}/>
                </td>
                <td>
                    <Field name={`${field}[${index}].value`} component={Input}
                        placeholder="Informe o valor" readOnly={this.props.readOnly}/>
                </td>
                <If test={this.props.showStatus}>
                    <td>
                        <Field name={`${field}[${index}].status`} component={Input}
                            placeholder="Informe o status" readOnly={this.props.readOnly}/>
                    </td>
                </If>
                <td>
                    <button type="button" className="btn btn-success" onClick={ () => this.addToList(index + 1) }>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type="button" className="btn btn-warning" onClick={ () => this.addToList(index + 1, item) }>
                        <i className="fa fa-clone"></i>
                    </button>
                    <button type="button" className="btn btn-danger" onClick={ () => this.removeFromList(index) }>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }
  
    render() {
        return (
            <Col width={this.props.width}>
                <fieldset>
                    <legend>{this.props.title}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Col>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)