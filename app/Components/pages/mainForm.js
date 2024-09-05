'use client'

import { useState } from "react";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";

export default function MainForm() {
  const [currentForm, setCurrentForm] = useState(1);
  const nextForm = () => {
    if (currentForm < 3) setCurrentForm(currentForm + 1);
  };

  const previousForm = () => {
    if (currentForm > 1) setCurrentForm(currentForm - 1);
  };
  
  const [form, setForm] = useState({
    name: "Acme Corporation",
    userName: "acme_admin",
    email: "info@acme.com",
    contactNumber: 9876543210,
    otp: 123456,
    createPassword: "SecurePass123!",
    confirmPassword: "SecurePass123!",
    
    position: "Manager", // from options: ['Manager', 'Developer', 'Designer']
    teamSize: 50,
    industry: "IT", // from options: ['IT', 'Finance', 'Healthcare']
    recruitmentType: "Full-time", // from options: ['Full-time', 'Part-time', 'Contract']
    location: "New York",

    organizationDomain: "acme.com",
    generateMxCode: "MX12345",
    generateTeamInvitationLink: "https://acme.com/invite/team123",
  });



  return (
    <div>
      {currentForm === 1 && <Form1 form={form} setForm={setForm} />}
      {currentForm === 2 && <Form2 form={form} setForm={setForm} />}
      {currentForm === 3 && <Form3 form={form} setForm={setForm} />}

      <div className="flex gap-3 mt-4">
        <button 
          className="border p-2" 
          onClick={previousForm} 
          disabled={currentForm === 1}
        >
          Previous
        </button>

        <button 
          className="border p-2" 
          onClick={nextForm} 
          disabled={currentForm === 3}
        >
          Next
        </button>
      </div>
    </div>
  );
}
