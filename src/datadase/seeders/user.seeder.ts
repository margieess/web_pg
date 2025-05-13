import { DataSource } from 'typeorm';
import { User } from 'users/user.entity/user.entity';
import { AppDataSource } from 'data-source';

async function seed() {
  try {
    await AppDataSource.initialize();
    const userRepository = AppDataSource.getRepository(User);

    const users = [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
    ];

    await userRepository.save(users);

    console.log('Users seeded successfully.');
    await AppDataSource.destroy();
  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1);
  }
}

seed();
