import React from 'react';
import './Checkout.css';
import { RiHome4Line, RiArrowDropRightLine } from "react-icons/ri";
import { Checkbox } from 'antd';
import left from "../../../Assets/images/4.jpg";





function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
function Checkout() {
    return (
        <div className="main-container container-fluid">
            <ul className="breadcrumb">
                <li><a className="cstm-width" href="#"><RiHome4Line /><RiArrowDropRightLine /></a></li>
                <li><a href="#">Checkout</a></li>
            </ul>

        <div className="row">
        <aside className="col-sm-4 col-md-3 content-aside" id="column-left">
                    <h4 className="title">Checkout</h4>
                    <div className="module category-style">
                	<h4 className="modtitle"> Create an Account or Login</h4>
                	<div className="modcontent">
                		<div className="box-category">
                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />
                        <label className="form-check-label" for="flexRadioDefault1"> Register Account </label>
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
                		</div>
                	</div>
                    </div>


                    <div className="panel panel-default">
					<div className="panel-heading">
					  <h4 className="panel-title"><i className="fa fa-user"></i> Your Personal Details</h4>
					</div>
					  <div className="panel-body">
							<fieldset id="account">
							  <div className="form-group required">
								<label for="input-payment-firstname" className="control-label cstm-margin"><span classNameName="text-danger">*</span>First Name</label>
								<input type="text" className="form-control cstm-height-input" id="input-payment-firstname" placeholder="Enter your First Name" value="" name="firstname"/>
							  </div>
							  <div className="form-group required">
								<label for="input-payment-lastname" className="control-label cstm-margin"><span classNameName="text-danger">*</span>Last Name</label>
								<input type="text" className="form-control cstm-height-input" id="input-payment-lastname" placeholder="Enter your Last Name" value="" name="lastname"/>
							  </div>
							  <div className="form-group required">
								<label for="input-payment-email" className="control-label cstm-margin"><span classNameName="text-danger">*</span>E-Mail</label>
								<input type="text" className="form-control cstm-height-input" id="input-payment-email" placeholder="Enter your E-Mail" value="" name="email"/>
							  </div>
							  <div className="form-group required">
								<label for="input-payment-telephone" className="control-label cstm-margin"><span classNameName="text-danger">*</span>Telephone</label>
								<input type="text" className="form-control cstm-height-input" id="input-payment-telephone" placeholder="Enter your Telephone" value="" name="telephone"/>
							  </div>
							  <div className="form-group">
								<label for="input-payment-fax" className="control-label cstm-margin"><span classNameName="text-danger">*</span>Fax</label>
								<input type="text" className="form-control cstm-height-input" id="input-payment-fax" placeholder="Enter your Fax" value="" name="fax" />
							  </div>
							</fieldset>
						  </div>
				  </div>




                  <div className="panel panel-default">
					<div className="panel-heading">
					  <h4 className="panel-title"><i className="fa fa-book"></i> Your Address</h4>
					</div>
					  <div className="panel-body">
							<fieldset id="address" className="required">
							  <div className="form-group">
								<label for="input-payment-company" className="control-label cstm-margin"><span classNameName="text-danger">*</span>Company</label>
								<input type="text" className="form-control cstm-height-input" id="input-payment-company" placeholder="Company" value="" name="company"/>
							  </div>
							  <div className="form-group required">
								<label for="input-payment-address-1" className="control-label cstm-margin"><span classNameName="text-danger">*</span>Address 1</label>
								<input type="text" className="form-control cstm-height-input" id="input-payment-address-1" placeholder="Address 1" value="" name="address_1"/>
							  </div>
							  <div className="form-group">
								<label for="input-payment-address-2" className="control-label cstm-margin"><span classNameName="text-danger">*</span>Address 2</label>
								<input type="text" className="form-control cstm-height-input" id="input-payment-address-2" placeholder="Address 2" value="" name="address_2"/>
							  </div>
							  <div className="form-group required">
								<label for="input-payment-city" className="control-label cstm-margin"><span classNameName="text-danger">*</span>City</label>
								<input type="text" className="form-control cstm-height-input" id="input-payment-city" placeholder="City" value="" name="city"/>
							  </div>
							  <div className="form-group required">
								<label for="input-payment-postcode" className="control-label cstm-margin"><span classNameName="text-danger">*</span>Post Code</label>
								<input type="text" className="form-control cstm-height-input" id="input-payment-postcode" placeholder="Post Code" value="" name="postcode"/>
							  </div>
							  <div className="form-group required">
								<label for="input-payment-country" className="control-label cstm-margin"><span classNameName="text-danger">*</span>Country</label>
								<select className="form-control cstm-height-input" id="input-payment-country" name="country_id">
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
								  <option value="252">Ascension Island (British)</option>
								  <option value="13">Australia</option>
								  <option value="14">Austria</option>
								  <option value="15">Azerbaijan</option>
								  <option value="16">Bahamas</option>
								  <option value="17">Bahrain</option>
								  
								</select>
							  </div>
							  <div className="form-group required">
								<label for="input-payment-zone" className="control-label cstm-margin"><span classNameName="text-danger">*</span>Region / State</label>
								<select className="form-control cstm-height-input" id="input-payment-zone" name="zone_id">
								  <option value=""> --- Please Select --- </option>
								  <option value="3513">Aberdeen</option>
								  <option value="3514">Aberdeenshire</option>
								  <option value="3515">Anglesey</option>
								  <option value="3516">Angus</option>
								  <option value="3517">Argyll and Bute</option>
								  <option value="3518">Bedfordshire</option>
								  <option value="3519">Berkshire</option>
								  <option value="3520">Blaenau Gwent</option>
								  <option value="3521">Bridgend</option>
								  <option value="3522">Bristol</option>
								  
								</select>
							  </div>
                              <Checkbox onChange={onChange}>My delivery and billing addresses are the same.</Checkbox>
							</fieldset>
						  </div>
				  </div>
        </aside>
        
        <div className="col-right col-sm-9">
				  <div className="row right-inner no-gutters">
						<div className="col-sm-6">
                            <div class="panel-heading">
							  <h4 class="panel-title"><i class="fa fa-truck"></i> Delivery Method</h4>
							</div>
                            <div className="inner-selection">
                                <p>Please select the preferred shipping method to use on this order.</p>
                            

                        <div class="modcontent">
                		<div class="box-category">
                        <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault4"
                        />
                        <label class="form-check-label" for="flexRadioDefault4"> Register Account </label>
                        </div>

                        <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault5"
                            checked
                        />
                        <label class="form-check-label" for="flexRadioDefault5"> Guest Checkout </label>
                        </div>

                       
                		</div>
                	</div>
                            
                            
                            </div>

						</div>
						<div className="col-sm-6">
                            <div className="panel-heading">
							  <h4 className="panel-title"><i className="fa fa-truck"></i> Payment Method</h4>
							</div>
                            <div className="inner-selection">
                                <p>Please select the preferred shipping method to use on this order.</p>
                            

                        <div className="modcontent">
                		<div className="box-category">
                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault7"
                        />
                        <label className="form-check-label" for="flexRadioDefault7"> Register Account </label>
                        </div>

                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault9"
                            checked
                        />
                        <label className="form-check-label" for="flexRadioDefault9"> Returning Customer </label>
                        </div>
                		</div>
                	</div>
                            
                            
                            </div>
						</div>
                  </div>
                  
					  <div className="panel panel-default auto-top">
						<div className="panel-heading">
						  <h4 className="panel-title"><i className="fa fa-ticket"></i> Do you Have a Coupon or Voucher?</h4>
						</div>
						  <div className="panel-body row">
							<div className="col-sm-6 ">
							<div className="input-group">
							<p style={{fontSize: '12px',}}> 
								<input type="text" className="inner-input" placeholder="Enter your coupon here"/>
								<button class="btn coupon-checkout">Apply Coupon</button>
							</p>
							 
							  </div>
							</div>
							
							<div className="col-sm-6">
							<div className="input-group">
							<p style={{fontSize: '12px',}}> 
								<input type="text" className="inner-input" placeholder="Enter your coupon here"/>
								<button class="btn coupon-Voucher">Apply Voucher</button>
							</p> 
							</div>
							</div>
						  </div>
					  </div>



					  <div className="panel panel-default">
						<div className="panel-heading">
						  <h4 className="panel-title"><i className="fa fa-shopping-cart"></i> Shopping cart</h4>
						</div>
						  <div className="panel-body">
							<div className="table-responsive">
							  <table className="table table-bordered">
								<thead>
								  <tr>
									<td className="text-center">Image</td>
									<td className="text-left">Product Name</td>
									<td className="text-left">Quantity</td>
									<td className="text-right">Unit Price</td>
									<td className="text-right">Total</td>
								  </tr>
								</thead>
								<tbody>
								  <tr>
									<td className="text-center"><a><img width="60px" src={left} alt="Xitefun Causal Wear Fancy Shoes" title="Xitefun Causal Wear Fancy Shoes" className="img-thumbnail" /></a></td>
									<td className="text-left"><a>Emasa rumas gacem</a></td>
									<td className="text-left"><div className="input-group btn-block" style={{minWidth: '100px',}}>
										<input type="text" name="quantity" size="1" className="form-control" />
										<span className="input-group-btn right-updates">
										</span>
										</div>
										</td>
									<td className="text-right">$114.35</td>
									<td className="text-right">$114.35</td>
								  </tr>
								</tbody>
								<tfoot>
								  <tr>
									<td className="text-right" colspan="4"><strong>Sub-Total:</strong></td>
									<td className="text-right">$93.73</td>
								  </tr>
								  <tr>
									<td className="text-right" colspan="4"><strong>Flat Shipping Rate:</strong></td>
									<td className="text-right">$4.69.00</td>
								  </tr>
								  <tr>
									<td className="text-right" colspan="4"><strong>Eco Tax (-2.00):</strong></td>
									<td className="text-right">$3.75.00</td>
								  </tr>
								  <tr>
									<td className="text-right" colspan="4"><strong>VAT (20%):</strong></td>
									<td className="text-right">$19.68</td>
								  </tr>
								  <tr>
									<td className="text-right" colspan="4"><strong>Total:</strong></td>
									<td className="text-right">$121.85</td>
								  </tr>
								</tfoot>
							  </table>
							</div>
						  </div>
					  </div>



					  <div className="panel panel-default">
						<div className="panel-heading">
						  <h4 className="panel-title"><i className="fa fa-pencil"></i> Add Comments About Your Order</h4>
						</div>
						  <div className="panel-body">
							<textarea rows="4" className="form-control" id="confirm_comment" name="comments"></textarea>
							<br />
							
							<Checkbox onChange={onChange}>I have read and agree to the </Checkbox>
							<div className="buttons">
							  <div className="mb-5">
								<input type="button" className="btn btn-primary" id="button-confirm" value="Confirm Order" />
							  </div>
							</div>
						  </div>
					  </div>
		</div>
        </div>
        </div>
    )
}




export default Checkout