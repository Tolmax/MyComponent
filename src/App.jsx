import { useState } from "react";
import styles from "./app.module.css";
import data from "./data.json";

export const App = () => {
	// const [steps, setSteps] = useState(data);
	const steps = data;
	const [activeIndex, setActiveIndex] = useState(0);

	const totalSteps = steps.length;
	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === totalSteps - 1;

	const onBackClick = () => {
		if (!isFirstStep) {
			setActiveIndex((prev) => prev - 1);
		}
	};

	const onForwardClick = () => {
		if (!isLastStep) {
			setActiveIndex((prev) => prev + 1);
		}
	};

	const onStartClick = () => {
		setActiveIndex(0);
	};

const photo = () =>
	isFirstStep ? (
		<img src="./pelmeni.jpg" alt="Пельмени" />
	) : (
		<div className={styles["steps-content"]}>
			<h2>{steps[activeIndex].title}</h2>
			{steps[activeIndex] && steps[activeIndex].content}
		</div>
	);

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					{/* <div className={styles["steps-content"]}>
						<h2>{steps[activeIndex].title}</h2>
						{steps[activeIndex] && steps[activeIndex].content}
					</div> */}
					{photo()}
					<ul className={styles["steps-list"]}>
						{steps.map((step, index) => {
							const isActive = index === activeIndex;
							const isDone = index <= activeIndex;

							return (
								<li
									key={index}
									className={
										styles["steps-item"] +
										(isDone ? ` ${styles.done}` : "") +
										(isActive ? ` ${styles.active}` : "")
									}
								>
									<button
										className={styles["steps-item-button"]}
										onClick={() => setActiveIndex(index)}
									>
										{index + 1}
									</button>
									{`Шаг ${index + 1}`}
								</li>
							);
						})}
					</ul>
					<div className={styles["buttons-container"]}>
						<button
							className={styles.button}
							disabled={isFirstStep}
							onClick={onBackClick}
						>
							Назад
						</button>
						{isLastStep ? (
							<button
								className={styles.button}
								onClick={onStartClick}
							>
								Начать сначала
							</button>
						) : (
							<button
								className={styles.button}
								onClick={onForwardClick}
							>
								Далее
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
