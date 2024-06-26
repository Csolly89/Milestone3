import React from "react";
import Login from "../Utilities/Login";
import Register from "../Utilities/Register";

const Logreg = () => {
	const [formType, setFormType] = React.useState("login");

	const handleFormSwitch = (type) => {
		setFormType(type);
	};

	return (
		<div style={{ height: "100vh" }}>
			{formType === "login" ? (
				<Login onFormSwitch={handleFormSwitch} />
			) : (
				<Register onFormSwitch={handleFormSwitch} />
			)}
		</div>
	);
};

export default Logreg;