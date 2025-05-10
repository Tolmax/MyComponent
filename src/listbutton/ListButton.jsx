import styles from "./ListButton.module.css";

function ListButton({ item, onDellButtonClick }) {
	return (
		<button
			type="button"
			className={styles.listbutton}
			onClick={() => onDellButtonClick(item.id)}
		>
			{item.value} <br /> {item.formatted}
		</button>
	);
}
export default ListButton;
