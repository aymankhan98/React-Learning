import Field from "../app/Components/field";

export default function Form2({ form, setForm }) {
  return (
    <>
      <Field
        label="Position"
        keyName="position"
        form={form}
        setForm={setForm}
      />
      <Field
        label="Team Size"
        keyName="teamSize"
        form={form}
        setForm={setForm}
      />
      <Field
        label="Industry"
        keyName="industry"
        form={form}
        setForm={setForm}
      />
      <Field
        label="Recruitment Type"
        keyName="recruitmentType"
        form={form}
        setForm={setForm}
      />

      <Field
        label="Location"
        keyName="location"
        form={form}
        setForm={setForm}
      />
    </>
  );
}
