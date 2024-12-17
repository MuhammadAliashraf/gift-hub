// import dbConnect from '@/lib/db-connect';
// import ProductModel from '@/model/gifts';
// import { StatusCodes } from 'http-status-codes';
// export async function GET(req, res) {
//   await dbConnect();
//   const { occasion, category, tags } = req.json();
//   return Response.json(
//     {
//       message: 'Welcome to the app',
//       occasion,
//       category,
//       tags,
//     },

//     { status: StatusCodes.OK }
//   );
//   return;
//   try {
//     // MongoDB aggregation pipeline
//     const bestMatch = await ProductModel.aggregate([
//       {
//         // Match documents based on the occasion
//         $match: {
//           occasion: occasion || '', // Default to an empty string if not provided
//         },
//       },
//       {
//         // Add a score field to rank matches based on category and tags
//         $addFields: {
//           matchScore: {
//             $add: [
//               { $cond: [{ $eq: ['$category', category] }, 2, 0] }, // Adjust weight as needed
//               { $cond: [{ $in: [tags, '$tags'] }, 1, 0] }, // Match tags using `$in`
//             ],
//           },
//         },
//       },
//       {
//         // Sort documents by matchScore in descending order
//         $sort: { matchScore: -1 },
//       },
//     ]);

//     if (bestMatch.length === 0) {
//       return Response.json(
//         {
//           message: 'No matching gift found',
//         },
//         { status: StatusCodes.NOT_FOUND }
//       );
//     }

//     // Return the best match
//     return Response.json(
//       {
//         message: 'fetch',
//         bestMatch,
//       },
//       { status: StatusCodes.OK }
//     );
//   } catch (error) {
//     console.error('Error fetching best match:', error);
//     return Response.json(
//       {
//         message: 'There is an internal server error',
//       },
//       { status: StatusCodes.INTERNAL_SERVER_ERROR }
//     );
//   }
//   // return Response.json(
//   //   {
//   //     message: 'Welcome to the app',
//   //   },
//   //   { status: StatusCodes.OK }
//   // );
// }
import dbConnect from '@/lib/db-connect';
import ProductModel from '@/model/gifts';
import { StatusCodes } from 'http-status-codes';

// GET Query From Client Side :http://localhost:3000/api/search?occasion=Birthday&category=Electronic&tags=Technology
// TODO: query is not working right now

// export async function GET(req) {
//   await dbConnect();

//   try {
//     // Extract query parameters from the URL
//     const { searchParams } = req.nextUrl;
//     console.log(searchParams);
//     const occasion = searchParams.get('occasion') || '';
//     const category = searchParams.get('category') || '';
//     const tags = searchParams.get('tags') || '';
//     // ? searchParams.get('tags')
//     // .split(',')
//     // : [];

//     // MongoDB aggregation pipeline
//     const bestMatch = await ProductModel.aggregate([
//       {
//         // Match documents based on the occasion
//         $match: {
//           occasion: occasion, // Default to an empty string if not provided
//         },
//       },
//       {
//         // Add a score field to rank matches based on category and tags
//         $addFields: {
//           matchScore: {
//             $add: [
//               { $cond: [{ $eq: ['$category', category] }, 2, 0] }, // Adjust weight as needed
//               {
//                 $cond: [{ $anyElementTrue: [{ $in: ['$tags', tags] }] }, 1, 0],
//               }, // Match tags using `$in`
//             ],
//           },
//         },
//       },
//       {
//         // Sort documents by matchScore in descending order
//         $sort: { matchScore: -1 },
//       },
//     ]);

//     // Check if no matches are found
//     if (bestMatch.length === 0) {
//       return Response.json(
//         {
//           message: 'No matching gift found',
//         },
//         { status: StatusCodes.NOT_FOUND }
//       );
//     }

//     // Return the best match
//     return Response.json(
//       {
//         message: 'fetch',
//         bestMatch,
//       },
//       { status: StatusCodes.OK }
//     );
//   } catch (error) {
//     console.error('Error fetching best match:', error);
//     return Response.json(
//       {
//         message: 'There is an internal server error',
//         error: error.message,
//       },
//       { status: StatusCodes.INTERNAL_SERVER_ERROR }
//     );
//   }
// }

export async function GET(req) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Extract query parameters
    const { searchParams } = new URL(req.url);
    const occasion = searchParams.get('occasion') || '';
    const category = searchParams.get('category') || '';
    const tags = searchParams.get('tags')?.split(',') || [];

    // Convert tags to array

    // Aggregation pipeline
    const results = await ProductModel.aggregate([
      {
        // Step 1: Match documents by occasion
        $match: {
          occasion: occasion,
        },
      },
      {
        // Step 2: Add matchScore field
        $addFields: {
          matchScore: {
            $add: [
              { $cond: [{ $eq: ['$category', category] }, 2, 0] }, // +2 points for category match
              // {
              //   $size: {
              //     $setIntersection: [tags, '$tags'], // +1 point for each matching tag
              //   },
              // },
            ],
          },
        },
      },
      {
        // Step 3: Sort by matchScore in descending order
        $sort: { matchScore: -1 },
      },
    ]);

    // Check if no results found
    if (results.length === 0) {
      return Response.json(
        { message: 'No matching results found' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    // Return results
    return Response.json(
      {
        message: 'Search results fetched successfully',
        results,
      },
      { status: StatusCodes.OK }
    );
  } catch (error) {
    console.error('Error in search aggregation:', error);
    return Response.json(
      { message: 'Internal server error', error: error.message },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
