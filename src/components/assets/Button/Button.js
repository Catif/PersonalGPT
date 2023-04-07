import "./Button.scss";

export default function Button({ className = "button", type = "button", onClick = () => {}, label = "Click me!" }) {
	return (
		<button className={className} type={type} onClick={onClick}>
			{label}
		</button>
	);
}
