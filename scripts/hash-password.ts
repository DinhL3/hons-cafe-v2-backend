import * as bcrypt from 'bcrypt';

async function main() {
  const plainPassword = 'your-chosen-password';
  const hash = await bcrypt.hash(plainPassword, 10);
  console.log(hash);
}

void main();
