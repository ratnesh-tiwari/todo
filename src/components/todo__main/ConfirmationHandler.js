import React from "react";
import { auth, db } from "../../firebase";
import { ref, remove } from "firebase/database";

const ConfirmationHandler = props => {
  const handleDeleteTodo = (uid, name) => {
    remove(ref(db, `${auth.currentUser.uid}/${name}/${uid}`));
    props.close(false);
  };

  const closeHandler = () => {
    props.close(false);
  };

  return (
    <React.Fragment>
      <div onClick={closeHandler} className="backdrop"></div>
      <div className="confirmation">
        <p>Are you sure!</p>
        <div>
          <button
            onClick={() => handleDeleteTodo(props.uid, props.name)}
            className="btn confirm__btn"
          >
            Delete
          </button>
          <button onClick={closeHandler} className="btn confirm__btn">
            Cancel
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ConfirmationHandler;
