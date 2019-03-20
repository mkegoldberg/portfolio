import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { faAddressBook } from '@fortawesome/free-solid-svg-icons/faAddressBook'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons/faPaintBrush'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt'
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons/faLongArrowAltLeft'

// This is important, we are going to let Nuxt.js worry about the CSS
fontawesome.config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
fontawesome.library.add(
    fas,
    faAddressBook,
    faChevronLeft,
    faChevronRight,
    faCircle,
    faPaintBrush,
    faFileAlt,
    faCode,
    faLongArrowAltLeft
    
)

// Register the component globally
// Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(fontawesome)
