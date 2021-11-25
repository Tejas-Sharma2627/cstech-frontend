import React, {useState} from 'react'
import GlobalContext from './GlobalContext';
export default function ContextWrapper(props) {
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
    return (
        <GlobalContext.Provider value={{user, setUser,search, setSearch,searchdata, setSearchdata}}>
        {props.children}
        </GlobalContext.Provider>
    )
}
