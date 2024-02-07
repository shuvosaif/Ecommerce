 const globalConst = {}

globalConst.regEx = {
  nameRegx: /[A-Za-z ]{5,12}$/,

  emailRegx:
    /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  passwordRegx: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
}

export default globalConst
