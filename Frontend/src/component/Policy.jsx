import React from "react";
import { FaUndoAlt, FaTruck, FaShieldAlt } from "react-icons/fa";
import "../css/policy.css"

const policies = [
  {
    id: 1,
    icon: <FaUndoAlt />,
    title: "7 Days Return",
    desc: "Return your product within 7 days of delivery with no questions asked."
  },
  {
    id: 2,
    icon: <FaTruck />,
    title: "Free Shipping",
    desc: "Enjoy free shipping on all orders with fast and reliable delivery."
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "Secure Payment",
    desc: "Your payments are 100% secure with our encrypted checkout system."
  }
];

const Policy = () => {
  return (
    <div className="policy-section">
      <div className="policy-container">
        {policies.map((item) => (
          <div className="policy-card" key={item.id}>
            <div className="policy-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policy;