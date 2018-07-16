import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend/recommend.vue'
import Singer from '@/components/singer/singer'
import SingerDetail from '@/components/singer-detail/singer-detail.vue'
import Rank from '@/components/rank/rank'
import Search from '@/components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})
