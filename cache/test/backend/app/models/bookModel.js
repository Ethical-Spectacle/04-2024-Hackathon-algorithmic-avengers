// import mongoose from 'mongoose';
// const schema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
// });

// export default mongoose.model('User', schema);
import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);