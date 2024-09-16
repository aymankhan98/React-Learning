import Image from "next/image";
import { useState } from "react";
import MainForm from "@/pages/mainForm"
import TodoSelect from "@/pages/multiSelect";
import CounterChallenge from "@/pages/challenge1";

export default function Home() {
 


  return (
    <div className="bg-white">
      {/* <MainForm/>
<TodoSelect/> */}
    <CounterChallenge/>
    </div>
  );
}
