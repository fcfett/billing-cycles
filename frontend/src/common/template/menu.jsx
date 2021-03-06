import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className="sidebar-menu tree" data-widget="tree">
        <MenuItem path="#/" label="Dashboard" icon="dashboard"/>
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#/billingCycles" label="Ciclos de Pagamento" icon="usd"/>
        </MenuTree>
    </ul>
)