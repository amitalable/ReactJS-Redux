import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  InputGroup,
  Input,
  Button,
} from "reactstrap";
import { v4 } from "uuid";

//redux
import { connect } from "react-redux";
import { addTodo } from "../action/todo-action";

const TodoForm = ({ addInTodo }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("Please add a todo");
    }
    const todo = {
      id: v4(),
      title,
    };

    addInTodo(todo);
    setTitle("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your Next Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button color="primary" type="submit">
            ADD
          </Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

//This method is responsible to bring data from store to the component
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  addInTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
