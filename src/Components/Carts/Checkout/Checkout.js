import React from 'react';
import './Checkout.css';
import { RiHome4Line, RiArrowDropRightLine } from "react-icons/ri";


function Checkout() {
    return (
        <div className="main-container container-fluid">
            <ul className="breadcrumb">
                <li><a className="cstm-width" href="#"><RiHome4Line /><RiArrowDropRightLine /></a></li>
                <li><a href="#">Checkout</a></li>
            </ul>

        <div className="row">
        <aside className="col-sm-4 col-md-3 content-aside" id="column-left">
                    <h4 class="title">Checkout</h4>
                    <div class="module category-style">
                	<h4 class="modtitle"> Create an Account or Login</h4>
                	<div class="modcontent">
                		<div class="box-category">
                        <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1"> Register Account </label>
                        </div>

                        <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                        />
                        <label class="form-check-label" for="flexRadioDefault2"> Guest Checkout </label>
                        </div>

                        <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                            checked
                        />
                        <label class="form-check-label" for="flexRadioDefault3"> Returning Customer </label>
                        </div>
                		</div>
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

                        <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault6"
                            checked
                        />
                        <label class="form-check-label" for="flexRadioDefault6"> Returning Customer </label>
                        </div>
                		</div>
                	</div>
                            
                            
                            </div>

						</div>



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
                            id="flexRadioDefault7"
                        />
                        <label class="form-check-label" for="flexRadioDefault7"> Register Account </label>
                        </div>

                        <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault8"
                            checked
                        />
                        <label class="form-check-label" for="flexRadioDefault8"> Guest Checkout </label>
                        </div>

                        <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault9"
                            checked
                        />
                        <label class="form-check-label" for="flexRadioDefault9"> Returning Customer </label>
                        </div>
                		</div>
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