export const validation = {
  name: {
    required: {
      value: "required",
      message: "Required field",
    },
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: "Only latins is accepted",
    },
    minLength: {
      value: 2,
      message: "Min length is 2",
    },
    maxLength: {
      value: 12,
      message: "Max length is 12",
    },
  },
  phone: {
    required: {
      value: "required",
      message: "Required field",
    },
    pattern: {
      value: /^\d{9}$/,
      message: "The number is incorrect",
    },
    minLength: {
      value: 9,
      message: "Only 9 digits",
    },
    maxLength: {
      value: 9,
      message: "Only 9 digits",
    },
  },
  email: {
    required: {
      value: "required",
      message: "Required field",
    },
    pattern: {
      value:
        /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
      message: "The email address is incorrect",
    },
  },
  surname: {
    required: {
      value: "required",
      message: "Required field",
    },
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: "Only latins is accepted",
    },
    minLength: {
      value: 2,
      message: "Min length is 2",
    },
    maxLength: {
      value: 12,
      message: "Max length is 12",
    },
  },
};
