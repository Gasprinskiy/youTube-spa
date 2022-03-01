
export const rules = {
    required(targer){
        return targer.$dirty && targer.required.$invalid
    },
    minLength(targer){
       return targer.$dirty && targer.minLength.$invalid
    },
}

export const messages = {
    required() {
        return '*Поле обязательное для заполнения.'
    },
    minLength(target) {
        return `*Поле должно содержать минимум ${target.minLength.$params.min} символа`
    }
}