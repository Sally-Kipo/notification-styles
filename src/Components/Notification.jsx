import React from "react";
import "./notification.css";
import successImage from "../Components/img/success.png";
import errorImage from "../Components/img/error.png";
import warningImage from "../Components/img/warning.png";
import infoImage from "../Components/img/info.png";


const notificationData = {
  success: {
    class: "success-box",
    image: successImage,
    text: "Success",
  },
  error: {
    class: "error-box",
    image: errorImage,
    text: "Error",
  },
  warning: {
    class: "warning-box",
    image: warningImage,
    text: "Warning",
  },
  info: {
    class: "info-box",
    image: infoImage,
    text: "Info",
  },
};

function Notification(props) {
  const item = notificationData[props.type];
  return (
    <div className={`notification ${item.class}`}>
      <div className="notification-icon">
        <img src={item.image} alt="" />
      </div>
      <div className="notification-text">
        <h3>{item.text}</h3>
        <p style={{ maxWidth:500}}>Order Placed Successfully. You can check order
          delivery status.</p>
      </div>
    </div>
  );
}

export default Notification;

