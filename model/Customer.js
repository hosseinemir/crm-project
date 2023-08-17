import { model, models, Schema } from "mongoose";

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 4,
    maxLenght: 25,
  },
  lastname: {
    type: String,
    required: true,
    minLength: 4,
    maxLenght: 25,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    minLength: 11,
    maxLenght: 11,
  },
  address: String,
  postalCode: Number,
  date: Date,
  products: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Customer = models.Customer || model("Customer",customerSchema)

export default Customer
