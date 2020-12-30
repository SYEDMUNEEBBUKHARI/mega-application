import React from 'react';
import './UserLogin.css';
import { RiHome4Line, RiArrowDropRightLine } from "react-icons/ri";


function UserLogin() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <ul className="breadcrumb">
                    <li><a href="#"><RiHome4Line /><RiArrowDropRightLine style={{fontSize: '27px',}} />Account</a></li>
                    <RiArrowDropRightLine style={{fontSize: '27px',}} /><li><a href="#">Login</a></li>
                </ul>
		
		    <div className="row mb-5">
			<div id="content" className="col-sm-12">
				<div className="page-login">
				
					<div className="account-border">
						<div className="row">
							<div className="col-sm-6 new-customer">
								<div className="well">
									<h2><i className="fa fa-file-o" aria-hidden="true"></i> New Customer</h2>
									<p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
								</div>
								<div className="bottom-form">
									<a href="#" className="btn btn-default btn-color pull-right">Continue</a>
								</div>
							</div>
							
						<div className="col-sm-6 customer-login">
							<form action="#" method="post">
									<div className="well">
										<h2><i className="fa fa-file-text-o" aria-hidden="true"></i> Returning Customer</h2>
										<p><strong>I am a returning customer</strong></p>
										<div className="form-group">
											<label className="control-label " for="input-email">E-Mail Address</label>
											<input type="text" name="email" id="input-email" className="form-control"/>
										</div>
										<div className="form-group">
											<label className="control-label" for="input-password">Password</label>
											<input type="password" name="password" id="input-password" className="form-control" />
										</div>
									</div>
									<div className="bottom-form">
										<a href="#" className="forgot">Forgotten Password</a>
										<input type="submit" value="Login" className="btn btn-default btn-color pull-right"/>
									</div>
							</form>

								</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
        </React.Fragment>
    )
}




export default UserLogin;