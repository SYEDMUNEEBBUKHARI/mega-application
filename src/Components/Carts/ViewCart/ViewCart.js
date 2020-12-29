import React from 'react';
import './ViewCart.css';
import { RiHome4Line, RiArrowDropRightLine } from "react-icons/ri";
import left from "../../../Assets/images/4.jpg";
import { Collapse } from 'antd';
import { Select } from 'antd';


const { Option } = Select;

const { Panel } = Collapse;

const firstInput = `
Enter your coupon here
`;

const secondInput = `
Enter your destination to get a shipping estimate.
`;

const thirdInput = `
Enter your gift certificate code here
`;

function ViewCart() {
    return (
        <div className="main-container container-fluid">
            <ul className="breadcrumb">
                <li><a className="cstm-width" href="#"><RiHome4Line /><RiArrowDropRightLine /></a></li>
                <li><a href="#">Shopping Cart</a></li>
		    </ul>

            <div className="row">
                <div id="content" className="col-sm-12">
                    <h5 class="title">Shopping Cart</h5>
                    <div className="table-responsive form-group">
                        <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td className="text-center">Image</td>
                                <td className="text-left">Product Name</td>
                                <td className="text-left">Model</td>
                                <td className="text-left">Quantity</td>
                                <td className="text-right">Unit Price</td>
                                <td className="text-right">Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="text-center">
                                <a href="product.html">
                                    <img width="70px" src={left} alt="Aspire Ultrabook Laptop" title="Aspire Ultrabook Laptop" className="img-thumbnail" />
                                </a>
                            </td>
                            <td className="text-left">
                                <a href="product.html">Emasa rumas gacem</a><br />
                            </td>
                            <td className="text-left">Pt 001</td>
                            <td className="text-left" width="200px"><div className="input-group btn-block quantity">
                            <input type="text" name="quantity" className="form-control" />
                               
                            </div>
                            </td>
                            <td className="text-right">$120.00</td>
                            <td className="text-right">$120.00</td>
                            </tr>

                            <tr>
                            <td className="text-center">
                                <a href="product.html">
                                    <img width="70px" src={left} alt="Aspire Ultrabook Laptop" title="Aspire Ultrabook Laptop" className="img-thumbnail" />
                                </a>
                            </td>
                            <td className="text-left">
                                <a href="product.html">Emasa rumas gacem</a><br />
                            </td>
                            <td className="text-left">Pt 001</td>
                            <td className="text-left" width="200px"><div className="input-group btn-block quantity">
                            <input type="text" name="quantity" className="form-control" />
                               
                            </div>
                            </td>
                            <td className="text-right">$120.00</td>
                            <td className="text-right">$120.00</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <h5 class="subtitle no-margin">What would you like to do next?</h5>
            <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
       
            <Collapse accordion>
                <Panel header="Use Coupon Code" key="1">
                <p style={{fontSize: '12px',}}>{firstInput} 
                    <input type="text" className="inner-input"/><button class="btn coupon">Apply Coupon</button>
                </p>
                </Panel>
                <Panel header="Estimate Shipping & Taxes" key="2">
                <p>{secondInput}
                
                </p>
                <label style={{width: '6%', marginLeft: '142px', fontSize: '13px',}}><span className="text-danger">*</span>Country</label>
                <select className="mdb-select md-form form-selects" searchable="Search here..">
                    <option value="" disabled selected>Choose your country</option>
                    <option value="1">USA</option>
                    <option value="2">Germany</option>
                    <option value="3">France</option>
                    <option value="3">Poland</option>
                    <option value="3">Japan</option>
                </select>

                <label style={{width: '9%', marginLeft: '104px',fontSize: '13px',}}><span className="text-danger">*</span>Region / State</label>
                <select style={{    width: '82%',}} className="mdb-select md-form form-selects" searchable="Search here..">
                    <option value="" disabled selected>Choose your country</option>
                    <option value="1">USA</option>
                    <option value="2">Germany</option>
                    <option value="3">France</option>
                    <option value="3">Poland</option>
                    <option value="3">Japan</option>
                </select>

                <label style={{width: '7%', marginLeft: '131px',fontSize: '13px',}}><span className="text-danger">*</span>Post Code</label>
                <input className="post-input" type="text" placeholder="Post code" />
                
                <button className="btn-primary submit-detail" type="submit">Get Quotes</button>
                </Panel>
                <Panel header="Use Gift Certificate" key="3">
                <p style={{fontSize: '12px',}}>{thirdInput} 
                    <input type="text" className="gift-input"/><button class="btn gift">Apply Coupon</button>
                </p>
                </Panel>
            </Collapse>

            <div class="row mt-4">
			    <div class="col-sm-4 offset-8 adjust-width">
				<table class="table table-bordered">
					<tbody>
						<tr>
							<td class="text-right">
								<strong>Sub-Total:</strong>
							</td>
							<td class="text-right">$168.71</td>
						</tr>
						<tr>
							<td class="text-right">
								<strong>Flat Shipping Rate:</strong>
							</td>
							<td class="text-right">$4.69</td>
						</tr>
						<tr>
							<td class="text-right">
								<strong>Eco Tax (-2.00):</strong>
							</td>
							<td class="text-right">$5.62</td>
						</tr>
						<tr>
							<td class="text-right">
								<strong>VAT (20%):</strong>
							</td>
							<td class="text-right">$34.68</td>
						</tr>
						<tr>
							<td class="text-right">
								<strong>Total:</strong>
							</td>
							<td class="text-right">$213.70</td>
						</tr>
					</tbody>
				</table>
                <button className="btn-primary check-case mb-3">Checkout</button>
			</div>
		    
            </div>

        
       

        </div>
    )
}






export default ViewCart;