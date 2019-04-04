import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import Footer from '../common/template/footer'
import SideBar from '../common/template/sidebar'
import Router from './router'
import Messages from '../common/messages/messages'

export default props => (
    <div className="wrapper">
        <Header/>
        <SideBar/>
        <Router/>
        <Messages/>
        <Footer/>
    </div>
)