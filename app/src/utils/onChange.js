export const onChangeHandler = (key, value, form, setForm) => {
    return setForm({
      ...form,
      [key]: value,
    });
  };
  