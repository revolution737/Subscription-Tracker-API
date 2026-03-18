import mongoose from 'mongoose';

export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
    // logic to create new user
    } catch(error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const signIn = async (req, res, next) => {
    //sign in logic
}

export const signOut = async (req, res, next) => {
    //sign out logic
}