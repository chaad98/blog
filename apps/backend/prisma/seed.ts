import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

async function main() {
  const users = Array.from({ length: 10 }).map(() => ({
    name: faker.person.firstName(),
    email: faker.internet.email(),
    bio: faker.lorem.sentence(),
    avatar: faker.image.avatar(),
  }));

  await prisma.user.createMany({
    data: users,
  });

  const posts = Array.from({ length: 40 }).map(() => ({
    slug: generateSlug(faker.lorem.sentence()),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(2),
    thumbnail: faker.image.urlLoremFlickr(),
    published: true,
    authorId: faker.number.int({ min: 1, max: 10 }),
  }));

  await Promise.all(
    posts.map(
      async (post) =>
        await prisma.post.create({
          data: {
            ...post,
            comments: {
              createMany: {
                data: Array.from({ length: 20 }).map(() => ({
                  content: faker.lorem.sentence(),
                  authorId: faker.number.int({ min: 1, max: 10 }),
                })),
              },
            },
          },
        }),
    ),
  ).finally(() => console.log('done create all Post with Comment'));

  console.log('Seeding completed!');
}

main()
  .then(() => {
    prisma.$disconnect();
    process.exit(0); // indicates that the process ended successfully without errors.
  })
  .catch((e) => {
    prisma.$disconnect();
    console.error('Error occured while seeding:', e);
    process.exit(1); // indicates that the process ended due to an error.
  });
