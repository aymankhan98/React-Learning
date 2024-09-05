import Field from "../fields";
export default function Form3({ form, setForm }) {
  return (
    <div className="flex flex-col">
      <Field
        label="Organization Domain"
        keyName="organizationDomain"
        form={form}
        setForm={setForm}
      />
      <Field
        label="Generate MxCode"
        keyName="generateMxCode"
        form={form}
        setForm={setForm}
      />
      <Field
        label="Generate Team Invitation Link"
        keyName="generateTeamInvitationLink"
        form={form}
        setForm={setForm}
      />
    </div>
  );
}
