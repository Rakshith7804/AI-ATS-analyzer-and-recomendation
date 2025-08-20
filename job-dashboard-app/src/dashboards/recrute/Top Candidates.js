import React from "react";

const TopCandidates = () => {
  return (
    <>
    <div className="col-6">
          <h3 className="h5 mb-3">Top Candidates</h3>
          <div className="bg-secondary p-3 rounded">
            <div className="d-flex align-items-center mb-3">
              <img src="https://via.placeholder.com/40" alt="Rakshith R" className="rounded-circle me-2" />
              <div>
                <p className="mb-0">Rakshith R</p>
                <p className="mb-0 text-muted">@rakshith_roors</p>
              </div>
              <span className="ms-auto">27%</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src="https://via.placeholder.com/40" alt="Ananya S" className="rounded-circle me-2" />
              <div>
                <p className="mb-0">Ananya S</p>
                <p className="mb-0 text-muted">@anansis_doble</p>
              </div>
              <span className="ms-auto">85%</span>
            </div>
            <div className="d-flex align-items-center">
              <img src="https://via.placeholder.com/40" alt="Mohammed S" className="rounded-circle me-2" />
              <div>
                <p className="mb-0">Mohammed S</p>
                <p className="mb-0 text-muted">@srifembhy</p>
              </div>
              <span className="ms-auto">47%</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <h3 className="h5 mb-3">AI Insights</h3>
          <div className="bg-secondary p-3 rounded">
            <p className="mb-0">???</p>
            <p className="mb-0 text-muted">60% applications for Software Developer lack skill ?</p>
            <div className="d-flex justify-content-end mt-2">
              <button className="btn btn-outline-light btn-sm me-2">View</button>
              <button className="btn btn-outline-light btn-sm">Message</button>
            </div>
          </div>
        </div>
      </>
  );
};

export default TopCandidates;