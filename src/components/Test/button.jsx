// app/components/button/index.jsx
import styles from "./styles.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
];

export const Button = React.forwardRef(
  ({ children, ...props }, ref) => {
    return <button className="btn">vfrwefwwf</button>
  }
);
Button.displayName = "Button";