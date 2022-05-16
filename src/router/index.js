import { createRouter, createWebHashHistory } from 'vue-router'
import Footer from '../components/Footer.vue'
import Box from '../components/Box.vue'
import Main from '../components/Main.vue'
import NotFound from '../components/NotFound.vue'
import Practice from '../components/Practice.vue'
import Awwj from '../views/Awwj.vue'


const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Awwj },
  {
    path: '/api/',
    component: Box,
    children: [
      {
        path: 'awj',
        component: Main,
      },
    ]
  },

  // {
  //   path:'/shop',
  //   components:{
  //     default:ShopMain, //默认
  //     ShopTop:ShopTop, //默认
  //     ShopFooter:ShopFooter, //默认
  //   }
  // },
  {
    path: '/mall',
    redirect: (to) => { return { path: '/shop' } }
  },
  {
    path: "/:path(.*)",
    component: NotFound
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router
