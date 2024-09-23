import MainForm from "@/app/src/components/useStateForms/mainForm"
import TodoSelect from "@/app/src/components/shadcnComponents/multiSelect";
import CounterChallenge from "@/app/src/components/useStateChallenges/challenge1";
import FormChallenge from "@/app/src/components/useStateChallenges/challenge2";
import TodoList from "@/app/src/components/useStateChallenges/challenge3";
import ArrayComponent from "@/app/src/components/useStateChallenges/challenge4";
import UEChallenges1 from "@/app/src/components/useEffectChallenges/uEChallenges1";

import DataFetchingComponent from "@/app/src/components/useStateChallenges/challenge5";
import { ComboboxDemo } from "@/app/src/components/shadcnComponents/comobox";
import { AccordionDemo } from "@/app/src/components/shadcnComponents/accordiandemo";
import { AlertDialogDemo } from "@/app/src/components/shadcnComponents/AlertDialogDemo";
// import { DropdownMenu } from "@/src/components/composable/dropdown-menu";
import { BreadcrumbDemo } from "@/app/src/components/shadcnComponents/BreadcrumbDemo";
import { SonnerDemo } from "@/app/src/components/shadcnComponents/SonnerDemo";
import { Toaster } from "@/app/src/components/composable/toaster";

export default function Home() {
 


  return (
    <div className="bg-white grid grid-cols-3 gap-10 p-10" >
      {/* <MainForm/>
    <CounterChallenge/>
    <FormChallenge/>
    <TodoList/>
    <ArrayComponent/>
    <DataFetchingComponent/>
    <TodoSelect/>
    <ComboboxDemo/>
    <AccordionDemo/>
    <AlertDialogDemo/>
    <BreadcrumbDemo/>
    <SonnerDemo/>
     <Toaster /> */}

     <UEChallenges1 />
    </div>

  );
}
