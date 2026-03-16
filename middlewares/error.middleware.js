const errorMiddleware = (err, req, res, next) => {
    try {
        let error = { ...err };
        error.message = err.message;

        console.error(err);

        //mongoose bad ObjectId
        if(err.name == 'CastError') {
            const message = 'Resource not Found';
            error = new Error(message);
            error.statusCode = 404;
        }
    } catch (error) {
        next(error);
    }
};
