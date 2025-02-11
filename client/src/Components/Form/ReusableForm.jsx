import React from "react";

const ReusableForm = ({ children, onSubmit, className }) => (
  <form onSubmit={onSubmit} className={className}>
    {children}
  </form>
);

export default ReusableForm;
