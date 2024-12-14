import { StatusCodes } from 'http-status-codes';

export async function GET() {
  return Response.json(
    {
      message: 'Welcome to the app',
    },
    { status: StatusCodes.OK }
  );
}
