import React from "react";
import yelp from 'yelp-fusion';
import axios from 'axios';

//import Auth from "./Auth";
class Home extends React.Component {
    state = {
        filter: "",
        input: "",
        data: [],
    };
    // event handlers
    filterChanged(e){
        this.setState({filter : e.target.value});
    }
    
    // the input refers to the value typed in the searchbar
    inputChanged(e){
        this.setState({input : e.target.value});
    }
    render() {
        
        // api credentials        
        const clientId = '2lUQ_W4PCGU7b_AfgDN6Tw';
        const clientSecret = 'freTjoBNaRNsg2KCBvm83QBVN31kvkkPmvlI15HFRFczsM5RRJpmOErQTlB7f3pl';
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
        return (
            <div>
                <main role="main">
                    <div class="input-group container-fluid mb-3">
                        <div className="row col-lg-12 offset-lg-2" style = {{paddingTop : "130px"}}>
                            <div className="input-group-prepend">
                                <button className="btn btn-primary btn-lg dropdown-toggle offset-lg-1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter</button>
                                <div class="dropdown-menu">
                                    <button class="dropdown-item" value = "Restaurant" type="button">Action</button>
                                    <button class="dropdown-item" type="button">Another action</button>
                                    <button class="dropdown-item" type="button">Something else here</button>
                                </div>
                            </div>
                            <input type="text" class="col-lg-7 form-control" aria-label="Text input with dropdown button" />
                        </div>
                    </div>
                    <div class="album py-5 bg-light">
                        <div class="container">
                            <div class="row">
                                {
                                    fakeProps.map(props => (<div class="col-md-4">
                                        <div class="card mb-4 shadow-sm">
                                            <img class="card-img-top" data-src={props.img.src} alt="Card image cap" />
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