import Home from './views/public/Home.svelte'
import WorkMenuView from './views/public/WorkMenuView.svelte'
import WorkMenuAdmin from './views/admin/WorkMenuAdminView.svelte'


const routes = [
    { name: '/', component: Home },
    { name: '/work-menu', component: WorkMenuView },
    { name: '/admin/manage-menu', component: WorkMenuAdmin }
]

export { routes }