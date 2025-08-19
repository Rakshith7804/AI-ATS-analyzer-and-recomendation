import React from "react";

const HowItWorks = () => (
  <section className="py-5 bg-white text-center">
    <h2 className="h2 fw-bold text-dark mb-5">How It Works</h2>

    <div className="container">
      <div className="row">
        {/* For Job Seekers */}
        <div className="col-md-6 mb-5 border rounded">
          <h3 className="h5 text-dark mb-4">For Job Seekers</h3>
          <div className="position-relative d-flex justify-content-between align-items-center">

            {/* Horizontal line behind icons */}
            <div
              className="position-absolute start-0 w-100"
              style={{
                top: "25px",
                height: "2px",
                backgroundColor: "#e0e0e0",
                zIndex: 0,
              }}
            ></div>

            {/* Step 1 */}
            <div className="text-center position-relative bg-white ">
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center border fs-3"
                style={{ width: "50px", height: "50px", zIndex: 1, borderColor: "#dcdcdc" }}
              >
                📄
              </div>
              <p className="mt-2 small fw-semibold">Upload Resume</p>
            </div>

            {/* Step 2 */}
            <div className="text-center position-relative bg-white">
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center mx-auto border fs-3"
                style={{ width: "50px", height: "50px", zIndex: 1, borderColor: "#dcdcdc" }}
              >
                📊
              </div>
              <p className="mt-2 small fw-semibold">Get Score & Insights</p>
            </div>

            {/* Step 3 */}
            <div className="text-center position-relative bg-white">
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center mx-auto border fs-3"
                style={{ width: "50px", height: "50px", zIndex: 1, borderColor: "#dcdcdc" }}
              >
                👤
              </div>
              <p className="mt-2 small fw-semibold">Apply for Best-Matched Jobs</p>
            </div>
          </div>
        </div>

        {/* For Recruiters */}
        <div className="col-md-6 mb-5 border rounded">
          <h3 className="h5 text-dark mb-4">For Recruiters</h3>
          <div className="position-relative d-flex justify-content-between align-items-center">

            {/* Horizontal line behind icons */}
            <div
              className="position-absolute start-0 w-100"
              style={{
                top: "25px",
                height: "2px",
                backgroundColor: "#e0e0e0",
                zIndex: 0,
              }}
            ></div>

            {/* Step 1 */}
            <div className="text-center position-relative bg-white ">
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center mx-auto border fs-3"
                style={{ width: "50px", height: "50px", zIndex: 1, borderColor: "#dcdcdc" }}
              >
                📢
              </div>
              <p className="mt-2 small fw-semibold">Post Job</p>
            </div>

            {/* Step 2 */}
            <div className="text-center position-relative bg-white">
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center mx-auto border fs-3"
                style={{ width: "50px", height: "50px", zIndex: 1, borderColor: "#dcdcdc" }}
              >
                📤
              </div>
              <p className="mt-2 small fw-semibold">Upload Resumes</p>
            </div>

            {/* Step 3 */}
            <div className="text-center position-relative bg-white">
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center mx-auto border fs-3"
                style={{ width: "50px", height: "50px", zIndex: 1, borderColor: "#dcdcdc" }}
              >
                🏆
              </div>
              <p className="mt-2 small fw-semibold">AI Ranks Candidates</p>
            </div>

            {/* Step 4 */}
            <div className="text-center position-relative bg-white">
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center mx-auto border fs-3"
                style={{ width: "50px", height: "50px", zIndex: 1, borderColor: "#dcdcdc" }}
              >
                ✅
              </div>
              <p className="mt-2 small fw-semibold">Hire the Best Fit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;