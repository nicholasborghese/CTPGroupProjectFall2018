import React from "react";
import yelp from 'yelp-fusion';
import axios from 'axios';


const api_key = "Jkdh9MkPQ4fvApqJ1Fcs_OFrdoJ-AWdgXnlOr3hRF_D8TFeaK3nyrxO8bfgj6R_oSV3TmGZt_R6ZhB6w-fXG1CPA7Q0KNypvwQqIcZu8QMfxCMD2_Z9G8Ytq3NIKXHYx";
const client = yelp.client(api_key);

class Restaurant extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : [],
            reviews : [],       
        }
    }
    // yelp api call
    componentWillMount(){
        let {filter} = this.props.match.params.filter;
        let search = this.props.match.params.input;
        axios.post('/yelp', {term : search}).then(response =>{
            const restaurants = response.data.results.businesses[0];
            this.setState({data : restaurants});
        }).catch(error =>{
            console.log(error);
        })
        
          
          

        // show current reviews for restaurant by making get request 
    }
    render(){    
        console.log(this.props.match.params.filter);
             
        
        return (
        <div>
        <h1>{this.props.match.params.input}</h1>
        <h1>{this.props.match.params.filter}</h1>
        </div>
    );
        }
}

export default Restaurant;


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