import React from 'react';
import './BlogMetaData.css';
import banner10 from "../../../Assets/images/banner10.jpg";
import profile from "../../../Assets/images/1.jpg";
import banner1 from "../../../Assets/images/banner1.jpg";
import banner2 from "../../../Assets/images/banner2.jpg";



function BlogMetaData() {
    return (
        <React.Fragment>
            <section className="blog_area single-post-area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 posts-list">
                        <div className="single-post row">
                            <div className="col-lg-12">
                                <div className="feature-img">
                                    <img className="img-fluid" src={banner10} alt="" />
                                </div>									
                            </div>
                            <div className="col-lg-3  col-md-3">
                                <div className="blog_info">
                                    <div className="post_tag">
                                        <a href="#">Food,</a>
                                        <a className="active" href="#">Technology,</a><br />
                                        <a href="#">Politics,</a>
                                        <a href="#">Lifestyle</a>
                                    </div>
                                    <ul className="blog_meta list">
                                        <li><a href="#">Mark wiens<i className="lnr lnr-user"></i></a></li>
                                        <li><a href="#">12 Dec, 2017<i className="lnr lnr-calendar-full"></i></a></li>
                                        <li><a href="#">1.2M Views<i className="lnr lnr-eye"></i></a></li>
                                        <li><a href="#">06 Comments<i className="lnr lnr-bubble"></i></a></li>
                                    </ul>
                                    <ul className="social-links">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-github"></i></a></li>
                                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9 blog_details">
                                <h2>Astronomy Binoculars A Great Alternative</h2>
                                <p className="excert">
                                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                                </p>
                                <p>
                                    Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                                </p>
                                <p>
                                    Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                                </p>
                            </div>
                            <div className="col-lg-12">
                                <div className="quotes">
                                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.										
                                </div>
                                <div className="row bottom-info">
                                    <div className="col-6">
                                        <img className="img-fluid" src={banner10} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img className="img-fluid" src={banner10} alt="" />
                                    </div>	
                                    <div className="col-lg-12 mt-25">
                                        <p>
                                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.
                                        </p>
                                        <p>
                                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.
                                        </p>											
                                    </div>									
                                </div>
                            </div>
                        </div>
                        <div className="navigation-area">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                    <div className="thumb">
                                        <a href="#"><img className="img-fluid" src={profile} alt="" /></a>
                                    </div>
                                    <div className="arrow">
                                        <a href="#"><span className="lnr text-white lnr-arrow-left"></span></a>
                                    </div>
                                    <div className="detials">
                                        <p>Prev Post</p>
                                        <a href="#"><h4>Space The Final Frontier</h4></a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                    <div className="detials">
                                        <p>Next Post</p>
                                        <a href="#"><h4>Telescopes 101</h4></a>
                                    </div>
                                    <div className="arrow">
                                        <a href="#"><span className="lnr text-white lnr-arrow-right"></span></a>
                                    </div>
                                    <div className="thumb">
                                        <a href="#"><img className="img-fluid" src={profile} alt="" /></a>
                                    </div>										
                                </div>									
                            </div>
                        </div>
                        <div className="comments-area">
                            <h4>05 Comments</h4>
                            <div className="comment-list">
                                <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                            <img src={profile} alt="" />
                                        </div>
                                        <div className="desc">
                                            <h5><a href="#">Emilly Blunt</a></h5>
                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                            <p className="comment">
                                                Never say goodbye till the end comes!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="reply-btn">
                                           <a href="" className="btn-reply text-uppercase">reply</a> 
                                    </div>
                                </div>
                            </div>	
                            <div className="comment-list left-padding">
                                <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                            <img src={profile} alt="" />
                                        </div>
                                        <div className="desc">
                                            <h5><a href="#">Elsie Cunningham</a></h5>
                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                            <p className="comment">
                                                Never say goodbye till the end comes!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="reply-btn">
                                           <a href="" className="btn-reply text-uppercase">reply</a> 
                                    </div>
                                </div>
                            </div>	
                            <div className="comment-list left-padding">
                                <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                        <img src={profile} alt="" />
                                        </div>
                                        <div className="desc">
                                            <h5><a href="#">Annie Stephens</a></h5>
                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                            <p className="comment">
                                                Never say goodbye till the end comes!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="reply-btn">
                                           <a href="" className="btn-reply text-uppercase">reply</a> 
                                    </div>
                                </div>
                            </div>	
                            <div className="comment-list">
                                <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                        <img src={profile} alt="" />
                                        </div>
                                        <div className="desc">
                                            <h5><a href="#">Maria Luna</a></h5>
                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                            <p className="comment">
                                                Never say goodbye till the end comes!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="reply-btn">
                                           <a href="" className="btn-reply text-uppercase">reply</a> 
                                    </div>
                                </div>
                            </div>	
                            <div className="comment-list">
                                <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                        <img src={profile} alt="" />
                                        </div>
                                        <div className="desc">
                                            <h5><a href="#">Ina Hayes</a></h5>
                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                            <p className="comment">
                                                Never say goodbye till the end comes!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="reply-btn">
                                           <a href="" className="btn-reply text-uppercase">reply</a> 
                                    </div>
                                </div>
                            </div>	                                             				
                        </div>
                        <div className="comment-form">
                            <h4>Leave a Reply</h4>
                            <form>
                                <div className="form-group form-inline">
                                  <div className="form-group col-lg-6 col-md-6 name">
                                    <input type="text" className="form-control" id="name" placeholder="Enter Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name'" />
                                  </div>
                                  <div className="form-group col-lg-6 col-md-6 email">
                                    <input type="email" className="form-control" id="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" />
                                  </div>										
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control mb-10" rows="5" name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required=""></textarea>
                                </div>
                                <a href="#" className="primary-btn post-comment">Post Comment</a>	
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog_right_sidebar">
                            <aside className="single_sidebar_widget search_widget">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search Posts" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button"><i className="lnr lnr-magnifier"></i></button>
                                    </span>
                                </div>
                                <div className="br"></div>
                            </aside>
                            <aside className="single_sidebar_widget author_widget">
                                <img className="author_img rounded-circle" src={profile} alt="" />
                                <h4>Charlie Barber</h4>
                                <p>Senior blog writer</p>
                                <div className="social_icon">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-github"></i></a>
                                    <a href="#"><i className="fa fa-behance"></i></a>
                                </div>
                                <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
                                <div className="br"></div>
                            </aside>
                            <aside className="single_sidebar_widget popular_post_widget">
                                <h3 className="widget_title">Popular Posts</h3>
                                <div className="media post_item">
                                    <img src={banner1} alt="post" />
                                    <div className="media-body">
                                        <a href="blog-details.html"><h3>Space The Final Frontier</h3></a>
                                        <p>02 Hours ago</p>
                                    </div>
                                </div>
                                <div className="media post_item">
                                    <img src={banner2} alt="post" />
                                    <div className="media-body">
                                        <a href="blog-details.html"><h3>The Amazing Hubble</h3></a>
                                        <p>02 Hours ago</p>
                                    </div>
                                </div>
                                <div className="media post_item">
                                <img src={banner2} alt="post" />
                                    <div className="media-body">
                                        <a href="blog-details.html"><h3>Astronomy Or Astrology</h3></a>
                                        <p>03 Hours ago</p>
                                    </div>
                                </div>
                                <div className="media post_item">
                                <img src={banner1} alt="post" />
                                    <div className="media-body">
                                        <a href="blog-details.html"><h3>Asteroids telescope</h3></a>
                                        <p>01 Hours ago</p>
                                    </div>
                                </div>
                                <div className="br"></div>
                            </aside>
                            <aside className="single_sidebar_widget ads_widget">
                                <a href="#"><img className="img-fluid" src="img/blog/add.jpg" alt="" /></a>
                                <div className="br"></div>
                            </aside>
                            <aside className="single_sidebar_widget post_category_widget">
                                <h4 className="widget_title">Post Catgories</h4>
                                <ul className="list cat-list">
                                    <li>
                                        <a href="#" className="d-flex justify-content-between">
                                            <p>Technology</p>
                                            <p>37</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex justify-content-between">
                                            <p>Lifestyle</p>
                                            <p>24</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex justify-content-between">
                                            <p>Fashion</p>
                                            <p>59</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex justify-content-between">
                                            <p>Art</p>
                                            <p>29</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex justify-content-between">
                                            <p>Food</p>
                                            <p>15</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex justify-content-between">
                                            <p>Architecture</p>
                                            <p>09</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex justify-content-between">
                                            <p>Adventure</p>
                                            <p>44</p>
                                        </a>
                                    </li>															
                                </ul>
                                <div className="br"></div>
                            </aside>
                            <aside className="single-sidebar-widget newsletter_widget">
                                <h4 className="widget_title">Newsletter</h4>
                                <p>
                                Here, I focus on a range of items and features that we use in life without
                                giving them a second thought.
                                </p>
                                <div className="form-group d-flex flex-row">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email'" />
                                    </div>
                                    <a href="#" className="bbtns">Subcribe</a>
                                </div>	
                                <p className="text-bottom">You can unsubscribe at any time</p>	
                                <div className="br"></div>							
                            </aside>
                            <aside className="single-sidebar-widget tag_cloud_widget">
                                <h4 className="widget_title">Tag Clouds</h4>
                                <ul className="list">
                                    <li><a href="#">Technology</a></li>
                                    <li><a href="#">Fashion</a></li>
                                    <li><a href="#">Architecture</a></li>
                                    <li><a href="#">Fashion</a></li>
                                    <li><a href="#">Food</a></li>
                                    <li><a href="#">Technology</a></li>
                                    <li><a href="#">Lifestyle</a></li>
                                    <li><a href="#">Art</a></li>
                                    <li><a href="#">Adventure</a></li>
                                    <li><a href="#">Food</a></li>
                                    <li><a href="#">Lifestyle</a></li>
                                    <li><a href="#">Adventure</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    )
}




export default BlogMetaData;
