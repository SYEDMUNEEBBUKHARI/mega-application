import React from 'react';
import './RegisterForm.css';
import { RiHome4Line, RiArrowDropRightLine } from "react-icons/ri";


function RegisterForm() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <ul className="breadcrumb">
                    <li><a href="#"><RiHome4Line /><RiArrowDropRightLine style={{fontSize: '27px',}} /></a></li>
                    <li><a href="#">Account</a></li><RiArrowDropRightLine style={{fontSize: '27px',}} />
                    <li><a href="#">Register</a></li>
                </ul>


                <div id="content" className="col-sm-12">
				<h2 className="title">Register Account</h2>
				<p>If you already have an account with us, please login at the <a href="#">login page</a>.</p>
				<form action="" method="post" enctype="multipart/form-data" className="form-horizontal account-register clearfix">
					<fieldset id="account">
						<legend>Your Personal Details</legend>
						<div className="form-group required" style={{display: 'none',}}>
							<label className="col-sm-2 control-label">Customer Group</label>
							<div className="col-sm-10">
								<div className="radio">
									<label>
										<input type="radio" name="customer_group_id" value="1" checked="checked"/> Default
									</label>
								</div>
							</div>
						</div>
						<div className="form-group required">
							<label className="col-sm-2 control-label" for="input-firstname">First Name</label>
							<div className="col-sm-10">
								<input type="text" name="firstname" value="" placeholder="First Name" id="input-firstname" className="form-control" />
							</div>
						</div>
						<div className="form-group required">
							<label className="col-sm-2 control-label" for="input-lastname">Last Name</label>
							<div className="col-sm-10">
								<input type="text" name="lastname" value="" placeholder="Last Name" id="input-lastname" className="form-control" />
							</div>
						</div>
						<div className="form-group required">
							<label className="col-sm-2 control-label" for="input-email">E-Mail</label>
							<div className="col-sm-10">
								<input type="email" name="email" value="" placeholder="E-Mail" id="input-email" className="form-control" />
							</div>
						</div>
						<div className="form-group required">
							<label className="col-sm-2 control-label" for="input-telephone">Telephone</label>
							<div className="col-sm-10">
								<input type="tel" name="telephone" value="" placeholder="Telephone" id="input-telephone" className="form-control" />
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-2 control-label" for="input-fax">Fax</label>
							<div className="col-sm-10">
								<input type="text" name="fax" value="" placeholder="Fax" id="input-fax" className="form-control" />
							</div>
						</div>
					</fieldset>
					<fieldset id="address">
						<legend>Your Address</legend>
						<div className="form-group">
							<label className="col-sm-2 control-label" for="input-company">Company</label>
							<div className="col-sm-10">
								<input type="text" name="company" value="" placeholder="Company" id="input-company" className="form-control" />
							</div>
						</div>
						<div className="form-group required">
							<label className="col-sm-2 control-label" for="input-address-1">Address 1</label>
							<div className="col-sm-10">
								<input type="text" name="address_1" value="" placeholder="Address 1" id="input-address-1" className="form-control" />
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-2 control-label" for="input-address-2">Address 2</label>
							<div className="col-sm-10">
								<input type="text" name="address_2" value="" placeholder="Address 2" id="input-address-2" className="form-control" />
							</div>
						</div>
						<div className="form-group required">
							<label className="col-sm-2 control-label" for="input-city">City</label>
							<div className="col-sm-10">
								<input type="text" name="city" value="" placeholder="City" id="input-city" className="form-control" />
							</div>
						</div>
						<div className="form-group required">
							<label className="col-sm-2 control-label" for="input-postcode">Post Code</label>
							<div className="col-sm-10">
								<input type="text" name="postcode" value="" placeholder="Post Code" id="input-postcode" className="form-control"/>
							</div>
						</div>
						<div className="form-group required">
							<label className="col-sm-2 control-label" for="input-country">Country</label>
							<div className="col-sm-10">
								<select name="country_id" id="input-country" className="form-control">
									<option value=""> --- Please Select --- </option>
									<option value="244">Aaland Islands</option>
									<option value="1">Afghanistan</option>
									<option value="2">Albania</option>
									<option value="3">Algeria</option>
									<option value="4">American Samoa</option>
									<option value="5">Andorra</option>
									<option value="6">Angola</option>
								</select>
							</div>
						</div>
						<div className="form-group required">
							<label className="col-sm-2 control-label" for="input-zone">Region / State</label>
							<div className="col-sm-10">
								<select name="zone_id" id="input-zone" className="form-control">
									<option value=""> --- Please Select --- </option>
									<option value="3513">Aberdeen</option>
									<option value="3514">Aberdeenshire</option>
									<option value="3515">Anglesey</option>
									<option value="3516">Angus</option>
								  
								</select>
							</div>
						</div>
					</fieldset>
					<fieldset>
						<legend>Your Password</legend>
						<div className="form-group required">
							<label className="col-sm-2 control-label" for="input-password">Password</label>
							<div className="col-sm-10">
								<input type="password" name="password" value="" placeholder="Password" id="input-password" className="form-control"/>
							</div>
						</div>
						<div className="form-group required">
							<label className="col-sm-2 control-label" for="input-confirm">Password Confirm</label>
							<div className="col-sm-10">
								<input type="password" name="confirm" value="" placeholder="Password Confirm" id="input-confirm" className="form-control"/>
							</div>
						</div>
					</fieldset>
					<fieldset>
						<legend>Newsletter</legend>
						<div className="form-group">
							<label className="col-sm-2 control-label">Subscribe</label>
							<div className="col-sm-10">
								<label className="radio-inline">
									<input type="radio" name="newsletter" value="1"/> Yes
								</label>
								<label className="radio-inline">
									<input type="radio" name="newsletter" value="0" checked="checked"/> No
								</label>
							</div>
						</div>
					</fieldset>
					<div className="buttons">
						<div className="pull-right">I have read and agree to the <a href="#" className="agree"><b>Pricing Tables</b></a>
							<input className="box-checkbox" type="checkbox" name="agree" value="1" /> &nbsp;
							<input type="submit" value="Continue" className="btn btn-primary" />
						</div>
					</div>
				</form>
			</div>
            </div>
        </React.Fragment>
    )
}



export default RegisterForm;
