import gifts from '@/model/gifts';
import { StatusCodes } from 'http-status-codes';

export async function POST() {
  const { occasion, category, tags } = req.query;

  try {
    // MongoDB aggregation pipeline
    const bestMatch = await gifts.aggregate([
      {
        // Match documents based on the occasion
        $match: {
          occasion: occasion || '', // Default to an empty string if not provided
        },
      },
      {
        // Add a score field to rank matches based on category and tags
        $addFields: {
          matchScore: {
            $add: [
              { $cond: [{ $eq: ['$category', category] }, 2, 0] }, // Adjust weight as needed
              { $cond: [{ $in: [tags, '$tags'] }, 1, 0] }, // Match tags using `$in`
            ],
          },
        },
      },
      {
        // Sort documents by matchScore in descending order
        $sort: { matchScore: -1 },
      },
      {
        // Limit to the best match
        $limit: 1,
      },
      {
        // Project only the required fields
        $project: {
          _id: 1,
          gift_name: 1,
          price: 1,
          category: 1,
          tags: 1,
          recipient_age_group: 1,
          occasion: 1,
          purchase_link: 1,
          gift_description: 1,
          recipient_name: 1,
          shipping_address: 1,
          matchScore: 1, // Optional: Remove this if not needed in the output
        },
      },
    ]);

    if (bestMatch.length === 0) {
      return res.status(404).json({ message: 'No matching gift found' });
    }

    // Return the best match
    res.json(bestMatch);
  } catch (error) {
    console.error('Error fetching best match:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
  //   return Response.json(
  //     {
  //       message: 'Welcome to the app',
  //     },
  //     { status: StatusCodes.OK }
  //   );
}
