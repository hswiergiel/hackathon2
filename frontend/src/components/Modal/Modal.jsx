import "./modal.scss";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default function Modal({ isShowing, hide, title, ...props }) {
  return isShowing
    ? ReactDOM.createPortal(
        <div className="modalOverlay">
          <div className="modalWrapper">
            <div className="modal">
              <div className="modalHeader">
                <h4>{title}</h4>
                <button
                  type="button"
                  className="modalCloseButton"
                  onClick={hide}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modalBody">{props.children}</div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
}

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
