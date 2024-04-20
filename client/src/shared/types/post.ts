/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Post {
    _id: { $oid: string };
    name: string;
    category: string;
    description: string;
    imageUrl?: string;
    nsfw: boolean;
    author: string;
    community?: string;
    votes: { user: string; voteStatus: number; _id: { $oid: string } }[];
    comments?: any[]; // You might want to create a type for comments as well
    createdAt: { $date: { $numberLong: string } };
    updatedAt: { $date: { $numberLong: string } };
    __v: { $numberInt: string };
  }