import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import BlockPage from '@/pages/BlockPage';
import Main from '@/pages/Main';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Main
    },
    {
        path: '/block/:blockNumberOrHash',
        name: 'blockPge',
        component: BlockPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
