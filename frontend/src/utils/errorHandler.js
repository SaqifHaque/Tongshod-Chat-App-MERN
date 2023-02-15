export const errorHandler = (error) => {
    const message = (
            error.response && error.response.data && error.response.data.message
        ) || error.message || error.toString();

        // console.log(error, "error");

        // toast.error(message);
}

