import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      required: false,
      trim: true,
      default: '',
    },
    tag: {
      type: String,
      enum: TAGS,
      required: false,
      default: 'Todo',
    },
  },
  {
    timestamps: true,
  },
);

noteSchema.index({ tag: 1 });

export const Note = model('Note', noteSchema);
