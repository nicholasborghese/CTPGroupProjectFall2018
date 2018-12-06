import React from "react";
import Restaurant from "./Restaurant"
import {
    Redirect, Route
} from 'react-router-dom';

// home page of website
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            input: "",
            data: "",
            error: "",
            shouldRedirect: false, // only on submit should user be redirected
        };
    }

    // method to check if fields are empty
    isEmptyFields = () => {
        if (this.state.filter === "" || this.state.input === "") {
            this.setState({ error: "Filter or Search Bar cannot be empty" });
            return true;
        }
        return false;
    }
    // event handlers
    // drop down
    filterChanged = (e) => {
        console.log(e.target.value)
        this.setState({ filter: e.target.value });
    }
    // search bar
    inputChanged = (e) => {
        this.setState({ input: e.target.value });
    }
    // action when user clicks search button
    search = () => {
        // check if fields are empty
        if (!this.isEmptyFields()) {
            console.log("Coming soon");
            this.setState({ data: ["Yay"] });
            this.setState({ shouldRedirect: true });

        }
    }
    render() {

        
        const fakeProps = [{
            img: {
                src: "https://www.nrn.com/sites/nrn.com/files/styles/article_featured_standard/public/mcdonalds%20test%20alternative%20straws%20seattle%20ban.gif?itok=BADO-i8j",
                alt: "dsghjkdsg"
            },
            title: "this is a fake title 2",
            description: "aksjdgskljdgdlksfgjhldskf;hhsdhdghffgjdjfhsdkghdkfjghdfkjhfdjkgh",
            buttons: [{
                text: "btn 1",
                link: "https://www.google.com"
            }, {
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
            }, {
                text: "btn 2",
                link: "/"
            }]
        }, {
            img: {
                src: "https://via.placeholder.com/350",
                alt: "dsghjkdsg"
            },
            title: "this is a fake title",
            description: "aksjdgskljdgdlksfgjhldskf;hhsdhdghffgjdjfhsdkghdkfjghdfkjhfdjkgh",
            buttons: [{
                text: "btn 1",
                link: "/"
            }, {
                text: "btn 2",
                link: "/"
            }]
        }, {
            img: {
                src: "https://via.placeholder.com/350",
                alt: "dsghjkdsg"
            },
            title: "this is a fake title",
            description: "aksjdgskljdgdlksfgjhldskf;hhsdhdghffgjdjfhsdkghdkfjghdfkjhfdjkgh",
            buttons: [{
                text: "btn 1",
                link: "/"
            }, {
                text: "btn 2",
                link: "/"
            }]
        }];
        let { shouldRedirect } = this.state;
        if (shouldRedirect) {
            return (
                <div>
                        <Route path='/search/:filter/:input/' render={(props) => <Restaurant {...props} data={this.state.data} />} />
                        <Redirect to={`/search/${this.state.filter}/${this.state.input}/`} />
                                  
                    </div>)
        }

        return (

            <div>
                <main role="main">
                    <div style={{ fontSize: "65px" }} className="align-text-center h1">Search</div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                            <div className="dropdown-menu">

                                <button className="dropdown-item" onClick={this.filterChanged} value="Restaurant" type="button">Restaurant</button>
                                <button className="dropdown-item" onClick={this.filterChanged} value="Review" type="button">Review</button>
                                <button className="dropdown-item" onClick={this.filterChanged} value="Food" type="button">Food</button>

                            </div>
                        </div>
                        <input onChange={this.inputChanged} type="text" className="form-control" aria-label="Text input with dropdown button" />
                        <button onClick={this.search} type="button" className="btn btn-lg ml-3 btn-primary">Search</button>
                    </div>

                    {/* <div className="ml-5 input-group container-fluid mb-3">
                        <div className="" style={{ paddingTop: "130px" }}>
                            <div className=" row input-group-prepend">
                                <button className="btn btn-primary btn-lg dropdown-toggle " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter</button>

                            </div>
                            <input type="text" onChange={this.inputChanged} className="form-control" aria-label="Text input with dropdown button" />
                           
                        </div>
                    </div> */}
                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row">
                                {
                                    fakeProps.map(props => (<div className="col-md-4">
                                        <div className="card mb-4 shadow-sm">
                                            <img className="card-img-top" data-src={props.img.src} alt="Card image cap" />
                                            <div className="card-body">
                                                <p className="card-text">{props.description}}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => window.location = props.buttons[0].link}>{props.buttons[0].text}</button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">{props.buttons[1].text}</button>
                                                    </div>
                                                    <small className="text-muted">9 mins</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
export default Home;


// export const yelpSearch = (keywords, filterType, location) => dispatch => {
//   // authenticate with yelp API, obtain an access token
//   yelp.accessToken(clientId, clientSecret).then(response => {
//       const client = yelp.client(response.jsonBody.access_token);

//       if (filterType === 'delivery') {
//           client.transactionSearch('delivery', {
//               location: location
//           }).then(response => {
//               const restaurants = response.jsonBody.businesses
//               dispatch(getByDelivery(restaurants))
//           }).catch(e => {
//               console.log(e);
//           });
//       } else if (filterType === 'reviews') {
//           client.reviews(keywords).then(response => {
//               const reviews = response.jsonBody.reviews;
//               dispatch(getReviews(reviews));
//           }).catch(e => {
//               console.log(e);
//           });
//       } else if (filterType === 'keywords') {
//           const searchRequest = {
//               term: keywords,
//               location: location
//           };
//           client.search(searchRequest).then(response => {
//               const restaurants = response.jsonBody.businesses;
//               dispatch(getByKeywords(restaurants))
//           })
//       }else { // search nearby restaurants nearby
//           const searchRequest = {
//               term: "restaurant",
//               location: location
//           };
//           client.search(searchRequest).then(response => {
//               const restaurants = response.jsonBody.businesses;
//               dispatch(getNearBy(restaurants))
//           })
//       }
//   }).catch(e => {
//       console.log(e);
//   });
// };