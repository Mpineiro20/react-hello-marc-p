import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [name, setName] = useState("")
	const [age, setAge] = useState(0)
	const [result, setResult] = useState(false)
	function validateSubmission() {
		if (name == " ") {
			alert("name is needed!!")
		}
		fetchAge();

		function fetchAge() {
			fetch("https://api.agify.io/?name=" + name)
				.then(response => response.json())
				.then(data => {
					setName(data.name);
					setAge(data.age)
				})
		}

		useEffect(() => {
			fetchAge();
		}, [])
	}

	return (
		<>
			<h1 className="title"> age predicter</h1>
			<h2>Enter a name and ill predict the age :</h2>
			<input
				type="text"
				onChange={event => setName(event.target.value)}
				value={name}
			/>

			<button onClick={validateSubmission}> predict age</button>
			<button onClick={0}></button>
			<h2 className=" predicted-age">{name} is {age} years old</h2>
		</>
	);
};

export default Home;
