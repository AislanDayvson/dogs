import React from 'react'

const types = {
    email:{
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um e-mail válido',
    },
    password:{
        regex: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        message: 'A senha precisa ter no mínimo 1 caractere maiúsculo, 1 minúsculo e 1 dígito. Com no mínimo 8 caracteres',
    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize apenas números',
    }

}

const useForm = (type) => {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)

    const onChange = ({target}) => {
        setValue(target.value)
        if(error){
            validate(target.value)
        }
    }

    const validate = (value) => {
        if(type === false) return true;
        if(value.length === 0){
            setError('Preencha um valor')
            return false
        } else if(types[type] && !types[type].regex.test(value)){
            setError(types[type].message);
            return false
        } else{
            setError(null)
            return true
        }
    }

  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
    error,
  }
}

export default useForm