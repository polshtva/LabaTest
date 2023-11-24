


let btnlogin = document.querySelector(".submit-login");





class Student{
    constructor(fio, login, password){
        this.fio = fio;
    }
    regPerson(login, password){
        if(login.split("@").length >= 2 && password.length > 8){
            this.login = login;
            this.password = password;
        }
        else{
            return "Не подходят данные"
        }
    }
    get loginPerson (){
        if(this.login != undefined && this.password != undefined){
            console.log(`Пользователь ${this.fio} успешно зарегистрирован`);
        }
        else{
            console.log(`Пользователь не зарегистрирован`);
        }
    }

}