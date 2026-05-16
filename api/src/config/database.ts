import mongoose from 'mongoose';

export const connectDatabase = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:2017/asset-manager';
    console.log('🚀 MongoDB connecting to:', mongoUri);
    await mongoose.connect(mongoUri);
    console.log('🚀 MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};