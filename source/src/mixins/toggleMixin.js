export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        options: {
            type: Object,
            required: false
        }
    },

    methods: {
        openModal(bool = true, options){
            this.$emit('update:show', bool)
            this.$emit('update:options', options)
        },
        closeModal(){
            this.$emit('update:show', false)
            this.$emit('donotsave')
        }
    }
}