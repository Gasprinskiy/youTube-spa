import useVuelidate from '@vuelidate/core'
import {rules, messages} from '@/myHelpers/vuelidateHelper.js'

export default {
    data() {
        return {
            v$: useVuelidate(),
            rules, messages
        }
    }
}