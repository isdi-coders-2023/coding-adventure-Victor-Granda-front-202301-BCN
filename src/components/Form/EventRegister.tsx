export const EventRegister = (): JSX.Element => {
  return (
    <>
      <form>
        <h2>Register for the event</h2>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Introduce you email"
        ></input>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Introduce you password"
        ></input>

        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          placeholder="Introduce an image for your profile"
        ></input>
      </form>
    </>
  );
};
