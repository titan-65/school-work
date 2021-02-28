import Home from './views/public/Home.svelte'
import WorkMenuView from './views/public/WorkMenu.svelte'
import WorkMenuAdmin from './views/admin/WorkAdminView.svelte'


const routes = [
    { name: '/', component: Home },
    { name: '/work-menu', component: WorkMenuView },
    { name: '/admin/manage-menu', component: WorkMenuAdmin }
]

export { routes }