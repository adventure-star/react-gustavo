import React from "react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

export default props => {
  return (
    <DragDropContextProvider backend={HTML5Backend}>
      {props.children}
    </DragDropContextProvider>
  );
};