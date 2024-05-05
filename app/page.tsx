import { Navbar } from '@/components/Navbar/Navbar';
import { Group } from '@mantine/core';
import Image from 'next/image';
// import { Welcome } from '../components/Welcome/Welcome'; 

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Group justify='apart'>
        <Image
          width={700}
          height={700}
          src="/starlink-world.jpeg"
          alt='Starlink'
        />
      </Group>
    </>
  );
}
