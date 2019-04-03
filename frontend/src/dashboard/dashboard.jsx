import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSummary } from './dashboardActions'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row';

class Dashboard extends Component {
    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const { credit, debt } = this.props.summary
        return(
            <main className="content-wrapper">
                <ContentHeader title="Dashboard" small="Versão 1.0"/>
                <Content>
                    <Row>
                        <ValueBox value={`R$ ${credit}`} text="Total de Créditos" cols="12 4" color="green" icon="bank"/>
                        <ValueBox value={`R$ ${debt}`} text="Total de Débitos" cols="12 4" color="red" icon="credit-card"/>
                        <ValueBox value={`R$ ${credit-debt}`} text="Valor Consolidado" cols="12 4" color="blue" icon="money"/>
                    </Row>
                </Content>
            </main>
        )
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)