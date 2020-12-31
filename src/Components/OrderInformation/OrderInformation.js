import React from 'react';
import './OrderInformation.css';
import { RiHome4Line, RiArrowDropRightLine, RiShoppingCart2Line, RiArrowGoBackLine } from "react-icons/ri";


function OrderInformation() {
    return (
        <React.Fragment>
            <div className="container-fluid order-information">
                <ul className="breadcrumb">
                    <li style={{ marginRight: '-40px',}}><a className="cstm-width" href="#"><RiHome4Line /><RiArrowDropRightLine style={{fontSize: '27px',}} /></a></li>
                    <li><a style={{width: 'max-content',}} href="#">Order Information</a></li>
                </ul>

                <div className="row">
                    <div className="col-md-9">
                        <h5 className="title">Order Information</h5>
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <td colspan="2" className="text-left">Order Details</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{width: '50%',}} className="text-left"> <b>Order ID:</b> #214521
                                            <br />
                                            <b>Date Added:</b> 20/06/2016</td>
                                        <td style={{width: '50%',}} className="text-left"> <b>Payment Method:</b> Cash On Delivery
                                            <br />
                                            <b>Shipping Method:</b> Flat Shipping Rate </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <td style={{width: '50%', verticalAlign: 'top',}} class="text-left">Payment Address</td>
                                        <td style={{width: '50%', verticalAlign: 'top',}} class="text-left">Shipping Address</td>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="text-left">Jhone Cary
                                        <br/>Central Square
                                        <br/>22 Hoi Wing Road
                                        <br/>New Delhi
                                        <br/>India</td>
                                    <td class="text-left">Jhone Cary
                                        <br/>Central Square
                                        <br/>22 Hoi Wing Road
                                        <br/>New Delhi
                                        <br/>India</td>
                                </tr>
                            </tbody>
                            </table>

                            <div class="table-responsive">
					            <table class="table table-bordered table-hover">
						<thead>
							<tr>
								<td class="text-left">Product Name</td>
								<td class="text-left">Model</td>
								<td class="text-right">Quantity</td>
								<td class="text-right">Price</td>
								<td class="text-right">Total</td>
								<td style={{width: '20px',}}></td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="text-left">iPhone5 </td>
								<td class="text-left">product 11</td>
								<td class="text-right">1</td>
								<td class="text-right">$123.20</td>
								<td class="text-right">$123.20</td>
								<td style={{whiteSpace: 'nowrap',}} class="text-right"> 
                                    <button class="btn btn-primary record-btn mr-2" data-toggle="tooltip" data-original-title="Reorder"><RiShoppingCart2Line style={{fontSize: '18px',marginTop: '-4px',}}/></button>
									<button class="btn btn-danger return-btn" data-toggle="tooltip" data-original-title="Return"><RiArrowGoBackLine style={{fontSize: '18px',marginTop: '-4px',}}/></button>
								</td>
							</tr>

						</tbody>
						<tfoot>
							<tr>
								<td colspan="3"></td>
								<td class="text-right"><b>Sub-Total</b>
								</td>
								<td class="text-right">$101.00</td>
								<td></td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td class="text-right"><b>Flat Shipping Rate</b>
								</td>
								<td class="text-right">$5.00</td>
								<td></td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td class="text-right"><b>Eco Tax (-2.00)</b>
								</td>
								<td class="text-right">$6.00</td>
								<td></td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td class="text-right"><b>VAT (20%)</b>
								</td>
								<td class="text-right">$21.20</td>
								<td></td>
							</tr>
							<tr>
								<td colspan="3"></td>
								<td class="text-right"><b>Total</b>
								</td>
								<td class="text-right">$133.20</td>
								<td></td>
							</tr>
						</tfoot>
					</table>
				            </div>


                    </div>


                <div className="col-md-3 right-listing">
                    <h5 className="subtitle">Account</h5>
                        <div className="list-group">
                        <ul className="list-item">
                            <li><a href="login.html">Login</a>
                            </li>
                            <li><a href="register.html">Register</a>
                            </li>
                            <li><a href="#">Forgotten Password</a>
                            </li>
                            <li><a href="#">My Account</a>
                            </li>
                            <li><a href="#">Address Books</a>
                            </li>
                            <li><a href="wishlist.html">Wish List</a>
                            </li>
                            <li><a href="#">Order History</a>
                            </li>
                            <li><a href="#">Downloads</a>
                            </li>
                            <li><a href="#">Reward Points</a>
                            </li>
                            <li><a href="#">Returns</a>
                            </li>
                            <li><a href="#">Transactions</a>
                            </li>
                            <li><a href="#">Newsletter</a>
                            </li>
                            <li><a href="#">Recurring payments</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}







export default OrderInformation;