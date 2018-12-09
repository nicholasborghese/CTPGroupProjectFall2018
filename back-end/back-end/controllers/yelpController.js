const express = require('express');
const models = require('../models');
const yelp = require('yelp-fusion')
const api_key = "Jkdh9MkPQ4fvApqJ1Fcs_OFrdoJ-AWdgXnlOr3hRF_D8TFeaK3nyrxO8bfgj6R_oSV3TmGZt_R6ZhB6w-fXG1CPA7Q0KNypvwQqIcZu8QMfxCMD2_Z9G8Ytq3NIKXHYx";
const client = yelp.client(api_key);

const router = express.Router();
router.post('/', (req, res) => {

    console.log(req.body.filter);
    console.log(req.body.term);
        client.search({
            term : req.body.term,
            location : 'New York, NY'
        }).then(response => {
            console.log(response);
            res.send({results: response.jsonBody});
        }).catch(e =>{
            console.log(e);
        });
});
//   res.json({
//     msg: "Successful POST to '/' route"
//   });
// });

module.exports = router;
