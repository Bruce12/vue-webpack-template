import Vue from 'vue'{{#if_eq tslintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq tslintConfig "airbnb"}};{{/if_eq}}
import HelloWorld from '@/components/HelloWorld'{{#if_eq tslintConfig "airbnb"}};{{/if_eq}}

Vue.use(Router){{#if_eq tslintConfig "airbnb"}};{{/if_eq}}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld{{#if_eq tslintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq tslintConfig "airbnb"}},{{/if_eq}}
  ]{{#if_eq tslintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq tslintConfig "airbnb"}};{{/if_eq}}
