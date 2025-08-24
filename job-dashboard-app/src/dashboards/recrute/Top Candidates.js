import React from "react";

const TopCandidates = () => {
  return (
    <>
          <div className="col-6">
            <h3 className="h5 mb-3 text-gray-800">Top Candidates</h3>
            <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
              <div className="d-flex align-items-center mb-3">
                <img src="https://via.placeholder.com/40" alt="Rakshith R" className="rounded-circle me-2" />
                <div>
                  <p className="mb-0 text-gray-800">Rakshith R</p>
                  <p className="mb-0 text-gray-500">@rakshith_roors</p>
                </div>
                <span className="ms-auto text-blue-600">27%</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <img src="https://via.placeholder.com/40" alt="Ananya S" className="rounded-circle me-2" />
                <div>
                  <p className="mb-0 text-gray-800">Ananya S</p>
                  <p className="mb-0 text-gray-500">@anansis_doble</p>
                </div>
                <span className="ms-auto text-blue-600">85%</span>
              </div>
              <div className="d-flex align-items-center">
                <img src="https://via.placeholder.com/40" alt="Mohammed S" className="rounded-circle me-2" />
                <div>
                  <p className="mb-0 text-gray-800">Mohammed S</p>
                  <p className="mb-0 text-gray-500">@srifembhy</p>
                </div>
                <span className="ms-auto text-blue-600">47%</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <h3 className="h5 mb-3 text-gray-800">AI Insights</h3>
            <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
              <p className="mb-0 text-gray-800">???</p>
              <p className="mb-0 text-gray-500">60% applications for Software Developer lack skill ?</p>
              <div className="d-flex justify-content-end mt-2">
                <button className="btn btn-outline-primary btn-sm me-2">View</button>
                <button className="btn btn-outline-primary btn-sm">Message</button>
              </div>
            </div>
          </div>
        </>
  );
};

export default TopCandidates;