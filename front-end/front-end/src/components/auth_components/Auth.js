const Auth = {
    isAuthenticated: false,
    authenticate(email,password, cb) {
        this.isAuthenticated = true;
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
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

  export default Auth;