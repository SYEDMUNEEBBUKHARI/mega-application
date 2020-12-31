import React from 'react';
import './ProductReturn.css';
import { RiHome4Line, RiArrowDropRightLine } from "react-icons/ri";
import { Input } from 'antd';


function ProductReturn() {
    const [value, setValue] = React.useState(1);

	const onChange = e => {
		console.log('radio checked', e.target.value);
		setValue(e.target.value);
    };

    const { TextArea } = Input;

    
    return (
        <React.Fragment>
            <div className="container-fluid product-return">
                <ul className="breadcrumb">
                    <li style={{ marginRight: '-40px',}}><a className="cstm-width" href="#"><RiHome4Line /><RiArrowDropRightLine style={{fontSize: '27px',}} /></a></li>
                    <li><a href="#">Return</a></li>
                </ul>

                <div className="row">
                    <div className="col-md-9">
                    <h5 class="title">Product Returns</h5>
				    <p>Please complete the form below to request product returns.</p>

			<div className="personal-details">
				<h5 className="top-title">Order Information</h5>

			<form action method="post">
				<label className="product-data-labels mr-3"><span className="text-danger">*</span>First Name</label>
                <input className="product-data-input" type="text" placeholder="Enter your First Name" />

				<label className="product-data-labels mr-3"><span className="text-danger">*</span>Last Name</label>
                <input className="product-data-input" type="text" placeholder="Enter your Last Name" />

				<label className="product-data-labels mr-3 text-right"><span className="text-danger">*</span>Email</label>
                <input className="product-data-input" type="email" placeholder="Enter your Email" />

				<label className="product-data-labels mr-3"><span className="text-danger">*</span>Telephone</label>
                <input className="product-data-input" type="text" placeholder="Enter your Telephone" />

				<label className="product-data-labels mr-3 text-right"><span className="text-danger">*</span>Order ID</label>
                <input className="product-data-input" type="text" placeholder="Enter Order ID" />

                <label className="order-date-labels mr-3 text-right"><span className="text-danger">*</span>Order Date</label>
                <input className="order-date-input" type="date" />
			</form>
			</div>



			<div className="product-info-details">
				<h5 className="top-title">Product Information</h5>

			<form action method="post">
				<label className="product-info-labels mr-3"><span className="text-danger">*</span>Product Name</label>
                <input className="product-info-input" type="text" placeholder="Enter Product Name" />

				<label className="product-info-labels mr-3"><span className="text-danger">*</span>Product Code</label>
                <input className="product-info-input" type="text" placeholder="Enter Product Code" />

				<label className="product-info-labels mr-3 text-right"><span className="text-danger">*</span>Quantity</label>
                <input className="product-info-input" type="text" placeholder="Enter Quantity" />

            <div className="row reason-det">
                <div className="col-md-2">
				<label className="product-resaon-labels mr-3"><span className="text-danger">*</span>Reason for Return</label>
                </div>
                <div className="col-md-10">
                		<div className="box-category">
                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />
                        <label className="form-check-label" for="flexRadioDefault1"> Dead On Arrival </label>
                        </div>

                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                        />
                        <label className="form-check-label" for="flexRadioDefault2"> Guest Checkout </label>
                        </div>

                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                            checked
                        />
                        <label className="form-check-label" for="flexRadioDefault3"> Returning Customer </label>
                        </div>

                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault4"
                            checked
                        />
                        <label className="form-check-label" for="flexRadioDefault4"> Other</label>
                        </div>
                		</div>
                	</div>
            </div>

            <div className="row reason-det mt-3">
                <div className="col-md-2">
				<label className="product-resaon-labels mr-3"><span className="text-danger">*</span>Product is opened</label>
                <label style={{width: '75%',marginLeft: '56px',}} className="product-info-labels mr-3 text-right"><span className="text-danger">*</span>Other details</label>
                
                </div>
                <div className="col-md-10">
                		<div className="box-category">
                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />
                        <label className="form-check-labels" for="flexRadioDefault1"> Yes </label>
                        
                        
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                        />
                        <label className="form-check-labels" for="flexRadioDefault2"> No </label>
                        </div>
                		</div>
                        <TextArea className="mt-4 mb-3 type-messages" rows={8} />

                    <div className="buttons clearfix mb-4">
						<div className="float-left">
                            <button type="submit" className="btn btn-primary move-back">Back</button>
						</div>
						<div className="float-right">
							<button type="submit" className="btn btn-primary let-submit">Submit</button>
						</div>
					</div>
                        
                	</div>
            </div>
			</form>
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



export default ProductReturn;