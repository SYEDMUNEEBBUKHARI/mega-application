import React from 'react';
import './ProductComparison.css';
import { RiHome4Line, RiArrowDropRightLine } from "react-icons/ri";
import left from "../../Assets/images/4.jpg";


function ProductComparison() {
    return (
        <React.Fragment>
            <div className="container-fluid product-comparison">
                <ul className="breadcrumb">
                    <li style={{ marginRight: '-92px',}}><a className="cstm-width" href="#"><RiHome4Line /><RiArrowDropRightLine style={{fontSize: '27px',}} /></a></li>
                    <li style={{width: '11%',}}><a href="#">Product Comparison</a></li>
                </ul>

                <div className="row">
                    <div className="col-md-12">
                        <h5 className="comparison-title">Product Comparison</h5>
                        <div className="table-responsive">
				<table className="table table-bordered table-hover">
				  <thead>
					<tr>
					  <td colspan="4"><strong>Product Details</strong></td>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td style={{fontSize: '15px',}}>Product</td>
					  <td><a style={{fontSize: '15px',}} href="product.html">Lorem ipsum dolor</a></td>
					  <td><a style={{fontSize: '15px',}} href="product.html">Lorem ipsum dolor</a></td>
					  <td><a style={{fontSize: '15px',}} href="product.html">Lorem ipsum dolor</a></td>
					</tr>
					<tr>
					  <td>Image</td>
					  <td className="text-center"><img className="img-thumbnail" title="Laptop Silver black" alt="Laptop Silver black" width="100px" src={left}/></td>
					  <td className="text-center"><img className="img-thumbnail" title=" Strategies for Acquiring Your Own Laptop " alt=" Strategies for Acquiring Your Own Laptop " width="100px" src={left}/></td>
					  <td className="text-center"><img className="img-thumbnail" title="Aspire Ultrabook Laptop" alt="Aspire Ultrabook Laptop" width="100px" src={left}/></td>
					</tr>
					<tr>
					  <td>Price</td>
					  <td><div className="price"><span className="price-new">$93.73</span> <span className="price-old">$84.36</span> </div></td>
					  <td><div className="price"> <span className="price-new">$45</span> <span className="price-old">$80</span></div></td>
					  <td><div className="price"><span className="price-new">$56</span> </div></td>
					</tr>
					<tr>
					  <td>Model</td>
					  <td>Pt 001</td>
					  <td>Pt 002</td>
					  <td>Pt 003</td>
					</tr>
					<tr>
					  <td>Brand</td>
					  <td>Apple</td>
					  <td>Apple</td>
					  <td>Apple</td>
					</tr>
					<tr>
					  <td>Availability</td>
					  <td>In Stock</td>
					  <td>In Stock</td>
					  <td>Pre-Order</td>
					</tr>
					<tr>
					  <td>Rating</td>
					  <td className="rating">
						<div className="rating-box">
						   <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span>
						   <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span>
						   <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span>
						   <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span>
						   <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span>
						</div>
						Based on 0 reviews.</td>
					  <td className="rating">
						<div className="rating-box">
						   <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span>
						   <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span>
						   <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span>
						   <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span>
						   <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span>
						</div>
						Based on 0 reviews.</td>
					  <td className="rating">
						<div className="rating-box">
						   <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i></span>
						    <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i></span>
						    <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i></span>
						   <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i></span>
						   <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i></span>
						</div>
						Based on 1 reviews.</td>
					</tr>
					<tr>
					  <td>Summary</td>
					  <td className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat..</td>
					  <td className="description"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat..</td>
					  <td className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat..</td>
					</tr>
					<tr>
					  <td>Weight</td>
					  <td>1.50kg</td>
					  <td>1.80kg</td>
					  <td>2.00kg</td>
					</tr>
					<tr>
					  <td>Dimensions (L x W x H)</td>
					  <td>0.00mm x 0.00mm x 0.00mm</td>
					  <td>0.00mm x 0.00mm x 0.00mm</td>
					  <td>0.00cm x 0.00cm x 0.00cm</td>
					</tr>
				  </tbody>
					<thead>
								<tr>
									<td colspan="4">
										<strong>Processor</strong>
									</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Clockspeed</td>
									<td>100mhz</td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
							<thead>
								<tr>
									<td colspan="4">
										<strong>Memory</strong>
									</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>test 1</td>
									<td></td>
									<td>Hammered metal outer - Semi-precious stone embellishments
</td>
									<td></td>
								</tr>
							
								<tr>
									<td>test 2</td>
									<td></td>
									<td>H: 11cm/4" W: 12cm/5" D: 5cm/2"
</td>
									<td></td>
								</tr>
							
								<tr>
									<td>test 3</td>
									<td></td>
									<td>Green - Black - Brown
                            </td>
									<td></td>
								</tr>
							
					<tr>
					  <td></td>
					  <td><input type="button" onclick="" className="btn btn-primary btn-block" value="Add to Cart"/>
						<a className="btn btn-danger btn-block" href="#">Remove</a></td>
					  <td><input type="button" onclick="" className="btn btn-primary btn-block" value="Add to Cart"/>
						<a className="btn btn-danger btn-block" href="#">Remove</a></td>
					  <td><input type="button" onclick="" className="btn btn-primary btn-block" value="Add to Cart"/>
						<a className="btn btn-danger btn-block" href="#">Remove</a></td>
					</tr>
				  </tbody>
				</table>
			  </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}





export default ProductComparison;