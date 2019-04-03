import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import Footer from '../common/template/footer'
import SideBar from '../common/template/sidebar'
import Router from './router'

export default props => (
    <div className="wrapper">
        <Header/>
        <SideBar/>
        <Router/>
        <Footer/>
    </div>
)