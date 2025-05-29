import { isAxiosError } from 'axios';

export const catchHTTPError = (error: unknown) => {
	if (isAxiosError(error)) {
		if (error.response?.data.message) return error.response.data.message;
		else return error.message;
	} else if (error instanceof Error) {
		return error.message;
	} else {
		return 'Unexpected error';
	}
};
