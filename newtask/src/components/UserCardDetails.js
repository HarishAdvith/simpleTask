import React from "react";

let UserCardDetails=({ emplyoeedata })=>{
    console.log(emplyoeedata);
  const { firstName, id, phone, email,lastName } = emplyoeedata;
  return (
    <React.Fragment>
        
      {/* <pre>{JSON.stringify(props.data)}</pre> */}
      <div className="card-Sty">
        <div className="card">
          <div className="card-header bg-primary">
            <p className="card-title text-center">NAME:-{firstName}</p>
            <p className="card-title text-center">LastName:-{lastName}</p>
          </div>
          <div className="card-body bg-info">
            <p>ID:-{id}</p>
            <p>PHONE:-{phone}</p>
            <p>EMAIL:-{email}</p>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );




}
export default UserCardDetails;