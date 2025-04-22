import React, { useState } from "react";
import { format } from "date-fns";
import styles from "./App.module.css";

function App() {
	const [value, setValue] = useState("");
	const [list, setList] = useState([]);
	const [error, setError] = useState("");

	const isValueVaild = value.length >= 2 ? true : false;

	const onInputButtonClick = () => {
		const userInput = prompt("Введите значение:");
		const promptValue = userInput;
		if (promptValue.length <= 2) {
			setError("Введенное значение должно содержать минимум 3 символа");
			setValue("");
		} else {
			setError("");
			setValue(promptValue);
		}
	};

	const onAddButtonClick = () => {
		if (isValueVaild) {
			const id = Date.now();
			const now = new Date();
			const formatted = format(now, "dd.MM.yyyy HH:mm:ss");
			const updatedList = [...list, { id, value, formatted }];
			setList(updatedList);
			setValue("");
			setError("");
		}
	};

	return (
		<div className={styles.app}>
			<h1 className={styles["pageh-eading"]}>Ввод значения</h1>
			<p className={styles["no-margin-text"]}>
				Текущее значение <code>value</code>: "
				<output className={styles["current-value"]}>{value}</output>"
			</p>
			{/* {error !== "" && <div className={styles.error}>{error}</div>} */}
			{error && <div className={styles.error}>{error}</div>}
			<div className={styles["buttons-container"]}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles["list-container"]}>
				<h2 className={styles["list-heading"]}>Список:</h2>

				{list.length === 0 ? (
					<p className={styles["no-margin-text"]}>
						Нет добавленных элементов
					</p>
				) : (
					<ul className={styles.list}>
						{list.map((item) => (
							<li key={item.id} className={styles["list-item"]}>
								{item.value + " " + item.formatted}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default App;
