type HttpStatusCodes = {
	OK: number;
	NOT_FOUND: number;
	SERVER_ERROR: number;
};

const httpStatusCodes: HttpStatusCodes = {
	OK: 200,
	NOT_FOUND: 404,
	SERVER_ERROR: 500,
};

export default httpStatusCodes;
