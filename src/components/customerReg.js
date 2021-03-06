import React from "react";
import Header from "./header";
import Heading from "./heading";
import Footer from "./footer";
import Fields from "./customerRegSpec";
import Form from "./form";
function CustomerReg(props) {
  return (
    //Sample Comment
    <div>
      <Header />
      <div class="container">
        <Heading title="Customer Registration" />
        <Form fields={Fields.nameFields}></Form>
        <Form fields={Fields.addrFields1} />
        <Form fields={Fields.addrFields2} />
        <Form fields={Fields.emailFields} />
        <hr />
        <Form fields={Fields.cylinderCount} />
        <hr />
        <Form fields={Fields.familyDetails} />
        <Form fields={Fields.memberDetails} />
        <Form fields={Fields.memberDetails} />
        <Form fields={Fields.memberDetails} />
        <Form fields={Fields.memberDetails} />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default CustomerReg;
