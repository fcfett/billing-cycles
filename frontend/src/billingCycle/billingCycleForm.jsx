import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from '../billingCycle/billingCycleActions'

import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'

class BillingCycleForm extends Component {
    render(){
        const { handleSubmit, readOnly, credits, debts } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} readOnly={readOnly}
                        type="text" label="Nome" placeholder="Informe o nome" width="12 4"/>
                    <Field name="month" component={LabelAndInput} readOnly={readOnly}
                        type="number" label="Mês" placeholder="Informe o mês" width="12 4"/>
                    <Field name="year" component={LabelAndInput} readOnly={readOnly}
                        type="number" label="Ano" placeholder="Informe o ano" width="12 4"/>
                    <ItemList width="12 6" readOnly={readOnly}
                        list={credits} field="credits" title="Créditos"/>
                    <ItemList width="12 6" readOnly={readOnly}
                        list={debts} field="debts" title="Débitos" showStatus={true}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)