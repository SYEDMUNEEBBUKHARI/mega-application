import React from 'react';
import './Accessories.css';
import banner7 from "../../Assets/images/banner7.jpg";
import product1 from "../../Assets/images/chair.jpg";
import GridLayout from "../Accessories/GridLayout/GridLayout";
import sidebar from "../../Assets/images/sidebar.jpg";



function Accessories() {
    return (
        <section className="accessories-menu">
        <div className="container-fluid">
            <ul class="breadcrumb">
                {/* <li><a href="#"><i class="fa fa-home"></i></a></li> */}
                <li><a href="#">Smartphone &amp; Tablets</a></li>
            </ul>
            <div className="row">
                <aside className="col-sm-4 col-md-3 content-aside" id="column-left">
                    <div class="module category-style">
                	<h3 class="modtitle">Categories</h3>
                	<div class="modcontent">
                		<div class="box-category">
                			<ul id="cat_accordion" class="list-group">
                				<li class="hadchild cutom-parent-li"><a href="category.html" class="cutom-parent">Smartphone &amp; Tablets<span class="dcjq-icon"></span></a>   <span class="button-view  fa fa-plus-square-o"></span>
                					<ul style={{display: 'none',}}>
                						<li><a href="category.html">Men's Watches</a></li>
                						<li><a href="category.html">Women's Watches</a></li>
                						<li><a href="category.html">Kids' Watches</a></li>
                						<li><a href="category.html">Accessories</a></li>
                					</ul>
                				</li>
                				
                				<li class=""><a href="category.html" class="cutom-parent">Health &amp; Beauty</a>  <span class="dcjq-icon"></span></li>
                				<li class=""><a href="category.html" class="cutom-parent">Kids &amp; Babies</a>    <span class="dcjq-icon"></span></li>
                				<li class=""><a href="category.html" class="cutom-parent">Sports</a>  <span class="dcjq-icon"></span></li>
                				<li class=""><a href="category.html" class="cutom-parent">Home &amp; Garden</a><span class="dcjq-icon"></span></li>
                				<li class=""><a href="category.html" class="cutom-parent">Wines &amp; Spirits</a>  <span class="dcjq-icon"></span></li>
                			</ul>
                		</div>
                	</div>
                    </div>

                    <div class="module category-style">
                        <h3 class="modtitle">Latest Products</h3>
                        <div className="row outline">
                            <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>



                        {/* second item */}
                        <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>




                            {/* third item */}
                            <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>




                            {/* fourth item */}
                            <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>
                        </div>
                    </div>


                    <div class="module banner-left hidden-xs ">
                        <div class="banner-sidebar banners">
                            <div>
                                <a title="Banner Image" href="#"> 
                                <img src={sidebar} alt="Banner Image" /> 
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="col-md-9 col-sm-8">
                    <h3 class="title-category ">Accessories</h3>
                    <div className="accessories-show">
                        <img src={banner7} alt="" />
                    </div>

                    <GridLayout />
                </div>

            </div>
            
        </div>
        </section>
    )
}





export default Accessories