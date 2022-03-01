<template>
  <div class="my-form-wrapper form">
    <div class="from-container" >
        <div class="form-logo">
          <q-img src="../assets/logo.svg" alt=""/>
        </div>
        <div class="text-h4">{{formLabel}}</div>
        <form class="form-inputs q-gutter-md" @submit.prevent="submit">
          
          <q-input 
            outlined 
            v-model="login"
            label="Логин"
            @update:model-value="updateLogin"
            :error-message="messages.minLength(v$.login)"
            :error="rules.required(v$.login) || rules.minLength(v$.login)"
          />

          <q-input 
            outlined 
            v-model="password"
            @update:model-value="updatePassword"
            label="Пароль"
            :error-message="messages.minLength(v$.password)"
            :error="rules.required(v$.password) || rules.minLength(v$.password)"
            :type="isPwd ? 'password' : 'text'">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <q-btn 
            :label="formLabel" 
            type="submit"
            color="primary" 
          />

        </form>
        
    </div>
  </div>
</template>

<script>


import { required, minLength } from '@vuelidate/validators'
import validateMixin from '@/mixins/validateMixin.js'

export default {
  mixins:[validateMixin],
    data(){
      return {
        isPwd: true,
      }
    },

    props: {
      login: {
        type: String,
        default: ''
      },
      password: {
        type: String,
        default: ''
      },
      formLabel: {
        type: String,
        default: ''
      },
    },

    validations(){
      return {
        login: {required, minLength: minLength(4)},
        password: {required, minLength: minLength(4)},
      }
    },

    methods: {
      updateLogin(val){
        this.$emit('update:login', val)
      },
      updatePassword(val){
        this.$emit('update:password', val)
      },
      submit(){
        if(this.v$.$invalid){
          this.v$.$touch()
        } else {
          this.v$.$reset()
          this.$emit('submitForm')
        }
      }
    },
    
}
</script>

<style lang="scss" scoped>
  .my-form-wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .from-container {
      width: 100%;
      max-width: 510px;
      background: #fff;
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 5px;
      padding: 40px;
      .form-logo {
        width: 70px;
        margin-bottom: 40px;
      }
      .text-h4 {
        margin-bottom: 40px;
      }
      .form-inputs {
        width: 100%;
        text-align: center;
        button {
          margin-top: 30px;
        }
      }
    }
  }
</style>