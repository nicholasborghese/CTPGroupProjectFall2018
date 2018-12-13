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
                src: "data:image/png;base64,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",
                alt: "Subway"
            },
            title: "McDonalds",
            description: "McDonalds",
            buttons: [{
                text: "Website",
                link: "https://www.mcdonalds.com/us/en-us.html"
            }, {
                text: "Directions",
                link: "/"
            }]
        }, {
            img: {
                src: "https://www.subway.com/~/media/Base_English/Images/Branding/subway-logo-new-1200x630.png",
                alt: "Subway"
            },
            title: "Subway",
            description: "Subway",
            buttons: [{
                text: "Website",
                link: "https://www.subway.com/en-us"
            }, {
                text: "Directions",
                link: "/"
            }]
        }, {
            img: {
                src: "https://www.nrn.com/sites/nrn.com/files/styles/article_featured_standard/public/dominos-logo-promo_4.png?itok=1vmkuAwA",
                alt: "Dominos"
            },
            title: "Dominos",
            description: "Dominos",
            buttons: [{
                text: "Website",
                link: "https://www.dominos.com/en/"
            }, {
                text: "Directions",
                link: "/"
            }]
        }, {
            img: {
                src: "https://resizer.otstatic.com/v2/photos/large/24911174.jpg",
                alt: "Serafina"
            },
            title: "Serafina",
            description: "Serafina",
            buttons: [{
                text: "Website",
                link: "https://serafinarestaurant.com/"
            }, {
                text: "Directions",
                link: "/"
            }]
        }, {
            img: {
                src: "http://www.carminesnyc.com/assets/images/carmines_og.jpg",
                alt: "Carmine's"
            },
            title: "Carmine's",
            description: "Carmine's",
            buttons: [{
                text: "Website",
                link: "https://www.carminesnyc.com/"
            }, {
                text: "Directions",
                link: "/"
            }]
        }, {
            img: {
                src: "https://txktoday.com/wp-content/uploads/2018/08/chick-fil-a.jpg",
                alt: "Chick-fil-A"
            },
            title: "Chick-fil-A",
            description: "Chick-fil-A",
            buttons: [{
                text: "Website",
                link: "https://www.chick-fil-a.com/"
            }, {
                text: "Directions",
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

                                <button className="dropdown-item" onClick={this.filterChanged} value="Name" type="button">Name</button>
                                <button className="dropdown-item" onClick={this.filterChanged} value="Review" type="button">Review</button>
                                

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
                                            <img className="card-img-top" src={props.img.src} alt="Card image cap" />
                                            <div className="card-body">
                                                <p className="card-text">{props.description}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => window.location = props.buttons[0].link}>{props.buttons[0].text}</button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">{props.buttons[1].text}</button>
                                                    </div>
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


