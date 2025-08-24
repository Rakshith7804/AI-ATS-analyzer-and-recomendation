import React from "react";

const Jobposting = () => {
    return (
    <div className="col-12">
          <h3 className="h5 mb-3 text-gray-800">Recent Job Postings</h3>
          <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
            <div className="d-flex justify-content-between align-items-center mb-2 text-gray-700">
              <span>Job</span>
              <span>Status</span>
              <span>Status</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2 text-gray-700">
              <span>Marketing Specialist</span>
              <span>Active</span>
              <span>Active</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2 text-gray-700">
              <span>Software Developer</span>
              <span>$25</span>
              <span>Active</span>
            </div>
            <div className="d-flex justify-content-between align-items-center text-gray-700">
              <span>Sales Executive</span>
              <span>27</span>
              <span>Active</span>
            </div>
          </div>
        </div>
      );
    };


export default Jobposting;