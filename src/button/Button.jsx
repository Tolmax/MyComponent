import styles from "./Button.module.css";

function Button({ onInputButtonClick }) {
	return (
		<button
			type="button"
			className={styles.button}
			onClick={onInputButtonClick}
		>
			Ввести новое
		</button>
	);
}
export default Button;
