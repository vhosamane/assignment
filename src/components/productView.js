import * as selector from '../selectors';

export const showProduct = (products) => {
    //console.log(products);
    let output = '';

    if (products.length > 0) {
        products.forEach((product) => {
            output += `
                <div class="col-12 col-md-6 col-lg-3 product__column">
                    <div class="product">
                        <img class="product__img" src='${product.links.mission_patch}' />
                        <span class="product__name font-weight-bold">${product.mission_name} #${product.flight_number}</span>
                        <div class="product__mission">
                            <span class="product__text font-weight-bold">Mission Ids</span>
                            <ul class="product__mission--list">
                                <li>Mission lbs</li>
                                <li>Mission lbs</li>
                                <li>Mission lbs</li>
                            </ul>
                        </div>
                        <div class="product__year">
                            <span class="product__text font-weight-bold">Launch Year : </span>
                            <span class="product__value">${product.launch_year}</span>
                        </div>
                        <div class="product__section">
                            <span class="product__text font-weight-bold">Successful Launch : </span>
                            <span class="product__value">${product.launch_success}</span>
                        </div>
                        <div class="product__section">
                            <span class="product__text font-weight-bold">Successful Landing : </span>
                            <span class="product__value">${product.rocket.first_stage.cores[0].land_success}</span>
                        </div>
                    </div>
                </div>
            `;
        });
    } else {
        output += `<h3> No Products </h3>`
    }

    selector.product.innerHTML = output;
}