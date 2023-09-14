import AuthInput from '../AuthInput/AuthInput';

function AuthInputForEmail() {
  return (
    <AuthInput
      label="E-mail"
      params={{
        type: 'email',
        name: 'email',
        required: true,
        placeholder: 'example@yandex.ru'
      }}
    />
  );
}

export default AuthInputForEmail;
