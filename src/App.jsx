import React, { useState } from "react";
import { format } from "date-fns";
import styles from "./App.module.css";
import Button from "./button/Button";
import ListButton from "./listbutton/ListButton"

function App() {
	const [value, setValue] = useState("");
	const [list, setList] = useState([]);

	const onInputButtonClick = () => {
		const userInput = prompt("Введите значение:");

		if (!userInput) return; // защита от пустого ввода

		const promptValue = userInput;
		setValue(promptValue); // обновляет value, но не мгновенно

		const id = Date.now();
		const now = new Date();
		const formatted = format(now, "dd.MM.yyyy");

		// используем promptValue, а не value
		const updatedList = [...list, { id, value: promptValue, formatted }];
		setList(updatedList);
		setValue("")
	};



	const onDellButtonClick = (idToDelete) => {
		const shouldDelete = window.confirm(
			"Вы уверены, что хотите удалить элемент?",
		);
		if (shouldDelete) {
			setList((prevList) =>
				prevList.filter((item) => item.id !== idToDelete),
			);
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>СПИСОК ДЕЛ</h1>
			<Button onInputButtonClick={onInputButtonClick} />
			{/* <div className={styles["list-container"]}> */}
				{/* <h2 className={styles["list-heading"]}>Список:</h2> */}

				{list.length === 0 ? (
					<p className={styles["no-margin-text"]}>
						Нет добавленных элементов
					</p>
				) : (
					<ul className={styles.list}>
						{list.map((item) => (
							<li key={item.id} className={styles["list-item"]}>
								<ListButton
									item={item}
									onDellButtonClick={onDellButtonClick}
								/>
							</li>
						))}
					</ul>
				)}
			{/* </div> */}
		</div>
	);
}

export default App;


// useEffect(() => {
// 	if (value !== "") {
// 		const id = Date.now();
// 		const now = new Date();
// 		const formatted = format(now, "dd.MM.yyyy");

// 		const updatedList = [...list, { id, value, formatted }];
// 		setList(updatedList);
// 	}
// }, [value]);
// const onInputButtonClick = () => {
// 	const userInput = prompt("Введите значение:");
// 	if (!userInput) return;

// 	setValue(userInput); // это триггерит useEffect
// };
