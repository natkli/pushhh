import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function getHashedPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

async function seed() {
  const email = "rachel@remix.run";
  const hashedPassword = await getHashedPassword("racheliscool");

  // Create test user
  await prisma.user.create({
    data: {
      email,
      avatarId: "avatar0",
      name: "Rachel Jakobsen",
      username: "rach",
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
