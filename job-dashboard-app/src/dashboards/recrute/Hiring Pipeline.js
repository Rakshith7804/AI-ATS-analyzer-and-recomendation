import React from "react";
 
const Hiring = () => {
    return (
        <div className="col-12">
          <h3 className="h5 mb-3 text-gray-800">Hiring Pipeline</h3>
          <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="text-center flex-grow-1 bg-blue-100 p-2 rounded" style={{ backgroundColor: '#dbeafe' }}>Applied</div>
              <div className="text-center flex-grow-1 bg-blue-200 p-2 rounded" style={{ backgroundColor: '#bfdbfe' }}>Interview</div>
              <div className="text-center flex-grow-1 bg-blue-300 p-2 rounded" style={{ backgroundColor: '#93c5fd' }}>Hired</div>
            </div>
            <div className="d-flex justify-content-between align-items-center text-gray-700">
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