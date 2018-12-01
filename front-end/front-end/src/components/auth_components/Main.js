
import React from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";
import SignOut from "./SignOut";

// helper function to get greeting message
function getGreetingMsg() {
    const today = new Date();
    const currentHour = today.getHours();
    if (currentHour < 12) {
        return "Good Morning, ";
    }
    else if (currentHour < 18) {
        return "Good Afternoon, ";
    }
    else {
        return "Good Evening, ";
    }
}
function Main(props) {
    const greetingMsg = Auth.activeUser ? getGreetingMsg() + Auth.activeUser : "";

    const fakeProps = [{
        img: {
            src: "https://via.placeholder.com/350",
            alt: "dsghjkdsg"
        },
        title: "this is a fake title 2",
        description: "aksjdgskljdgdlksfgjhldskf;hhsdhdghffgjdjfhsdkghdkfjghdfkjhfdjkgh",
        buttons: [{
            text: "btn 1",
            link: "https://www.google.com"
        },{
            text: "btn 2",
            link: "/"
        }]
    }, {
        img: {
            src: "https://via.placeholder.com/350",
            alt: "dsghjkdsg"
        },
        title: "this is a fake title 3",
        description: "aksjdgskljdgdlksfgjhldskf;hhsdhdghffgjdjfhsdkghdkfjghdfkjhfdjkgh",
        buttons: [{
            text: "btn 1",
            link: "/"
        },{
            text: "btn 2",
            link: "/"
        }]
    },{
        img: {
            src: "https://via.placeholder.com/350",
            alt: "dsghjkdsg"
        },
        title: "this is a fake title",
        description: "aksjdgskljdgdlksfgjhldskf;hhsdhdghffgjdjfhsdkghdkfjghdfkjhfdjkgh",
        buttons: [{
            text: "btn 1",
            link: "/"
        },{
            text: "btn 2",
            link: "/"
        }]
    },]


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#f47070" }}>
                <span className="navbar-brand mb-0 h1">Heroes Food</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" text-left collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link className="navbar-brand nav-link" to="/public" >Home</Link></li>
                        <li className="nav-item" ><Link className="navbar-brand nav-link" to="/protected">Protected Page</Link></li>
                        <li className="nav-item"><Link className="navbar-brand nav-link" to="/login">Login</Link></li>
                        <li className="nav-item "><Link className=" navbar-brand nav-link" to="/signup">Sign Up</Link></li>
                        {greetingMsg &&
                            <li className="nav-item pl-3"> <span className="navbar-brand mb-0 h1">{greetingMsg}</span></li>}
                        {Auth.activeUser && <SignOut />}
                    </ul>
                </div>
            </nav>
            <div className="main">
                {props.children}
            </div>
             <main role="main">

      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Album example</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row">
            {
                fakeProps.map(props => (<div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img class="card-img-top" data-src={props.img.src} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">{props.description}}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => window.location = props.buttons[0].link}>{props.buttons[0].text}</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">{props.buttons[1].text}</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            
           
           </div>))
            }
            </div>
            </div>
           </div>

    </main>
        </div>






    );
}

export default Main;
