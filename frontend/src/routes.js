import Home from './views/public/Home.svelte'
import WorkMenuView from './views/public/WorkMenu.svelte'
import WorkMenuAdmin from './views/admin/WorkAdminView.svelte'
import AdminLayout from './views/layout/admin_layout.svelte'
import PublicLayout from './views/layout/public_layout.svelte'
import Features from './views/public/Features.svelte'
import Blogs from './views/public/Blogs.svelte'


function userIsAdmin() {
    //check if user is admin
    return true
}

const routes = [{
        name: '/',
        component: Home,
        layout: PublicLayout,

    },
    { name: 'features', component: Features, layout: PublicLayout },
    { name: 'blogs', component: Blogs, layout: PublicLayout },
    { name: '/work-menu', component: WorkMenuView },
    {
        name: '/admin',
        component: AdminLayout,
        onlyIf: { guard: userIsAdmin, redirect: '/' },
        nestedRoutes: [
            { name: 'index', component: WorkMenuAdmin },
        ]
    }
]

export { routes }