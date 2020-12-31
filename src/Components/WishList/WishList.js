import React from 'react';
import './WishList.css';
import { RiHome4Line, RiArrowDropRightLine, RiShoppingCart2Line, RiCloseLine } from "react-icons/ri";
import Wish from "../../Assets/images/wish.jpg";
import List from "../../Assets/images/list.jpg";


function WishList() {
    return (
        <React.Fragment>
            <div className="main-container container-fluid wish-list">
                <ul className="breadcrumb">
                    <li><a href="#"><RiHome4Line /><RiArrowDropRightLine style={{fontSize: '27px',}} />Account</a></li>
                    <RiArrowDropRightLine style={{fontSize: '27px',}} /><li><a href="#">Wish List</a></li>
                </ul>

            <div className="row">
                <div id="content" className="col-sm-9">
                    <h5 class="title pb-2">My Wish List</h5>
                    <div className="table-responsive form-group">
                        <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td className="text-center">Image</td>
                                <td className="text-left">Product Name</td>
                                <td className="text-center">Model</td>
                                <td className="text-center">Stock</td>
                                <td className="text-center">Unit Price</td>
                                <td className="text-center">Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="text-center">
                                <a href="product.html">
                                    <img width="70px" src={Wish} alt="Aspire Ultrabook Laptop" title="Aspire Ultrabook Laptop" className="wish-img-thumbnail" />
                                </a>
                            </td>
                            <td className="text-left">
                                <a style={{fontSize: '16px',}}>Emasa rumas gacem</a><br />
                            </td>
                            <td className="text-center">Pt 001</td>
                            <td className="text-center">1</td>
                            <td className="text-center">$120.00</td>
                            <td style={{whiteSpace: 'nowrap',}} class="text-right"> 
                                    <button class="btn btn-primary record-btn mr-2" data-toggle="tooltip" data-original-title="Reorder"><RiShoppingCart2Line style={{fontSize: '18px',margin: '-4px 0 0 -1px',}}/></button>
									<button class="btn btn-danger return-btn" data-toggle="tooltip" data-original-title="Return"><RiCloseLine style={{fontSize: '19px',margin: '-4px 0 0 -2px',}}/></button>
								</td>
                            </tr>

                            <tr>
                            <td className="text-center">
                                <a href="product.html">
                                    <img width="70px" src={List} alt="Aspire Ultrabook Laptop" title="Aspire Ultrabook Laptop" className="wish-img-thumbnail" />
                                </a>
                            </td>
                            <td className="text-left">
                                <a style={{fontSize: '16px',}}>Emasa rumas gacem</a><br />
                            </td>
                            <td className="text-center">Pt 001</td>
                            <td className="text-center">2</td>
                            <td className="text-center">$120.00</td>
                            <td style={{whiteSpace: 'nowrap',}} class="text-right"> 
                                    <button class="btn btn-primary record-btn mr-2" data-toggle="tooltip" data-original-title="Reorder"><RiShoppingCart2Line style={{fontSize: '18px',marginTop: '-4px',}}/></button>
									<button class="btn btn-danger return-btn" data-toggle="tooltip" data-original-title="Return"><RiCloseLine style={{fontSize: '19px',marginTop: '-4px',}}/></button>
							</td>
                            </tr>
                        </tbody>
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




export default WishList;