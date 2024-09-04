import Field from "../fields";

export default function Form({ form, setForm }) {
  return (
    <>
      <Field label="Name" keyName="name" form={form} setForm={setForm} />
      <Field
        label="User Name"
        keyName="userName"
        form={form}
        setForm={setForm}
      />
      <Field
        label="Contact"
        keyName="contactNumber"
        form={form}
        setForm={setForm}
      />
      <Field label="Email" keyName="email" form={form} setForm={setForm} />
      <Field label="OTP" keyName="otp" form={form} setForm={setForm} />

      <Field
        label="New Password"
        keyName="createPassword"
        form={form}
        setForm={setForm}
      />

      <Field
        label="Confirm Password"
        keyName="confirmPassword"
        form={form}
        setForm={setForm}
      />
    </>
  );
}
