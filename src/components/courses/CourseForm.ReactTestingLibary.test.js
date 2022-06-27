import React from "react";
import { render } from "@testing-library/react";
import CourseForm from "./CourseForm";

function renderCourseForm(args) {
  const defalutsProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defalutsProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should reander Add Course header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it('should label save button as "Save" when not saveing', () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it('should label save button as "Save" when not saveing', () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");
});
