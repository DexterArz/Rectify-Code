  // models/File.js
  import mongoose, { Schema, model, version } from 'mongoose';

  const fileSchema = new Schema({
    fileName: String,
    language: String,
    cloudinaryUrl: String,
    version: String,
    publicId: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    lastUpdated: Date,
  });

  export const File = mongoose.model("file",fileSchema)
