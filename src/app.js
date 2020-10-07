import * as http from './https';
import * as selector from './selectors';

//Get List on DOM load
document.addEventListener('DOMContentLoaded', getProducts);

//Listen for year filter
selector.filter.addEventListener('click', getEnteredFilterValue);

//Listen for Launch
selector.launch.addEventListener('click', getLaunchFilterValue);

//Listen for Landing
selector.landing.addEventListener('click', getLandingFilterValue);


function getProducts () {
    http.getAllProductList();
}

function getEnteredFilterValue (e) {
    
    const filteValue = e.target.textContent;

    //Removing the selcted class
    selector.yearFilter.forEach(ele => {
        ele.classList.remove('selected');
    });

    //Adding the selected class
    e.target.classList.add('selected');

    http.getEnteredFilterValue(filteValue);
}

function getLaunchFilterValue (e) {
    const launchValue = e.target.textContent;

    console.log(launchValue);

    //Removing the selcted class
    selector.launchFilter.forEach(ele => {
        ele.classList.remove('selected');
    });

    //Adding the selected class
    e.target.classList.add('selected');

    http.getLaunchSucessFilter(launchValue);
}

function getLandingFilterValue (e) {
    let launchFilterValue;
    const landingValue = e.target.textContent;
    console.log(landingValue);

    //Removing the selcted class
    selector.landingFilter.forEach(ele => {
        ele.classList.remove('selected');
    });

    //Adding the selected class
    e.target.classList.add('selected');

    //Getting launch filter value
    selector.launchFilter.forEach(ele => {
        if (ele.classList.contains('selected')) {
            launchFilterValue = ele.textContent;
        }
    });

    http.getLandingSuccessFilter(landingValue, launchFilterValue);
}