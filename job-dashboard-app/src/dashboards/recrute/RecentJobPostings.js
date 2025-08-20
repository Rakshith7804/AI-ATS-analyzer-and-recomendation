import React from "react";

const Jobposting = () => {
    return (
    <div className="col-12">
          <h3 className="h5 mb-3">Recent Job Postings</h3>
          <div className="bg-secondary p-3 rounded">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>Job</span>
              <span>Status</span>
              <span>Status</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>Marketing Specialist</span>
              <span>Active</span>
              <span>Active</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>Software Developer</span>
              <span>25$</span>
              <span>Active</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>Sales Executive</span>
              <span>27</span>
              <span>Active</span>
            </div>
          </div>
        </div>
      );
    };


export default Jobposting;