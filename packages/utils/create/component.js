/**
 *create a baise component by composition Api defineComponent and install
 */

import { defineComponent } from 'vue'

const createComponent = (name) => {
  return function (component) {
    component.name = name
    component.install = (vue) => vue.component(name, component)
    return defineComponent(component)
  }
}

export { createComponent }