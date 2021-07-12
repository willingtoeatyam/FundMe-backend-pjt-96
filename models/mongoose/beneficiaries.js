const bcrypt = require('bcrypt');
const mongoose = require("mongoose"),
  { Schema } = mongoose,
  beneficiariesSchema = new Schema(
    {
      name: {
        firstName: {
          type: String,
          trim: true,
          required: true,
        },
        lastName: {
          type: String,
          trim: true,
          required: true,
        }
      },
      password: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        trim: true,
        required: true,
      },
      state: {
        type: String,
        trim: true,
        required: true,
      },
      city: {
        type: String,
        trim: true,
        required: true,
      },
      address: {
        type: String,
        trim: true,
        required: true,
      },
      postalcode: {
        type: String,
        trim: true,
        required: true,
      },
      email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true,
      },
      phoneNumber: {
        type: Number,
        required: true,
      },
      cacDocument: {
        type: Buffer,
       // required: true
      },
      govVerification: {
        type: Buffer,
        //required: true
      }
    },
    {
      timestamps: true,
    }
  );

beneficiariesSchema.pre("save", function (next) {
  let user = this;
  bcrypt
    .hash(user.password, 10)
    .then((hash) => {
      user.password = hash;
      next();
    })
    .catch((error) => {
      console.log(`Error in hashing password: ${error.message}`);
      next(error);
    });
});

beneficiariesSchema.methods.passwordComparison = function (inputPassword) {
  let user = this;
  return bcrypt.compare(inputPassword, user.password);
};

const Beneficiary = mongoose.model("Beneficiary", beneficiariesSchema);

module.exports = Beneficiary