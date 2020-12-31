import React from 'react';
import './OrderHistory.css';
import { RiHome4Line, RiArrowDropRightLine, RiEyeLine } from "react-icons/ri";
import left from "../../Assets/images/4.jpg";
import { useHistory } from 'react-router-dom';



function OrderHistory() {

    let history = useHistory();
    const handelViewNext =()=> {
    history.push ('/orderinformation');
    }
    
    return (
        <React.Fragment>
            <div className="main-container container-fluid view-carts">
                <ul className="breadcrumb">
                    <li style={{ marginRight: '-40px',}}><a className="cstm-width" href="#"><RiHome4Line /><RiArrowDropRightLine style={{fontSize: '27px',}} /></a></li>
                    <li><a href="#">Order History</a></li>
                </ul>

            <div className="row">
                <div id="content" className="col-sm-9">
                    <h5 class="title pb-2">Order History</h5>
                    <div className="table-responsive form-group">
                        <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td className="text-center">Image</td>
                                <td className="text-left">Product Name</td>
                                <td className="text-center">Order ID</td>
                                <td className="text-center">Quantity</td>
                                <td className="text-center">Status</td>
                                <td className="text-center">Date Added</td>
                                <td className="text-center">Total</td>
                                <td className="text-center"></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="text-center">
                                <a href="product.html">
                                    <img width="70px" src={left} alt="Aspire Ultrabook Laptop" title="Aspire Ultrabook Laptop" className="order-img-thumbnail" />
                                </a>
                            </td>
                            <td className="text-left">
                                <a style={{fontSize: '16px',}}>Emasa rumas gacem</a><br />
                            </td>
                            <td className="text-center">Pt 001</td>
                            <td className="text-center">1</td>
                            <td className="text-center">$120.00</td>
                            <td className="text-center">$120.00</td>
                            <td className="text-center">$120.00</td>
                            <td className="text-center">
                                <button className="on-next-view" onClick={handelViewNext}>
                                <RiEyeLine />
                                </button>
                            </td>
                            </tr>

                            <tr>
                            <td className="text-center">
                                <a href="product.html">
                                    <img width="70px" src={left} alt="Aspire Ultrabook Laptop" title="Aspire Ultrabook Laptop" className="order-img-thumbnail" />
                                </a>
                            </td>
                            <td className="text-left">
                                <a style={{fontSize: '16px',}}>Emasa rumas gacem</a><br />
                            </td>
                            <td className="text-center">Pt 001</td>
                            <td className="text-center">2</td>
                            <td className="text-center">$120.00</td>
                            <td className="text-center">$120.00</td>
                            <td className="text-center">$120.00</td>
                            <td className="text-center">
                                <button className="on-next-view" onClick={handelViewNext}>
                                    <RiEyeLine />
                                </button>
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


export default OrderHistory;
