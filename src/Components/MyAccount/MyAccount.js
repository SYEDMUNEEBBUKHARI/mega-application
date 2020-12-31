import React from 'react';
import './MyAccount.css';
import { RiHome4Line, RiArrowDropRightLine } from "react-icons/ri";
import { Radio } from 'antd';



function MyAccount() {
    const [value, setValue] = React.useState(1);

    const onChange = e => {
		console.log('radio checked', e.target.value);
		setValue(e.target.value);
    };
    
    return (
        <React.Fragment>
            <div className="container-fluid">
                <ul className="breadcrumb">
                    <li><a href="#"><RiHome4Line /><RiArrowDropRightLine style={{fontSize: '27px',}} />Account</a></li>
                    <RiArrowDropRightLine style={{fontSize: '27px',}} /><li><a href="#">My Account</a></li>
                </ul>


            <div className="row">
                <div className="col-md-9 my-accounts">
                    <h5 className="title">My Account</h5>
                    <p className="lead">Hello, <strong>Jhone Cary!</strong> - To update your account information.</p>
                
                    <form>
					<div class="row">
						<div class="col-sm-6">
							<fieldset id="personal-details">
								<legend>Personal Details</legend>
								<div class="form-group required">
									<label for="input-firstname" class="control-label"><span className="text-danger">*</span>First Name</label>
									<input type="text" class="form-control" id="input-firstname" placeholder="First Name" name="firstname"/>
								</div>
								<div class="form-group required">
									<label for="input-lastname" class="control-label"><span className="text-danger">*</span>Last Name</label>
									<input type="text" class="form-control" id="input-lastname" placeholder="Last Name" name="lastname"/>
								</div>
								<div class="form-group required">
									<label for="input-email" class="control-label"><span className="text-danger">*</span>E-Mail</label>
									<input type="email" class="form-control" id="input-email" placeholder="E-Mail"name="email"/>
								</div>
								<div class="form-group required">
									<label for="input-telephone" class="control-label"><span className="text-danger">*</span>Telephone</label>
									<input type="tel" class="form-control" id="input-telephone" placeholder="Telephone" name="telephone"/>
								</div>
								<div class="form-group">
									<label for="input-fax" class="control-label"><span className="text-danger">*</span>Fax</label>
									<input type="text" class="form-control" id="input-fax" placeholder="Fax" name="fax"/>
								</div>
							</fieldset>
							<br/>
						</div>
						<div class="col-sm-6">
							<fieldset id="personal-details">
								<legend>Change Password</legend>
								<div class="form-group required">
									<label for="input-password" class="control-label"><span className="text-danger">*</span>Old Password</label>
									<input type="password" class="form-control" placeholder="Old Password" name="old-password"/>
								</div>
								<div class="form-group required">
									<label for="input-password" class="control-label"><span className="text-danger">*</span>New Password</label>
									<input type="password" class="form-control" placeholder="New Password" name="new-password"/>
								</div>
								<div class="form-group required">
									<label for="input-confirm" class="control-label"><span className="text-danger">*</span>New Password Confirm</label>
									<input type="password" class="form-control" id="input-confirm" placeholder="New Password Confirm" name="new-confirm"/>
								</div>
							</fieldset>
							<fieldset>
								<legend>Newsletter</legend>
								<div class="form-group">
                                <div className="account-horizontal-btn">
                                    <span className="mr-3">Subscribe</span>
                                    <Radio.Group onChange={onChange} value={value}>
                                        <Radio value={1}>Yes</Radio>
                                        <Radio value={2}>No</Radio>
                                    </Radio.Group>
                                </div>
								</div>
							</fieldset>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<fieldset id="address">
								<legend>Payment Address</legend>
								<div class="form-group">
									<label for="input-company" class="control-label"><span className="text-danger">*</span>Company</label>
									<input type="text" class="form-control" placeholder="Company" name="company"/>
								</div>
								<div class="form-group required">
									<label for="input-address-1" class="control-label"><span className="text-danger">*</span>Address 1</label>
									<input type="text" class="form-control" placeholder="Address 1" name="address_1"/>
								</div>
								<div class="form-group required">
									<label for="input-city" class="control-label"><span className="text-danger">*</span>City</label>
									<input type="text" class="form-control" placeholder="City" name="city"/>
								</div>
								<div class="form-group required">
									<label for="input-postcode" class="control-label"><span className="text-danger">*</span>Post Code</label>
									<input type="text" class="form-control" placeholder="Post Code" name="postcode"/>
								</div>
								<div class="form-group required">
									<label for="input-country" class="control-label"><span className="text-danger">*</span>Country</label>
									<select class="form-control" name="country_id">
										<option value=""> --- Please Select --- </option>
										<option value="244">Aaland Islands</option>
										<option value="1">Afghanistan</option>
										<option value="2">Albania</option>
										<option value="3">Algeria</option>
										<option value="4">American Samoa</option>
										<option value="5">Andorra</option>
										<option value="6">Angola</option>
										<option value="7">Anguilla</option>
										<option value="8">Antarctica</option>
										<option value="9">Antigua and Barbuda</option>
										<option value="10">Argentina</option>
										<option value="11">Armenia</option>
										<option value="12">Aruba</option>
								   
									</select>
								</div>
								<div class="form-group required">
									<label for="input-zone" class="control-label"><span className="text-danger">*</span>Region / State</label>
									<select class="form-control" name="zone_id">
										<option value=""> --- Please Select --- </option>
										<option value="3513">Aberdeen</option>
										<option value="3514">Aberdeenshire</option>
										<option value="3515">Anglesey</option>
										<option value="3516">Angus</option>
										<option value="3517">Argyll and Bute</option>
										<option value="3518">Bedfordshire</option>
										<option value="3519">Berkshire</option>
								 
									</select>
								</div>
							</fieldset>
						</div>
						<div class="col-sm-6">
							<fieldset id="shipping-address">
								<legend>Shipping Address</legend>
								<div class="form-group">
									<label for="input-company" class="control-label"><span className="text-danger">*</span>Company</label>
									<input type="text" class="form-control" id="input-company" placeholder="Company" name="company"/>
								</div>
								<div class="form-group required">
									<label for="input-address-1" class="control-label"><span className="text-danger">*</span>Address 1</label>
									<input type="text" class="form-control" id="input-address-1" placeholder="Address 1" name="address_1"/>
								</div>
								<div class="form-group required">
									<label for="input-city" class="control-label"><span className="text-danger">*</span>City</label>
									<input type="text" class="form-control" id="input-city" placeholder="City" name="city"/>
								</div>
								<div class="form-group required">
									<label for="input-postcode" class="control-label"><span className="text-danger">*</span>Post Code</label>
									<input type="text" class="form-control" id="input-postcode" placeholder="Post Code" name="postcode"/>
								</div>
								<div class="form-group required">
									<label for="input-country" class="control-label"><span className="text-danger">*</span>Country</label>
									<select class="form-control" id="input-country" name="country_id">
										<option value=""> --- Please Select --- </option>
										<option value="244">Aaland Islands</option>
										<option value="1">Afghanistan</option>
										<option value="2">Albania</option>
										<option value="3">Algeria</option>
										<option value="4">American Samoa</option>
										<option value="5">Andorra</option>
										<option value="6">Angola</option>
										<option value="7">Anguilla</option>
										<option value="8">Antarctica</option>
										<option value="9">Antigua and Barbuda</option>
										<option value="10">Argentina</option>
										<option value="11">Armenia</option>
										<option value="12">Aruba</option>
									
									</select>
								</div>
								<div class="form-group required">
									<label for="input-zone" class="control-label"><span className="text-danger">*</span>Region / State</label>
									<select class="form-control" id="input-zone" name="zone_id">
										<option value=""> --- Please Select --- </option>
										<option value="3513">Aberdeen</option>
										<option value="3514">Aberdeenshire</option>
										<option value="3515">Anglesey</option>
										<option value="3516">Angus</option>
										<option value="3517">Argyll and Bute</option>
										<option value="3518">Bedfordshire</option>
										<option value="3519">Berkshire</option>
									   
									</select>
								</div>
							</fieldset>
						</div>
					</div>



					<div className="buttons clearfix">
						<div className="float-right">
							<input type="submit" className="btn btn-primary mb-5 save-btn" value="Save Changes"/>
						</div>
					</div>
				</form>
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





export default MyAccount;