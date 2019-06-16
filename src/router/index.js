import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {title: 'Dashboard', icon: 'dashboard'}
    }]
  },

  {
    path: '/accountManage',
    name: '账号管理',
    meta: {title: '账号管理', icon: 'example'},
    component: Layout,
    redirect: '/accountManage/accountList',
    children: [
      {
        path: 'accountList',
        name: '账号列表',
        meta: {title: '账号列表'},
        component: () => import('@/views/accountManage/accountList/accountList')
      },
      {
        path: 'permissonRoles',
        name: '权限角色管理',
        meta: {title: '权限角色管理'},
        component: () => import('@/views/accountManage/permissonRoles/permissionRoles')
      },
      {
        path: 'orgStructure',
        name: '组织架构管理',
        meta: {title: '组织架构管理'},
        component: () => import('@/views/accountManage/orgStructure/orgStructure')
      }
    ]
  },
  {
    path: '/userManage',
    name: '用户管理',
    meta: {title: '用户管理', icon: 'user'},
    component: Layout,
    redirect: '/userManage/userList',
    children: [
      {
        path: 'userList',
        name: '用户列表',
        meta: {title: '用户列表'},
        component: () => import('@/views/userManage/userList')
      },
      {
        path: 'userDetail',
        name: '用户详情',
        meta: {title: '用户详情'},
        hidden: true,
        component: () => import('@/views/userManage/userDetail')
      }
    ]
  },

  {
    path: '/quesPhoManage',
    name: '问题/随手拍管理',
    meta: {title: '用户管理', icon: 'user'},
    component: Layout,
    redirect: '/quesPhoManage/question',
    children: [
      {
        path: 'question',
        name: '问题列表',
        meta: {title: '问题列表'},
        component: () => import('@/views/quesPhoManage/question/questionList')
      },
      {
        path: 'quesPho',
        name: '随手拍列表',
        meta: {title: '随手拍列表'},
        component: () => import('@/views/quesPhoManage/quesPho/quesPhoList')
      },
      {
        path: 'workbench',
        name: '处理工作台',
        meta: {title: '处理工作台'},
        component: () => import('@/views/quesPhoManage/workbench/workbench')
      },
      {
        path: 'configureWork',
        name: '配置工单',
        meta: {title: '配置工单'},
        hidden: true,
        component: () => import('@/views/quesPhoManage/workbench/configureWork')
      }
    ]
  },


  {
    path: '/workManage',
    name: '工单管理',
    meta: {title: '工单管理', icon: 'user'},
    component: Layout,
    redirect: '/workManage/workList',
    children: [
      {
        path: 'question',
        name: '工单列表',
        meta: {title: '工单列表'},
        component: () => import('@/views/workManage/workList')
      },
      {
        path: 'quesPho',
        name: '工单任务列表',
        meta: {title: '工单任务列表'},
        component: () => import('@/views/workManage/workTaskList')
      }
    ]
  },
  {
    path: '/pubWelfareManage',
    component: Layout,
    redirect: '/pubWelfareManage/menu1',
    name: '公益管理',
    meta: {
      title: '公益管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        name: '公益/活动招募列表',
        meta: {title: '活动招募列表', icon: 'nested'},
        component: () => import('@/views/pubWelfareManage/index'),
        children: [{
          path: 'pubRecruitList',
          name: '公益招募管理列表',
          meta: {title: '公益招募管理列表'},
          component: () => import('@/views/pubWelfareManage/pubActRecruitList/pubRecruitList'),
        },
          {
            path: 'actRecruitList',
            name: '活动招募管理列表',
            meta: {title: '活动招募管理列表'},
            component: () => import('@/views/pubWelfareManage/pubActRecruitList/actRecruitList'),
          },
          {
            path: 'riverManageList',
            name: '巡河招募管理列表',
            meta: {title: '巡河招募管理列表'},
            component: () => import('@/views/pubWelfareManage/pubActRecruitList/riverManageList'),
          }
        ]
      },
      {
        path: 'menu2',
        name: '公益/活动单场列表',
        meta: {title: '公益/活动单场列表', icon: 'nested'},
        component: () => import('@/views/pubWelfareManage/index'),
        children: [{
          path: 'pubSingleList',
          name: '公益单场列表',
          meta: {title: '公益单场列表'},
          component: () => import('@/views/pubWelfareManage/pubActSingleList/pubSingleList'),
        },
          {
            path: 'actSingleList',
            name: '活动单场列表',
            meta: {title: '公益单场列表'},
            component: () => import('@/views/pubWelfareManage/pubActSingleList/actSingleList'),
          }
        ]
      },
      {
        path: 'menu3',
        name: '公益/活动报名列表',
        meta: {title: '公益/活动报名列表', icon: 'nested'},
        component: () => import('@/views/pubWelfareManage/index'),
        children: [{
          path: 'pubActSignUpManageList',
          name: '公益单场列表',
          meta: {title: '公益单场列表'},
          component: () => import('@/views/pubWelfareManage/pubActSignUpList/pubActSignUpManageList'),
        },
          {
            path: 'riverGrabList',
            name: '巡河抢单列表',
            meta: {title: '公益单场列表'},
            component: () => import('@/views/pubWelfareManage/pubActSignUpList/riverGrabList'),
          }
        ]
      },
      {
        path: 'menu4',
        name: '公益/活动机构列表',
        meta: {title: '公益/活动机构列表', icon: 'nested'},
        component: () => import('@/views/pubWelfareManage/index'),
        children: [{
          path: 'pubActOrgList',
          name: '公益/活动机构列表',
          meta: {title: '公益/活动机构列表'},
          component: () => import('@/views/pubWelfareManage/pubActOrgList/pubActOrgList'),
        }]
      },
      {
        path: 'menu5',
        name: '公益/活动SHOW列表',
        meta: {title: '公益/活动SHOW列表', icon: 'nested'},
        component: () => import('@/views/pubWelfareManage/index'),
        children: [{
          path: 'pubActShowList',
          name: '益/活动SHOW列表',
          meta: {title: '公益/活动机构列表'},
          component: () => import('@/views/pubWelfareManage/pubActShowList/pubActShowList'),
        }]
      }
    ]
  },
  {
    path: '/integralManage',
    name: '积分管理',
    meta: {title: '积分管理', icon: 'user'},
    component: Layout,
    redirect: '/userManage/integralList',
    children: [
      {
        path: 'integralList',
        name: '积分管理',
        meta: {title: '积分管理'},
        component: () => import('@/views/integralManage/integralList')
      }
    ]
  },

  {
    path: '/basicManage',
    name: '基本管理',
    meta: {title: '基本管理', icon: 'user'},
    component: Layout,
    redirect: '/basicManage/advertisementList',
    children: [
      {
        path: 'advertisementList',
        name: '广告列表',
        meta: {title: '广告列表'},
        component: () => import('@/views/basicManage/advertisementList')
      },
      {
        path: 'classificationList',
        name: '分类列表',
        meta: {title: '分类列表'},
        component: () => import('@/views/basicManage/classificationList')
      },
      {
        path: 'prescriptionSet',
        name: '时效设置',
        meta: {title: '时效设置'},
        component: () => import('@/views/basicManage/prescriptionSet')
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: {title: 'External Link', icon: 'link'}
      }
    ]
  },

  // 404 page must be placed at the end !!!
  {path: '*', redirect: '/404', hidden: true}
]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
