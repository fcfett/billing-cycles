import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTab, showTabs } from '../common/tab/tabActions'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import Row from '../common/layout/row';
import Col from '../common/layout/col';

import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabContent from '../common/tab/tabContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'

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
                                    <TabHeader target="tabDelete" label="Excluir" icon="trash-o"/>
                                </TabsHeader>
                                <TabsContent>
                                    <TabContent id="tabList">
                                        <h1>LIST</h1>
                                    </TabContent>
                                    <TabContent id="tabCreate">
                                        <h1>CREATE</h1>
                                    </TabContent>
                                    <TabContent id="tabUpdate">
                                        <h1>UPDATE</h1>
                                    </TabContent>
                                    <TabContent id="tabDelete">
                                        <h1>DELETE</h1>
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

//const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycles)