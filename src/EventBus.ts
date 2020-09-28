import Vue from 'vue'

export const EventBus = new Vue()

// closeeditor modelchange newvalueprovided makenewbuild

export const CLOSE_EDITOR_BAR = 'closeeditorbar'
export const MODEL_CHANGE = 'modelchange'
export const NEW_VALUE_PROVIDED = 'newvalueprovided'
export const MAKE_NEW_BUILD = 'makenewbuild'
export const SET_ACTIVE_KEY = 'setactivekey'
export const NEW_COLOR = 'newcolor'