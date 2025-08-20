import React from "react";
 
const Hiring = () => {
    return (
        <div className="col-12">
          <h3 className="h5 mb-3">Hiring Pipeline</h3>
          <div className="bg-secondary p-3 rounded">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="text-center flex-grow-1 bg-primary p-2 rounded" style={{ backgroundColor: '#3b82f6' }}>Applied</div>
              <div className="text-center flex-grow-1 bg-info p-2 rounded" style={{ backgroundColor: '#2b6cb0' }}>Interview</div>
              <div className="text-center flex-grow-1 bg-dark p-2 rounded">Hired</div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>Applied</span>
              <span>150</span>
              <span>Interview</span>
              <span>45</span>
              <span>Hired</span>
              <span>10</span>
            </div>
          </div>
        </div>
      );
};

export default Hiring;