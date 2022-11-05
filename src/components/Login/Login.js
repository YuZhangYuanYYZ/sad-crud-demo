import './styles.scss';
import Button from 'react-bootstrap/Button';

export function Login() {
  return (
    <form className="loginFormContainer" onSubmit={1}>
      <label className="itemLabel">
        <p className="itemName">Username:</p>
        <input
          className="inputUsername"
          type="text"
          defaultValue={1}
          placeholder="please input user name"
          onBlur={(event) => {
            const newNameValue = event.target.value;
          }}
        />
      </label>

      <label className="itemLabel">
        <p className="itemName">Passcode:</p>
        <input
          className="inputPasscode"
          type="text"
          defaultValue={2}
          placeholder="please input passcode"
          onBlur={(event) => {
            const newItemDescription = event.target.value;
          }}
        />
      </label>

      <div className="cancelSubmitButtons">
        <Button className="cancelBtn" onClick={() => 2}>
          忘记秘码
        </Button>
        <input className="submitButton" type="submit" value="Save" />
      </div>
    </form>
  );
}
