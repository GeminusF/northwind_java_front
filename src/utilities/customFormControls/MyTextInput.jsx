import { useField } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function MyTextInput({ ...props }) {
  //console.log(props)

  // elaqeli input elemanin melumatlirini  yigan hook usefeild

  const [field, meta] = useField(props);

  // console.log(meta);

  return (
    <FormField error={meta.touched && !!meta.error}>
      <input {...field} {...props} />
      {meta.touched && !!meta.error ? (
        <Label pointing basic color="red" content={meta.error}></Label>
      ) : null}
    </FormField>
  );
}

// !! birsey  varsa true yoxsa false
