import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}

const Button = ({ children, buttonTypes, ...otherprops }) => {
    return <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonTypes]}`} {...otherprops}>{children}</button>
};

export default Button;