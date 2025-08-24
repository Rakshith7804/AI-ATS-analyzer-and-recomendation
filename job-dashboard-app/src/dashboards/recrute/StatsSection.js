import React from "react";

const StatsSection = () => {
    return (
    <div className="col-12">
          <div className="d-flex justify-content-between mb-4">
            <h2 className="h4 text-gray-800">DASHBOARD</h2>
          </div>
          <hr style={{ borderColor: '#e5e7eb' }}></hr>
          <div className="row g-3 mb-4">
            <div className="col-3">
              <div className="bg-white p-3 rounded shadow-sm border border-gray-200 text-center">
                <h3 className="text-blue-600">12</h3>
                <p className="mb-0 text-gray-800">Listings</p>
                <p className="mb-0 text-gray-500">Dutied</p>
              </div>
            </div>
            <div className="col-3">
              <div className="bg-white p-3 rounded shadow-sm border border-gray-200 text-center">
                <h3 className="text-blue-600">258</h3>
                <p className="mb-0 text-gray-800">Applications</p>
                <p className="mb-0 text-gray-500">Received</p>
              </div>
            </div>
            <div className="col-3">
              <div className="bg-white p-3 rounded shadow-sm border border-gray-200 text-center">
                <h3 className="text-blue-600">27</h3>
                <p className="mb-0 text-gray-800">Talent's</p>
                <p className="mb-0 text-gray-500">Softedged</p>
              </div>
            </div>
            <div className="col-3">
              <div className="bg-white p-3 rounded shadow-sm border border-gray-200 text-center">
                <h3 className="text-blue-600">6</h3>
                <p className="mb-0 text-gray-800">Hims</p>
                <p className="mb-0 text-gray-500">Madi:</p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default StatsSection;