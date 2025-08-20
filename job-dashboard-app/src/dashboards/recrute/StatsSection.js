import React from "react";

const StatsSection = () => {
    return (
    <div className="col-12">
          <div className="d-flex justify-content-between mb-4">
            <h2 className="h4">DASHBOARD</h2>
            <select className="form-select bg-dark text-light border-0" style={{ width: '100px' }}>
              <option>Ary</option>
            </select>
          </div>
          <div className="row g-3 mb-4">
            <div className="col-3">
              <div className="bg-secondary p-3 rounded text-center">
                <h3>12</h3>
                <p className="mb-0">Listings</p>
                <p className="mb-0 text-muted">Dutied</p>
              </div>
            </div>
            <div className="col-3">
              <div className="bg-secondary p-3 rounded text-center">
                <h3>258</h3>
                <p className="mb-0">Applications</p>
                <p className="mb-0 text-muted">Received</p>
              </div>
            </div>
            <div className="col-3">
              <div className="bg-secondary p-3 rounded text-center">
                <h3>27</h3>
                <p className="mb-0">Talent's</p>
                <p className="mb-0 text-muted">Softedged</p>
              </div>
            </div>
            <div className="col-3">
              <div className="bg-secondary p-3 rounded text-center">
                <h3>6</h3>
                <p className="mb-0">Hims</p>
                <p className="mb-0 text-muted">Madi:</p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default StatsSection;