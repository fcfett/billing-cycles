import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {
    credits: [{}],
    debts: [{}]
}

export function getList() {
    const request = axios.get(`${BASE_URL}/billing-cycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

function submit(values, method) {
    return dispatch => {
        const id = values._id || ''
        axios[method](`${BASE_URL}/billing-cycles/${id}`, values)
            .then(result => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => { e.response.data.errors.forEach(error => (toastr.error('Erro', error))) })
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

// Refatorar showTab
export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showRemove(billingCycle) {
    return [
        showTabs('tabRemove'),
        selectTab('tabRemove'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}