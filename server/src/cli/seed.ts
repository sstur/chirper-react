import { db } from '../db';

const users = [
  {
    username: 'brendaneich',
    fullName: 'Brendan Eich',
    profilePic:
      'https://user-images.githubusercontent.com/369384/211051084-b421a640-42ff-4cc8-8eeb-a009c99fd173.png',
    bio: `Co-founder & CEO @Brave Software (https://brave.com). Co-founded Mozilla & Firefox. Created JavaScript.`,
    following: [],
    followers: [],
    likedChirps: [],
  },
  {
    username: 'sstur',
    fullName: 'Simon',
    profilePic:
      'https://s.gravatar.com/avatar/a01b931867096ec8874202e233279212?s=256',
    bio: 'Software engineer, founder, speaker, trainer. SF Bay Area.',
    following: [],
    followers: [],
    likedChirps: [],
  },
  {
    username: 'trevornoah',
    fullName: 'Trevor',
    profilePic:
      'https://user-images.githubusercontent.com/369384/210929062-bc7b3209-6961-4e1f-bd0c-16dd38eba013.jpg',
    bio: 'Comedian from South Africa. I was in the crowd when Rafiki held Simba over the edge of the cliff, like an African Michael Jackson.',
    following: [],
    followers: [],
    likedChirps: [],
  },
  {
    username: 'thomasmiles98',
    fullName: 'Thomas Miles',
    profilePic: '',
    bio: '',
    following: [],
    followers: [],
    likedChirps: [],
  },
  {
    username: 'oliviagreene',
    fullName: 'Olivia Greene',
    profilePic: '',
    bio: '',
    following: [],
    followers: [],
    likedChirps: [],
  },
];

const chirps = [
  {
    content:
      'NYC! Join me on Tuesday 11/29, as I host a black theatre night for one of the most transcendent plays I’ve seen.',
    author: 'trevornoah',
    likedBy: [],
    createdAt: '2023-01-06T01:30:22.000Z',
  },
  {
    content: `Join me to learn TypeScript and React. We'll build an awesome final project.`,
    author: 'sstur',
    likedBy: [],
    createdAt: '2023-01-05T01:10:00.000Z',
  },
  {
    content: 'I miss when Lindsay Lohan ruled cinema',
    author: 'oliviagreene',
    likedBy: [],
    createdAt: '2023-01-04T01:10:00.000Z',
  },
  {
    content: `Who owns your attention? Who owns your web browsing experience? Who gets paid? If not you, then you're "product".`,
    author: 'brendaneich',
    likedBy: [],
    createdAt: '2023-01-03T01:10:00.000Z',
  },
];

async function seed() {
  const userByUsername = new Map<string, string>();
  for (const user of users) {
    const created = await db.User.insert(user);
    userByUsername.set(user.username, created.id);
    console.log(`Created user: ${user.username}`);
  }
  for (const chirp of chirps) {
    // Update the author to contain the acutal user ID
    chirp.author = userByUsername.get(chirp.author) ?? '';
    const created = await db.Chirp.insert(chirp);
    console.log(`Created chirp: ${created.id}`);
  }
  console.log('Done.');
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
