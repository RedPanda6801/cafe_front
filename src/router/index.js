import jwtDecode from 'jwt-decode'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/faq',
        component: () => import('../views/FQ.vue')
      },
      {
        path: '/convention',
        component: () => import('../views/convention.vue')
      },
      {
        path: '/introduce',
        component: () => import('../views/introduce.vue')
      },
      {
        path: '/main',
        component: () => import('../views/main'),
        children: [
          {
            path: '/main',
            component: () => import('../views/main/main'),
            meta: { header: false, noLogin: true }
          },
          {
            path: '/mypage',
            component: () => import('../views/main/mypage'),
            meta: { header: false, noLogin: true }
          },
          {
            path: '/Instructions',
            component: () => import('../views/main/Instructions'),
            meta: { header: false, noLogin: true }
          },
          // {
          //   path: '/main/FAQ',
          //   component: () => import('../views/main/FAQ'),
          //   meta: { header: false, noLogin: true }
          // },
          {
            path: '/main/addcafe',
            component: () => import('../views/main/addcafe'),
            meta: { header: false, noLogin: true }
          },
          {
            path: '/main/:id',
            component: () => import('../views/main/cafehome'),
            meta: { header: false, noLogin: true }
          },
          {
            path: '/main/:id/customer',
            component: () => import('../views/main/customerList'),
            meta: { header: false, noLogin: true }
          },
          {
            path: '/qna',
            component: () => import('../views/main/qna'),
            meta: { header: false }
          },
          {
            path: '/qna/write',
            component: () => import('../views/main/qnaWrite'),
            meta: { header: false, noLogin: true }
          },
          {
            path: '/qna/:id',
            component: () => import('../views/main/qnaDetail'),
            meta: { header: false, noLogin: true }
          }
        ]
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('../views/auth'),
    children: [
      {
        path: '/auth/login',
        component: () => import('../views/auth/login'),
        meta: { header: false }
        //meta: { header: false, noLogin: true }
      },
      {
        path: '/auth/join',
        component: () => import('../views/auth/emailAuth'),
        meta: { header: false }
      },
      // url 어떻게 처리할지 구상 후 수정 예정
      {
        path: '/auth/join/info',
        component: () => import('../views/auth/join'),
        meta: { header: false }
      },
      {
        path: '/auth/logout',
        component: () => import('../views/auth/logout'),
        meta: { header: false }
      },
      {
        path: '/auth/find',
        component: () => import('../views/auth/find'),
        meta: { header: false }
      }
    ]
  },
  {
    path: '/tablet',
    component: () => import('../views/device/tabletChoice'),
    meta: { header: false, noLogin: true }
    // children: [
    //   {
    //     path: '/tablet/:id',
    //     component: () => import('../views/device/tabletInput'),
    //     meta: { header: false }
    //   }
    // {
    //   path: '/tablet/:id/stamp',
    //   component: () => import('../views/device/tabletStamp'),
    //   meta: { header: false }
    // }
    // ]
  },
  {
    path: '/tablet/:id',
    component: () => import('../views/device/tabletInput'),
    meta: { header: false, noLogin: true }
    // children: [
    //   {
    //     path: '/:id',
    //     component: () => import('../views/device/tabletStamp'),
    //     meta: { header: false }
    //   }
    // ]
  },
  {
    path: '/tablet/:id/:id1',
    component: () => import('../views/device/tabletStamp'),
    meta: { header: false, noLogin: true }
  },
  // 라우터 고민해봐야 함
  {
    path: '/phone',
    component: () => import('../views/device/phoneChoice'),
    meta: { header: false, noLogin: true }
  },
  {
    path: '/phone/:id',
    component: () => import('../views/device/phoneControl'),
    meta: { header: false, noLogin: true }
  },
  // {
  //   path: '/tablet',
  //   component: () => import('../views/device/tabletInput'),
  //   meta: { header: false }
  // },
  // {
  //   path: '/tablet/stamp',
  //   component: () => import('../views/device/tabletStamp'),
  //   meta: { header: false }
  // },
  // {
  //   path: '/tablet/Choice',
  //   component: () => import('../views/device/tabletChoice'),
  //   meta: { header: false }
  // },
  // {
  //   path: '/qna',
  //   component: () => import('../views/qna'),
  //   children: [
  //     {
  //       path: '/qna',
  //       component: () => import('../views/qna/qna'),
  //       meta: { header: false }
  //     },
  //     {
  //       path: '/qna/write',
  //       component: () => import('../views/qna/qnaWrite'),
  //       meta: { header: false }
  //     }
  //   ]
  // },
  {
    path: '*',
    component: () => import('../components/NotFound.vue'),
    meta: { header: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  // console.log('router.beforeEach', to, from)

  const noLogin = to.meta.noLogin // 이동할 페이지에서 로그인 허용여부 확인

  if (noLogin !== true) {
    // 로그인이 필요없는 페이지는 그냥 이동
    next()
  } else {
    // 로그인이 필요한 페이지는 토큰 체크 후 통과 여부 결정

    // 1. localStorage에서 토큰 추출
    const token = window.localStorage.getItem('token')

    // TODO: 리다이렉트 페이지 처리(이동하려던 페이지로 이동시킬 수 있다.)

    try {
      const decodedToken = jwtDecode(token) // 토큰디코딩
      const today = new Date() // 오늘날짜
      const expDate = new Date(decodedToken.exp * 1000) // 토큰에서 만료일추출

      if (expDate && expDate >= today) {
        // 토큰이 유효한 경우

        // 1. tokenUser정보가 없어진 경우 다시 갱신한다.
        const tokenUser = store.getters['TokenUser']
        if (!tokenUser || !tokenUser.id > 0) {
          localStorage.setItem('authTokenUser', token)
        }

        // 처리를 다 했으면 가던길 가자
        next()
      } else {
        // 토큰이 만료된 경우
        next('/auth/login') // 로그인 페이지로 이동(여기에서 토큰을 삭제해준다.)
      }
    } catch (err) {
      // 토큰 추출이 실패한 경우에 대한 처리
      next('/auth/login') // 로그인 페이지로 이동
    }
  }
})

export default router
