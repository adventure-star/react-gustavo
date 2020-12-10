import React from "react";
import { DropTarget } from 'react-dnd';

// How the drop target reacts to the drop event
const dropTarget = {
  drop(props, monitor) {
    // Obtain the dragged item
    const { item } = monitor.getItem();
    props.onDrop(item, props.id);
  },
  canDrop(props) {
    return props.editable;
  }
};

// inject connect.dropTarget() into our component's props
function collect(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

// connect our component using connect.dropTarget (injected using collect())
function Droppable(props) {
  const { connectDropTarget, children } = props;
  return connectDropTarget(
    <div style={{ width: '100%' }}>
      {children}
    </div>
  );
};

export default DropTarget(props => props.dndType, dropTarget, collect)(Droppable);

