import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [taskList, setTaskList] = useState([]);

	const handleDelete = (i) => {
		let filtered = taskList.filter((task, index) => i != index);
		setTaskList(filtered);
	};

	let listItem = taskList.map((task, index) => {
		return (
			<li
				key={task}
				className="d-flex justify-content-between"
				id="parent">
				{task}
				<span
					className="hidden-child"
					onClick={() => handleDelete(index)}>
					<i className="fas fa-ban"></i>
				</span>
			</li>
		);
	});

	return (
		<div className="content">
			<header>ToDo</header>
			<div>
				<input
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					placeholder="What would you like to do?"
					value={inputValue}
					onKeyUp={(e) => {
						if (e.key === "Enter") {
							setTaskList([...taskList, inputValue]);
							listItem;
							setInputValue("");
						}
					}}
				/>
			</div>
			<div>
				<ul>
					{taskList.length == 0 ? (
						<li>You do no have any tasks, please add some</li>
					) : (
						listItem
					)}
				</ul>
			</div>
		</div>
	);
};

export default Home;

//heading
//input field
//ul
//li with green check(scratch-thru)complete & trash to delete
