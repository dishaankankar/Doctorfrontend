import React from "react";
import {Link} from "react-router-dom"
function SignupD() {
  return (
    <div>
      <section >
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              
            </div>
            
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 ">
                  <h4>Join 125000+ doctor</h4>
                  <label className="mb-1"> </label>
                  <Link to="/signup">Not a Doctor?</Link>
                  <hr/>
                 
              <div><Link to="/login">Login</Link></div>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile No"
                    ></input>
                  </div>
                  <div className="form-group">
                   <label className="mb-1">Email</label>
                   <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Create Password</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password"
                    ></input>
                  </div>
                  
                  <div className="form-group py-3">
                    <button
                      type="button"
                      className="btn btn-primary shadow w-100"
                    >
                      SignUp
                    </button>
                  </div>
                </div>

                <div className="col-md-6 border-start">
                  <img src="https://img.freepik.com/premium-vector/healthcare-workers-are-front-lines-public-health-system_1150-50284.jpg?w=740"  width={500} height={350} />
                </div>
                
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignupD;
