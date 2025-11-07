export const getTypeColor = type => {
  switch (type.toLowerCase()) {
    case 'open':
      return {
        backgroundColor: '#FFBF00',
        color: '#000000',
      };
    case 'completed':
      return {
        backgroundColor: '#228B22',
        color: '#FFFFFF',
      };
    default:
      return { color: '#EE4B2B', backgroundColor: '#228B22' };
  }
};

export const validateForm = (values, setError) => {
  let hasError = false;
  if (!values?.userId || values.userId.trim() === '') {
    setError(prevState => ({
      ...prevState,
      userId: 'UserId should not be empty',
    }));
    hasError = true;
  } else if (values?.userId.trim().length < 4) {
    setError(prevState => ({
      ...prevState,
      userId: 'UserId should be at least 4 characters long',
    }));
    hasError = true;
  } else {
    setError(prevState => ({ ...prevState, userId: '' }));
  }

  if (!values?.password || values.password.trim() === '') {
    setError(prevState => ({
      ...prevState,
      password: 'Password should not be empty',
    }));
    hasError = true;
  } else if (values?.password.trim().length < 6) {
    setError(prevState => ({
      ...prevState,
      password: 'Password should be at least 6 characters long',
    }));
    hasError = true;
  } else {
    setError(prevState => ({
      ...prevState,
      password: '',
    }));
  }

  return hasError;
};
