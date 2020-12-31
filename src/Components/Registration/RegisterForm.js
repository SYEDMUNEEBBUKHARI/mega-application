import React from 'react';
import './RegisterForm.css';
import { RiHome4Line, RiArrowDropRightLine } from "react-icons/ri";
import { Radio } from 'antd';
import { Checkbox } from 'antd';



function RegisterForm() {
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
                    <RiArrowDropRightLine style={{fontSize: '27px',}} /><li><a href="#">Register</a></li>
            </ul>

		<div className="row">
			<div id="content" className="col-sm-12">
				<h5 class="title">Register Account</h5>
				<p>If you already have an account with us, please login at the <a href="#">login page</a>.</p>

			<div className="personal-details">
				<h5 className="top-title">Your Personal Details</h5>

			<form action method="post">
				<label className="personal-data-labels"><span className="text-danger">*</span>First Name</label>
                <input className="personal-data-input" type="text" placeholder="Enter your First Name" />

				<label className="personal-data-labels"><span className="text-danger">*</span>Last Name</label>
                <input className="personal-data-input" type="text" placeholder="Enter your Last Name" />

				<label className="personal-data-labels"><span className="text-danger">*</span>Email</label>
                <input className="personal-data-input" type="email" placeholder="Enter your Email" />

				<label className="personal-data-labels"><span className="text-danger">*</span>Telephone</label>
                <input className="personal-data-input" type="text" placeholder="Enter your Telephone" />

				<label className="personal-data-labels"><span className="text-danger">*</span>Fax</label>
                <input className="personal-data-input" type="text" placeholder="Enter your Fax" />
				
			</form>
			</div>



			<div className="address-details">
				<h5 className="top-title">Your Address</h5>

			<form action method="post">
				<label className="personal-data-labels"><span className="text-danger">*</span>Company</label>
                <input className="personal-data-input" type="text" placeholder="Company" />

				<label className="personal-data-labels"><span className="text-danger">*</span>Address 1</label>
                <input className="personal-data-input" type="text" placeholder="Enter Address 1" />

				<label className="personal-data-labels"><span className="text-danger">*</span>Address 2</label>
                <input className="personal-data-input" type="text" placeholder="Enter Address 2" />

				<label className="personal-data-labels"><span className="text-danger">*</span>City</label>
                <input className="personal-data-input" type="text" placeholder="Enter your city" />

				<label className="personal-data-labels"><span className="text-danger">*</span>Post Code</label>
                <input className="personal-data-input" type="text" placeholder="Enter post code" />

				<label style={{width: '6%', marginLeft: '142px', fontSize: '13px',}}><span className="text-danger">*</span>Country</label>
                <select className="mdb-select md-form form-selects" searchable="Search here..">
					<option value=""> --- Please Select --- </option>
                    <option value="1">USA</option>
                    <option value="2">Germany</option>
                    <option value="3">France</option>
                    <option value="3">Poland</option>
                    <option value="3">Japan</option>
                </select>

                <label style={{width: '9%', marginLeft: '104px',fontSize: '13px',}}><span className="text-danger">*</span>Region / State</label>
                <select style={{    width: '82%',}} className="mdb-select md-form form-selects" searchable="Search here..">
				<option value=""> --- Please Select --- </option>
                    <option value="1">USA</option>
                    <option value="2">Germany</option>
                    <option value="3">France</option>
                    <option value="3">Poland</option>
                    <option value="3">Japan</option>
                </select>
			</form>
			</div>




			<div className="password-details">
				<h5 className="top-title">Your Password</h5>

			<form action method="post">
				<label className="password-data-labels"><span className="text-danger">*</span>Password</label>
                <input className="personal-data-input" type="password" placeholder="Enter your password" />

				<label className="password-data-labels"><span className="text-danger">*</span>Confirm Password</label>
                <input className="personal-data-input" type="password" placeholder="Enter confirm password" />
			</form>
			</div>



			<div className="newsletter">
				<h5 className="top-title">Newsletter</h5>

				<div className="horizontal-btn">
					<span className="mr-5" style={{marginLeft: '115px,'}}>Subscribe</span>
					<Radio.Group onChange={onChange} value={value}>
						<Radio value={1}>Yes</Radio>
						<Radio value={2}>No</Radio>
					</Radio.Group>
				</div>
			</div>


			<div class="box">
				<div className="p-right">
				<Checkbox onChange={onChange}>I have read and agree to the<a href="#" class="agree"><b>Pricing Tables</b></a> </Checkbox>
				<input type="submit" value="Continue" class="btn btn-primary continues" />
			</div>
			</div>
			</div>
		</div>
    </div>
</React.Fragment>
    )
}



export default RegisterForm;
