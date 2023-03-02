import Button from "../Button/Button";
import { EventRegisterStyled } from "./EventRegisterStyled";

const EventRegister = (): JSX.Element => {
  const buttonText = "Sign up";
  const buttonType = "submit";
  const isDisabled = false;

  return (
    <>
      <h2>Register for the event</h2>
      <EventRegisterStyled className="form">
        <label htmlFor="email" className="form__label">
          Email
          <input
            type="email"
            id="email"
            placeholder="Introduce you email."
            autoComplete="off"
            className="form__input"
          ></input>
          <span className="required">Email is required</span>
        </label>

        <label htmlFor="password" className="form__label">
          Password
          <input
            type="password"
            id="password"
            placeholder="Introduce you password."
            className="form__input"
          ></input>
          <span className="required">Password is required</span>
        </label>

        <label htmlFor="image" className="form__label">
          Image
          <input
            type="file"
            id="image"
            placeholder="Introduce an image for your profile."
            accept="image/*"
            className="form__input form__input--file"
          ></input>
        </label>
      </EventRegisterStyled>

      <div className="button__container">
        <Button text={buttonText} type={buttonType} disabled={isDisabled} />
        <span className="required">Sorry, something went wrong</span>
      </div>
    </>
  );
};

export default EventRegister;
