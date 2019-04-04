import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTab, showTabs } from '../common/tab/tabActions'
import { create, update, remove } from '../billingCycle/billingCycleActions'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import Row from '../common/layout/row';
import Col from '../common/layout/col';

import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabContent from '../common/tab/tabContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'

import List from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycles extends Component {
    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render(){
        return (
            <main className="content-wrapper">
                <ContentHeader title="Billing Cycles" small="Versão 1.0"/>
                <Content>
                    <Row>
                        <Col>
                            <Tabs>
                                <TabsHeader>
                                    <TabHeader target="tabList" label="Listar" icon="bars"/>
                                    <TabHeader target="tabCreate" label="Incluir" icon="plus"/>
                                    <TabHeader target="tabUpdate" label="Alterar" icon="pencil"/>
                                    <TabHeader target="tabRemove" label="Excluir" icon="trash-o"/>
                                </TabsHeader>
                                <TabsContent>
                                    <TabContent id="tabList">
                                        <List/>
                                    </TabContent>
                                    <TabContent id="tabCreate">
                                        <Form onSubmit={this.props.create} submitLabel="Incluir" submitClass="primary"/>
                                    </TabContent>
                                    <TabContent id="tabUpdate">
                                        <Form onSubmit={this.props.update} submitLabel="Alterar" submitClass="info"/>
                                    </TabContent>
                                    <TabContent id="tabRemove">
                                        <Form onSubmit={this.props.remove} readOnly={true} submitLabel="Excluir" submitClass="danger"/>
                                    </TabContent>
                                </TabsContent>
                            </Tabs>
                        </Col>
                    </Row>
                </Content>
            </main>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, create, update, remove }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycles)