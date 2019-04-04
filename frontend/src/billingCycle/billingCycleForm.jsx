import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from '../billingCycle/billingCycleActions'

import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
    render(){
        const { handleSubmit, readOnly } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={labelAndInput} readOnly={readOnly}
                        type="text" label="Nome" placeholder="Informe o nome" width="12 4"/>
                    <Field name="month" component={labelAndInput} readOnly={readOnly}
                        type="number" label="Mês" placeholder="Informe o mês" width="12 4"/>
                    <Field name="year" component={labelAndInput} readOnly={readOnly}
                        type="number" label="Ano" placeholder="Informe o ano" width="12 4"/>
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
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)