import React from "react"
import {useEffect, useState} from "react";


const ProductGrid = ( )=>{
    const [data, setData] = useState();

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch('https://comx-sand-api.afexnigeria.com/api/securities/boards')
            ).json();
            setData(data);
            console.log(data,"res",)
        };
        dataFetch

    }, []);

    return(
        <div className="grid">
            <div className="col-12 xl:col-6">
                <div className="surface-card shadow-1 border-round">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Products</th>
                            <th>Quantity</th>
                            <th>Bid price</th>
                            <th></th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td data-label="Products">1</td>
                            <td data-label="Quantity">Dinesh</td>
                            <td data-label="Bid Price">34</td>
                            <td data-label=""><span className="btn-buy">Buy</span></td>

                        </tr>

                        <tr>
                            <td data-label="Products">1</td>
                            <td data-label="Quantity">Dinesh</td>
                            <td data-label="Bid Price">34</td>
                            <td data-label=""><span className="btn-buy">Buy</span></td>

                        </tr>

                        <tr>
                            <td data-label="Products">1</td>
                            <td data-label="Quantity">Dinesh</td>
                            <td data-label="Bid Price">34</td>
                            <td data-label="" > <span className="btn-buy">Buy</span> </td>

                        </tr>

                        <tr>
                            <td data-label="Products">1</td>
                            <td data-label="Quantity">Dinesh</td>
                            <td data-label="Bid Price">34</td>
                            <td data-label=""><span className="btn-buy">Buy</span></td>

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-12 xl:col-6">
                <div className="surface-card shadow-1 border-round">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Products</th>
                            <th>Quantity</th>
                            <th>Bid price</th>
                            <th></th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td data-label="Products">1</td>
                            <td data-label="Quantity">Dinesh</td>
                            <td data-label="Bid Price">34</td>
                            <td data-label=""><span className="btn-sell">Sell</span></td>

                        </tr>

                        <tr>
                            <td data-label="Products">1</td>
                            <td data-label="Quantity">Dinesh</td>
                            <td data-label="Bid Price">34</td>
                            <td data-label=""><span className="btn-sell">Sell</span></td>

                        </tr>

                        <tr>
                            <td data-label="Products">1</td>
                            <td data-label="Quantity">Dinesh</td>
                            <td data-label="Bid Price">34</td>
                            <td data-label="" > <span className="btn-sell">Sell</span> </td>

                        </tr>

                        <tr>
                            <td data-label="Products">1</td>
                            <td data-label="Quantity">Dinesh</td>
                            <td data-label="Bid Price">34</td>
                            <td data-label=""><span className="btn-sell">Sell</span></td>

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-12 xl:col-12">
                <div className="surface-card shadow-1 border-round">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Security</th>
                            <th>Board</th>
                            <th>Order Type</th>
                            <th>Matched Price</th>
                            <th>Quantity</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td data-label="Security">Soybeans (SSBS) </td>
                            <td data-label="Board">X-Traded</td>
                            <td data-label="Order Type">Buy</td>
                            <td data-label="Matched Price">1792.65</td>
                            <td data-label="Quantity">9265</td>
                            <td data-label="Date">17 Oct, 2020</td>
                            <td data-label="Time">07:38</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ProductGrid