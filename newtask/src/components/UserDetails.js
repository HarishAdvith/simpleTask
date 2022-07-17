import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCardDetails from './UserCardDetails'

let UserDetails=()=>{

    const [app, setApp] = useState();
  const [errorMessage, setErrorMessage] = useState("error");
  const [emplyoeedata, setEmplyoeedata] = useState({});
  const[searchinput,setSearchinput]=useState('')

  const addInput=(e)=>{
    setSearchinput(e.target.value)
    handleSearch(app, searchinput);
   

  }

 const handleSearch = (app, searchinput) => {
    const filteredData = app && app.filter(fil => {
      const searchStr = searchinput.toLowerCase();
      const nameMatches = fil.firstName.toLowerCase().includes(searchStr);
      const idMatches = fil.id.toString().includes(searchStr);
      const emailMatches = fil.email.toString().includes(searchStr);

      return nameMatches || idMatches || emailMatches;
    });
    console.log(filteredData);
    setApp(filteredData) 
    
  }
 


  const addClick = (result) => {
    setEmplyoeedata(result);
  };
//   console.log(emplyoeedata);

  useEffect(() => {
   
    const DataURL =
      "https://admin-panel-data-edyoda-sourav.herokuapp.com/admin/data";
    axios
      .get(DataURL)
      .then((res) => {
        setApp(res.data);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  }, []);

    return(
        <React.Fragment>
      {/* <pre>{JSON.stringify(app)}</pre> */}
      <div className="section text-center mt-2 ">
        <input value={searchinput}  type='text' onChange={addInput} placeholder="searchHere" />
       


      </div>
      <section className="p-2">
        <div className="row">
          <div className="col-md-9">
            <table className="table table-hover table-striped">
              <thead className="bg-dark text-white">
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>phone</th>
                  <th>website</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {app &&
                  app.map((emply) => {
                    return (
                      <tr style={{cursor:"pointer"}} key={emply.id} onClick={() => addClick(emply)}>
                        <td>{emply.id}</td>
                        <td>{emply.firstName + emply.lastName}</td>
                        <td>{emply.phone}</td>
                        <td>{emply.address.city}</td>
                        <td>{emply.email}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          
        
          
          <div className="col-md-3">
            {Object.values(emplyoeedata).length>0 &&
            <UserCardDetails emplyoeedata={emplyoeedata} />}
          </div>
        </div>
      </section>
    </React.Fragment>
    )

}

export default UserDetails