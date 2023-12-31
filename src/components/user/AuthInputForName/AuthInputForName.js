import AuthInput from '../AuthInput/AuthInput';

function AuthInputForName() {
  return (
    <AuthInput
      label="Имя"
      params={{
        type: 'text',
        name: 'name',
        required: true,
        minLength: 2,
        maxLength: 30,
        placeholder: 'Иван Иванов',
      }}
    />
  );
}

export default AuthInputForName;
