import axios from 'axios';
import * as api from './api';
import * as product  from './components/productView';

export const getAllProductList = () => {

    axios.get(api.allProducts)
        .then(response => {
            product.showProduct(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}

export const getEnteredFilterValue = (filterValue) => {

    axios.get(api.yearFilter+filterValue)
        .then(response => {
            product.showProduct(response.data);
        })
        .catch(error => {
            console.log(error);
        });

}

export const getLaunchSucessFilter = (launchFilterValue) => {
    axios.get(api.launch+launchFilterValue)
        .then(response => {
            product.showProduct(response.data);
        })
        .catch(error => {
            console.log(error);
        })
}

export const getLandingSuccessFilter = (launch, landing) => {

    axios.get(api.launch+launch+'&land_success='+landing)
        .then(response => {
            product.showProduct(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}