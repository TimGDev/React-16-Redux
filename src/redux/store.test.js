import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as courseActions from "./actions/courseActions";

it("Should handle creating courses", function () {
  // arrange
  const store = createStore(rootReducer, initialState);
  const course = {
    id: 1,
    title: "Clean Code",
  };
  const courseToUpdate = {
    id: 2,
    title: "Cleaner Code",
  };
  const courseUpdated = {
    id: 2,
    title: "Cleanest Code",
  };

  // act
  const action = courseActions.createCourseSuccess(course);
  store.dispatch(action);
  const actionSecond = courseActions.createCourseSuccess(courseToUpdate);
  store.dispatch(actionSecond);
  const actionUpdate = courseActions.updateCourseSuccess(courseUpdated);
  store.dispatch(actionUpdate);

  // assert
  const createdCourse = store.getState().courses[1];
  expect(createdCourse.title).toEqual("Cleanest Code");
});
