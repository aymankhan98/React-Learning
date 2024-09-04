import { onChangeHandler } from "../utils/onChange";

export default function Field({ label, keyName, form, setForm }) {
  console.log(label, keyName, form[keyName], form);
  return (
    <label>
      {label}
      <input
        value={form[keyName]}
        onChange={(e) =>
          onChangeHandler(keyName, e.target.value, form, setForm)
        }
      />
    </label>
  );
}
