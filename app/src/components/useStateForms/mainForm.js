'use client'

import { useState } from "react";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";

 function MainForm() {
  const [state, setState] = useState({
    currentForm: 1, 
    form: {
      name: "Acme Corporation",
      userName: "acme_admin",
      email: "info@acme.com",
      contactNumber: 9876543210,
      otp: 123456,
      createPassword: "SecurePass123!",
      confirmPassword: "SecurePass123!",
      position: "Manager", 
      teamSize: 50,
      industry: "IT", 
      recruitmentType: "Full-time", 
      location: "New York",
      organizationDomain: "acme.com",
      generateMxCode: "MX12345",
      generateTeamInvitationLink: "https://acme.com/invite/team123",
    }
  });


  const nextForm = () => {
    if (state.currentForm < 3) {
      setState({
        ...state,
        currentForm: state.currentForm + 1 
      });
    }
  };

const previousForm=()=>{

  if (state.currentForm > 1){
    setState({
      ...state,
      currentForm:state.currentForm -1
    })
  }
} 
  const updateForm =(newData) =>{
    setState ({
      ...state,
      form : {
        ...state.form,
        ...newData
      }
    })
  }
  return (
    <div>
      {state.currentForm === 1 && <Form1 form={state.form} setForm={updateForm} />}
      {state.currentForm === 2 && <Form2 form={state.form} setForm={updateForm} />}
      {state.currentForm === 3 && <Form3 form={state.form} setForm={updateForm} />}

      <div className="flex gap-3 mt-4">
        <button 
          className="border p-2" 
          onClick={previousForm} 
          disabled={state.currentForm === 1} 
        >
          Previous
        </button>

        <button 
          className="border p-2" 
          onClick={nextForm} 
          disabled={state.currentForm === 3} 
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default MainForm