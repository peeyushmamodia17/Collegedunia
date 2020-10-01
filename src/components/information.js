import React from 'react';
import Img from "./college_02.jpg";

const Info = (props) => {
    const {college}=props;
  return (
    <div className="head-container">
             
              <div className="detail">
                  <div className="detail1">
                    <div className="img-container">
                        <img className="img" src={Img} alt="This is a image"></img>
                       
                             <p className="best">{college.tags[0]}</p>
                             <p className="range">{college.tags[1]}</p>
                            
                       
                    <p className="content">{college.ranking}</p>
                        <div className="content1">
                          <p>3.9/5</p>
                          <p>
                            {college.rating_remarks}
                          </p>
                        </div>
                        <div className="promote">
                          <p>PROMOTED</p>
                        </div>
                    </div>
                    <div className="detail-component">
                      <div className="detail-component1">
                          <div className="detail-component2">
                            <h3>{college.college_name}</h3>
                            <h2>{college.rating}*</h2>
                          </div>
                         
                          <div className="detail-component3">
                            <p>{college.nearest_place[0]}</p>
                            <p id="range">|  {college.nearest_place[1]}</p>
                          </div>
                          <div className="detail-component4">
                            <p id="percentage">
                              <b>93% Match</b>
                            </p>
                            <p>: {college.famous_nearest_places}</p>
                          </div>
                          <div className="detail-component5">
                                <p><b>{college.offertext}</b> </p>
                          </div>
                      </div>
                      <div className="detail-comp">
                          <div className="detail-comp1">
                            <p id="id1">
                              Rs.{college.original_fees}
                            </p>
                            <p id="id2">
                              {college.discount}
                            </p>
                          </div>
                          <div className="detail-comp2">
                            <p><b>Rs. {college.discounted_fees}</b></p>
                          </div>
                          <div className="detail-comp3">
                            <p>{college.fees_cycle}</p>
                          </div>
                          <div className="detail-comp4">
                            <p><b>{college.amenties}</b></p>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
              
            </div>
  );
}

export default Info;