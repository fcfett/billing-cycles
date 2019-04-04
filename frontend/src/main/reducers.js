import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import TabReducer from '../common/tab/tabsReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    billingCycle: BillingCycleReducer,
    tab: TabReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer