import React from 'react';
import './GiftVoucher.css';
import { RiHome4Line, RiArrowDropRightLine } from "react-icons/ri";
import { Input } from 'antd';
import { Checkbox } from 'antd';



function GiftVoucher() {
    const [value, setValue] = React.useState(1);

	const onChange = e => {
		console.log('radio checked', e.target.value);
		setValue(e.target.value);
    };

    const { TextArea } = Input;




    return (
        <React.Fragment>
            <div className="container-fluid gift-voucher">
                <ul className="breadcrumb">
                    <li style={{ marginRight: '-40px',}}><a className="cstm-width" href="#"><RiHome4Line /><RiArrowDropRightLine style={{fontSize: '27px',}} /></a></li>
                    <li><a href="#">Gift Voucher</a></li>
                </ul>

                <div className="row">
                    <div className="col-md-9">
                    <h5 className="title-gift">Purchase a Gift Card</h5>
				    <p>This gift card will be emailed to the recipient after your order has been paid for.</p>

			<div className="personal-details">
			<form action method="post">
				<label className="product-data-labels mr-3 text-right"><span className="text-danger">*</span>Recipient's Name</label>
                <input className="product-data-input" type="text" placeholder="Enter Recipient's Name" />

                <label className="product-data-labels mr-3 text-right"><span className="text-danger">*</span>Recipient's e-mail</label>
                <input className="product-data-input" type="email" placeholder="Enter Recipient's e-mail" />

				<label className="product-data-labels mr-3 text-right"><span className="text-danger">*</span>Your Name</label>
                <input className="product-data-input" type="text" placeholder="Enter your Name" />

				<label className="product-data-labels mr-3 text-right"><span className="text-danger">*</span>Your e-mail</label>
                <input className="product-data-input" type="text" placeholder="Enter Your e-mail" />


                <div className="row reason-det">
                <div className="col-md-2">
                    <label className="product-resaon-labels mr-3"><span className="text-danger">*</span>Gift Certificate Theme</label>
                    <label style={{width: '75%',marginLeft: '33px',}} className="product-info-labels mr-3 mt-5 text-right"><span className="text-danger">*</span>Message</label>
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
                        <label className="form-check-label" for="flexRadioDefault1"> General </label>
                        </div>

                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                        />
                        <label className="form-check-label" for="flexRadioDefault2"> Birthday </label>
                        </div>

                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                            checked
                        />
                        <label className="form-check-label" for="flexRadioDefault3"> Christmas </label>
                        </div>
                		</div>
                        <TextArea className="mt-4 mb-3 type-messages" rows={6} />
                	</div>
            </div>
                <label className="amount-data-labels mr-3"><span className="text-danger">*</span>Amount</label>
                <input className="amount-data-input" type="text" placeholder="Enter Amount" />
			</form>
			</div>


            <div class="box">
				<div className="p-right">
				<Checkbox onChange={onChange}><span className="reading-btm">I understand that gift certificates are non-refundable.</span> </Checkbox>
				<button type="submit" class="btn btn-primary continues">Continue</button>
				</div>
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





export default GiftVoucher;