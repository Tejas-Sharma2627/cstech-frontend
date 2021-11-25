import React from "react";
import axios from "axios";
import "./App.css";
import GlobalContext from "./GlobalContext";
const FormData = () => {
  // Use States Data
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    salary: null,
    desig: "",
  });
  const [search, setSearch] = React.useState({
    nameS: "",
    emailS: "",
  });
  const [searchdata, setSearchdata] = React.useState({
    name: "",
    email: "",
    salary: null,
    desig: "",
  });
  const [editStatus, setEditStatus]=React.useState(false);
  const [userEdit, setUserEdit] = React.useState({
    name: "",
    email: "",
    salary: 0,
    desig: "",
  });
  //Handling Functions
  const handleInputs = async (e) => {
    console.log(e.target.name + "  " + e.target.value);

    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleInputsEdit = async (e) => {
    console.log(e.target.name + "  " + e.target.value);

    setUserEdit({ ...userEdit, [e.target.name]: e.target.value });
  };
  const handleEditSubmit=async(e)=>{
    e.preventDefault();
    const res = await axios.put(
      `http://localhost:8080/edit?name=${userEdit.name}&email=${userEdit.email}&salary=${userEdit.salary}&desig=${userEdit.desig}`
    );
    setEditStatus(false);
    setUserEdit({
      name: "",
    email: "",
    salary: null,
    desig: "",
    })
    console.log("Success")
  }
  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await axios.delete(
      `http://localhost:8080/delete?name=${searchdata.email}&email=${searchdata.email}`
    );
    window.alert("Data Deleted");
    setSearchdata({name: "",
    email: "",
    salary: null,
    desig: "",});
  };
  const handleEdit=async(e)=>{
    e.preventDefault();
    const res = await axios.post(
      `http://localhost:8080/search?name=${searchdata.name}&email=${searchdata.email}&salary=${0}&desig=${"hello"}`
    );
    setEditStatus(true);
    setUserEdit(res.data);
    setSearchdata({name: "",
    email: "",
    salary: null,
    desig: "",});
  }
  const handleSearch = async (e) => {
    e.preventDefault();
    const { nameS, emailS } = search;
    const res = await axios.post(
      `http://localhost:8080/search?name=${nameS}&email=${emailS}`
    );
    setSearch({
      nameS: "",
      emailS: "",
    });
    setSearchdata(res.data);
    console.log(res.data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, salary, desig } = user;
    console.log(name + " " + email + " " + salary + " " + desig);
    const res = await axios.post(
      `http://localhost:8080/add?name=${name}&email=${email}&salary=${salary}&desig=${desig}`
    );
    console.log(res);

    if (res.status === 422) {
      window.alert(" Invalid");
      console.log(" Invalid");
    } else {
      window.alert("Valid");
      console.log("Valid");
    }
    setUser({
      name: "",
      email: "",
      salary: 0,
      desig: "",
    });
  };
  //Return Data
  return (
    <>
    <h1>Add Employees</h1>
      <form>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="Name">Name</label>
            <div className="text-center">
              <input
                type="text"
                onChange={handleInputs}
                value={user.name}
                class="form-control"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div class="form-group col-md-4">
            <label for="inputPassword4">Email</label>
            <input
              type="email"
              name="email"
              class="form-control"
              value={user.email}
              onChange={handleInputs}
              id="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="salary">Salary</label>
            <input
              type="text"
              class="form-control"
              id="salary"
              value={user.salary}
              onChange={handleInputs}
              name="salary"
              placeholder="Salary"
              required
            />
          </div>
          <div class="form-group col-md-4">
            <label for="designition">Designition</label>
            <input
              type="text"
              class="form-control"
              id="designition"
              value={user.desig}
              onChange={handleInputs}
              name="desig"
              placeholder="Designition"
              required
            />
          </div>
        </div>
        <button type="submit" onClick={handleSubmit} class="btn btn-primary">
          Submit
        </button>
      </form>
      <h3>Search here</h3>
      <div class="form-group col-md-4">
        <label for="nameS">Name</label>
        <input
          type="text"
          class="form-control"
          id="nameS"
          onChange={(e) => {
            setSearch({ ...search, [e.target.name]: e.target.value });
          }}
          value={search.nameS}
          name="nameS"
          placeholder="Name"
          required
        />
      </div>
      <div class="form-group col-md-4">
        <label for="emailS">Email</label>
        <input
          type="text"
          class="form-control"
          id="emailS"
          value={search.emailS}
          onChange={(e) => {
            setSearch({ ...search, [e.target.name]: e.target.value });
          }}
          name="emailS"
          placeholder="Email"
          required
        />
      </div>
      <button type="submit" onClick={handleSearch} class="btn btn-primary">
        Submit
      </button>
      <h1>Search Results</h1>
      <h3>Name: {searchdata.name}</h3>
      <h3>Email :{searchdata.email}</h3>
      <h3>Salary: Rs.{searchdata.salary}</h3>
      <h3>Desig: {searchdata.desig}</h3>
      <button type="submit" onClick={handleEdit} class="btn btn-primary">
        Edit
      </button>
      <button type="submit" onClick={handleDelete} class="btn btn-primary">
        Delete
      </button>
      {editStatus&&<div><form>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="Name">Name</label>
            <div className="text-center">
              <input
                type="text"
                onChange={handleInputsEdit}
                value={userEdit.name}
                class="form-control"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div class="form-group col-md-4">
            <label for="inputPassword4">Email</label>
            <input
              type="email"
              name="email"
              class="form-control"
              value={userEdit.email}
              onChange={handleInputsEdit}
              id="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="salary">Salary</label>
            <input
              type="text"
              class="form-control"
              id="salary"
              value={userEdit.salary}
              onChange={handleInputsEdit}
              name="salary"
              placeholder="Salary"
              required
            />
          </div>
          <div class="form-group col-md-4">
            <label for="designition">Designition</label>
            <input
              type="text"
              class="form-control"
              id="designition"
              value={userEdit.desig}
              onChange={handleInputsEdit}
              name="desig"
              placeholder="Designition"
              required
            />
          </div>
        </div>
        </form>
        <button type="submit" onClick={handleEditSubmit} class="btn btn-primary">
          Update
        </button></div>}
    </>
  );
};

export default FormData;
