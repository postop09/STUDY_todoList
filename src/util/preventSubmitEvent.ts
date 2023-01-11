import { FormEvent } from 'react';

const preventSubmitEvent = (e: FormEvent<HTMLFormElement>, onSubmit: () => void) => {
  e.preventDefault();
  onSubmit();
};

export default preventSubmitEvent;