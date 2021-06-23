import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup"; // birden cox funksiya var importun icinde
import { Button } from "semantic-ui-react";
import MyTextInput from "../utilities/customFormControls/MyTextInput";

export default function ProductAdd() {
  const initialValues = {
    productName: "",
    unitPrice: 0,
  };

  const schema = Yup.object({
    productName: Yup.string().required("Məhsulun adı məcburidi"),
    unitPrice: Yup.number().required("Məhsulun qiyməti məcburidi"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        <MyTextInput name="productName" placeholder="Məhsul adı" />
        <MyTextInput name="unitPrice" placeholder="Məhsul adı" />
        <Button color="teal" type="submit">
          Əlavə elə
        </Button>
      </Form>
    </Formik>
  );
}
