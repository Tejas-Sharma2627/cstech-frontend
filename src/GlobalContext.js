    import React from "react";
    const GlobalContext=React.createContext({
        user:{
            name: "",
            email: "",
            salary: null,
            desig: "",
          },
          setUser:()=>{},
          search:{
            nameS: "",
            emailS: "",
          },
          setSearch:()=>{},
          searchdata:{
            name: "",
            email: "",
            salary: null,
            desig: "",
          },
          setSearchdata:()=>{}
    })
    export default GlobalContext;