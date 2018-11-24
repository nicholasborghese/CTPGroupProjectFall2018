const Auth = {
    isAuthenticated: false, 
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
                return response.json();}
            
            
        }).then(body =>{
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
                return response.json();}
            
        }).then(body =>{
            console.log(body);
            
        });  
    },
    // log out 
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

  export default Auth;