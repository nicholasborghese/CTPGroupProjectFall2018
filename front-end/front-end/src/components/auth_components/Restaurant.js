import React from "react";
import yelp from 'yelp-fusion';
import axios from 'axios';

// yelp api credentials   
const clientId = '2lUQ_W4PCGU7b_AfgDN6Tw';
const clientSecret = 'freTjoBNaRNsg2KCBvm83QBVN31kvkkPmvlI15HFRFczsM5RRJpmOErQTlB7f3pl';

class Restaurant extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : [],
            reviews : [],       
        }
    }
    componentWillMount(){
        // yelp api call

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