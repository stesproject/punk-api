import React from "react";
import Axios from "axios";

const url = "https://api.punkapi.com/v2/beers";
const elementsPerPage = 10;
let imgs = new Array;
let currentPage = {
    set currentPage(value) {
      this.log.push(value);
      if (currentPage < 1) {
          currentPage = 1;
      }
    },
    log: []
  }
  currentPage = 1;

function sendData(param1, value1, param2, value2) {
    console.log("Current page: " + currentPage);

    Axios.get(url, {
        params: {
            [param1] : value1,
            [param2] : value2
        }
    })
    .then(function(response) {
        console.log(response);
        console.log(response.data[0].name);

        showImages(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })

    const showImages = (datas) => {
        
        if (images.children.length == 0) {
            for (let i = 0; i < elementsPerPage; i++) { 
                let img = document.createElement("img");
                img.setAttribute("src", datas[i].image_url);
                img.setAttribute('width', '80px');
                img.setAttribute('height', '200px');
                images.appendChild(img);
                imgs.push(img);
            }
        }
        else {
            for (let i = 0; i < datas.length; i++) { 
                imgs[i].setAttribute("src", datas[i].image_url);
            }
        }
    } 
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
    }
    
    componentDidMount() {
        let lastParam = "beer_name";
        let param;
        let filter = document.getElementById("filter");
        let searchButton = document.getElementById("searchButton");
        let prevButton = document.getElementById("prevButton");
        let nextButton = document.getElementById("nextButton");
        let searchInput = document.getElementById("search");

        let images = document.getElementById("images");

        document.querySelector("li").addEventListener("click", setParam);

        searchButton.addEventListener("click", () => {
            if (searchInput.value !== "") {
                sendData(lastParam, searchInput.value);
            }
            else {
                sendData("page", 1, "per_page", elementsPerPage);
            }
        });

        prevButton.addEventListener("click", () => {
            if (currentPage <= 1) {
                return;
            }

            currentPage--;
            sendData("page", currentPage, "per_page", elementsPerPage);
        });

        nextButton.addEventListener("click", () => {
            currentPage++;
            sendData("page", currentPage, "per_page", elementsPerPage);
        });
        
        function setParam(e) {
            param = e.target.getAttribute("data-param");

            if (lastParam !== param && param !== null) {
                setFilter(e.target.innerHTML);
                lastParam = param;
            }
        }

        function setFilter(f) {
            filter.innerHTML = f + "&#9660;";
        }
    }

	render() {
		return (
			<React.Fragment>
				<h1>Choose your beer</h1>

				<div className="menu-wrap">

                <nav className="menu">
                    <ul>
                        <li>
                            <a id="filter" href="#">Name<span className="arrow">&#9660;</span></a>

                            <ul className="sub-menu">
                                <li>
                                    <a data-param="beer_name" href="#">Name</a>
                                </li>
                                <li>
                                    <a data-param="yeast" href="#">Yeast</a>
                                </li>
                                <li>
                                    <a data-param="malt" href="#">Malt</a>
                                </li>
                                <li>
                                    <a data-param="food" href="#">Food</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

				<input id="search" type="text" placeholder="Search for..." />

				</div>

                <button id="searchButton">Search</button>

                <nav id="images">
                </nav>

                <nav className="pages">
                <button id="prevButton">Previous</button><button id="nextButton">Next</button>
                </nav>
			</React.Fragment>
		);
	}
}

export default App;
