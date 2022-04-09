import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(10).required(),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(10).required(),
});

export const addSchema = yup.object().shape({
  title: yup.string().required(),
  case: yup.string().required(),
  motherboard: yup.string().required(),
  cpu: yup.string().required(),
  ram: yup.string().required(),
  storage: yup.string().required(),
  gpu: yup.string().required(),
  psu: yup.string().required(),
  image: yup.string().url().required(),
  reviewLink: yup.string().url().required(),
  price: yup.number().required(),
});

export const orderSchema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  number: yup.number().required(),
  city: yup.string().required(),
  address: yup.string().required(),
});
