import React, { Component } from 'react'
import axios from 'axios'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row';

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { credit: 0, debt: 0 }
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/billing-cycles/summary`)
            .then( result => this.setState(result.data) )
    }

    formatValue(value, currency = 'R$') {
        //value = value.toFixed(2)
        let formatedValue = value.toString().replace(/\.(.*?)$/,',$1').replace(/(\d)(?=(\d{3})+\b)/g,'$1.')
        return `${currency} ${formatedValue}`
    }

    render() {
        const { credit, debt } = this.state
        return(
            <main className="content-wrapper">
                <ContentHeader title="Dashboard" small="Versão 2.0"/>
                <Content>
                    <Row>
                        <ValueBox value={this.formatValue(credit)} text="Total de Créditos" cols="12 4" color="green" icon="bank"/>
                        <ValueBox value={this.formatValue(debt)} text="Total de Débitos" cols="12 4" color="red" icon="credit-card"/>
                        <ValueBox value={this.formatValue(credit-debt)} text="Valor Consolidado" cols="12 4" color="blue" icon="money"/>
                    </Row>
                </Content>
            </main>
        )
    }
}