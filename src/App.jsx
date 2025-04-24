import { useState } from "react";
import styles from "./app.module.css";

export const App = () => {
	const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "+", "=", "C"];
	const [operand1, setOperand1] = useState("");
	const [operand2, setOperand2] = useState("");
	const [operator, setOperator] = useState(null);
	const [isFistNumber, setIsFistNumber] = useState(true);
	const [result, setResult] = useState(null);
	const [isCalculated, setIsCalculated] = useState(false);

	const onButtonClick = (value) => {
		if (isFistNumber) {
			setOperand1((prev) => prev + value);
		} else if (!isFistNumber) {
			setOperand2((prev) => prev + value);
		}
	};

	const onClearClick = () => {
		setOperand1("");
		setOperand2("");
		setOperator(null);
		setIsFistNumber(true);
		setResult(null);
		setIsCalculated(false);
	};

	const onOperatorClick = (value) => {
		if (operand1 === "") return; // не даст ввести оператор без числа
		setOperator(value);
		setIsFistNumber(false);
	};

	const onEqualsClick = () => {
		if (operand1 !== null && operand2 !== null && operator) {
			const res = calculate(Number(operand1), Number(operand2), operator);
			setResult(res);
			setIsCalculated(true);
		}
	};

	const calculate = (num1, num2, operator) => {
		switch (operator) {
			case "+":
				return num1 + num2;
			case "-":
				return num1 - num2;
			// default:
			// 	return num2;
		}
	};

	const handleClick = (value) => {
		if (value === "C") {
			onClearClick(); // очищает
		} else if (value === "=") {
			onEqualsClick(); // считает
		} else if (value === "+" || value === "-") {
			onOperatorClick(value); // передаёт оператор
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>CALCULATOR</h1>
			<div className={styles.display}>
				{result !== null
					? `${operand1} ${operator} ${operand2} = ${result}`
					: `${operand1 ?? ""} ${operator ?? ""} ${operand2 ?? ""}`}
			</div>
			<div className={styles.buttonContainer}>
				<ul className={styles.buttons}>
					{NUMS.slice(0, 9).map((num, index) => {
						return (
							<button
								className={styles.button}
								onClick={() => onButtonClick(num)}
								key={index}
							>
								{num}
							</button>
						);
					})}
				</ul>
			</div>
			<div className={styles.buttonContainer}>
				<ul className={styles.buttons}>
					{NUMS.slice(10, 14).map((num, index) => {
						//Функция-обработчик по значению кнопки
						// const handleClick = () => {
						// 	if (num === "C") {
						// 		onClearClick(); // очищает
						// 	} else if (num === "=") {
						// 		onEqualsClick(); // считает
						// 	} else if (num === "+" || num === "-") {
						// 		onOperatorClick(num); // передаёт оператор
						// 	}
						// };
						return (
							<button
								className={styles.button}
								// onClick={handleClick}
								onClick={() => handleClick(num)}
								key={index}
							>
								{num}
							</button>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
