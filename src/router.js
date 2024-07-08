import { createRouter, createWebHistory } from 'vue-router';
import AboutUsPage from './components/pages/AboutUsPage.vue'
import ContactPage from './components/pages/ContactPage.vue'
import HomePage from './components/pages/HomePage.vue'
import MenuPage from './components/pages/MenuPage.vue'
import NotFound from './components/pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
    { path: '/', component: HomePage },
    { path: '/AboutUs', component: AboutUsPage },
    { path: '/ContactUs', component: ContactPage},
    { path: '/Menu', component: MenuPage },
    { path: '/:notFound(.*)', component: NotFound },
    ]
  });
  
  export default router;
  