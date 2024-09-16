import { onChangeHandler } from "@/src/utils/onChange";

export default function Field({ label, keyName, form, setForm }) {
  console.log(label, keyName, form[keyName], form);
  return (
    <label className=" flex gap-5 p-2">
      {label}
      <input
        value={form[keyName]} className="border p-1"
        onChange={(e) =>
          onChangeHandler(keyName, e.target.value, form, setForm)
        }
      />
    </label>
  );
}
