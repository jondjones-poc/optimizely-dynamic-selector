import style from "./Button.module.css";
import style2 from "./Test.module.css";

const Button = (props) => {
  return (
    <>
      <button type={props.type} className={style.button} onClick={props.onClick} id="myButton">
        {props.children}
      </button>
      <button data-name="button" type={props.type} className={style2.button} onClick={props.onClick}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
