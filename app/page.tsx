import Image from "next/image";
import { useState } from "react";

export default function Home() {
 
  const initialState  = {
    name: 'Acme Corporation',
    email: 'info@acme.com',
    userName: 'acme_admin',
    createPassword: 'SecurePass123!',
    confirmPassword: 'SecurePass123!',
    contactNumber: 9876543210,
    position: 'Manager', // from options: ['Manager', 'Developer', 'Designer']
    otp: 123456,
    teamSize: 50,
    industry: 'IT', // from options: ['IT', 'Finance', 'Healthcare']
    recruitmentType: 'Full-time', // from options: ['Full-time', 'Part-time', 'Contract']
    location: 'New York',
    organizationDomain: 'acme.com',
    generateMxCode: 'MX12345',
    generateTeamInvitationLink: 'https://acme.com/invite/team123',
  };
  
  const orgFieldMetadata = {
    name: { type: 'text' },
    email: { type: 'email' },
    userName: { type: 'text' },
    createPassword: { type: 'password' },
    confirmPassword: { type: 'password' },
    contactNumber: { type: 'number' },
    position: { type: 'select', options: ['Manager', 'Developer', 'Designer'] },
    otp: { type: 'number' },
    teamSize: { type: 'number' },
    industry: { type: 'select', options: ['IT', 'Finance', 'Healthcare'] },
    recruitmentType: {
      type: 'select',
      options: ['Full-time', 'Part-time', 'Contract'],
    },
    location: { type: 'text' },
    organizationDomain: { type: 'text' },
    generateMxCode: { type: 'text' },
    generateTeamInvitationLink: {
      type: 'url',
    },
  }

  return (
    <main className="bg-white">
    
    </main>
  );
}
