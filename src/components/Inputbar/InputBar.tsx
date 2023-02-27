interface InputBarProps {
  arialabel: string;
  type: string;
  className: string;
  placeholder: string;
}

export const InputBar = ({
  arialabel,
  className,
  placeholder,
  type,
}: InputBarProps): JSX.Element => {
  return (
    <>
      <h2>Register for the event</h2>
      <div className="form-span-container">
        <input></input>
      </div>
      <div className="form-span-container"></div>
      <div className="form-span-container"></div>
    </>
  );
};
