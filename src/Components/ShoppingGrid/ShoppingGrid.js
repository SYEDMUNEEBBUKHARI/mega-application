import React from 'react';
import './ShoppingGrid.css';
import banner8 from "../../Assets/images/banner8.jpg";
import banner9 from "../../Assets/images/banner9.jpg";
import banner10 from "../../Assets/images/banner10.jpg";
import banner11 from "../../Assets/images/banner11.jpg";
import banner12 from "../../Assets/images/banner12.jpg";




function ShoppingGrid() {
    return (
        <div class="banners banners7">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div className="grid-brand mb-4">
                                <img src={banner8} alt=""/>
                            </div>

                            <div className="grid-brand">
                                <img src={banner9} alt=""/>
                            </div>
                        </div>

                        <div class="col-lg-6 col-sm-12">
                            <div className="big-grid-brand">
                                <img src={banner10} alt=""/>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-6">
                            <div className="grid-brand mb-4">
                                <img src={banner8} alt=""/>
                            </div>

                            <div className="grid-brand">
                                <img src={banner9} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
    )
}




export default ShoppingGrid