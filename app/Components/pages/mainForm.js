'use client'


import Form from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import { useState } from "react";
export default function MainForm() {
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
      <Form form={form} setForm={setForm} />
      <Form2 form={form} setForm={setForm} />
      <Form3 form={form} setForm={setForm} />
    </div>
  );
}
