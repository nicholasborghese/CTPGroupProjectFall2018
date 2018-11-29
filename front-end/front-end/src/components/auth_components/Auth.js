
const Auth = {
    isAuthenticated: false, 
    activeUser : "",
    isLoginSuccessful : false,
    loginAuth(email,password, cb) {
        return fetch('/auth/login', {
          method: "POST",
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({
            email: email,
            password: password, }),
            
        }).then(response =>{
            if (response.status === 200){
                this.isAuthenticated = true;
                cb();
                this.isLoginSuccessful = true;
                return response.json();}
                
            
        }).then(body =>{
            if (this.isLoginSuccessful){
                this.activeUser = body.firstName + " " + body.lastName;
                 console.log(this.activeUser);
            }
            console.log(body);
            
            
        });   
    },

    signUpAuth(firstName, lastName, email,password, cb) {
        return fetch('/auth/signup', {
          method: "POST",
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({
            firstName : firstName,
            lastName : lastName,
            email: email,
            password: password, }),
            
        }).then(response =>{
            if (response.status === 200){
                this.isAuthenticated = true;
                cb();
                this.isLoginSuccessful = true;
                return response.json();}
            
        }).then(body =>{
            if (this.isLoginSuccessful){
                this.activeUser = body.firstName + " " + body.lastName;
                 console.log(this.activeUser);
            }
            console.log(body);
            
        });  
    },
    // log out 
    signOut(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
      this.activeUser = "";
      this.isLoginSuccessful = false;
    }
  };

  export default Auth;