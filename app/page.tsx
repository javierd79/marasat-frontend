import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { Card, Image, Title, Button, Group, Center, Accordion, rem, Text, Badge } from '@mantine/core';
import Timeline from './Timeline';
import {Cardservicios} from './Cardservicios'
import { Navbar } from '@/components/Navbar/Navbar';

export default function HomePage() {
  const events = [
    { date: 'Paso 1', description: 'Descripcion' },
    { date: 'Paso 2', description: 'Descripcion' },
    { date: 'Paso 3', description: 'Descripcion' },
  ];
  return (
    <>
      <Navbar />

      <Group mt={-200} justify="space-between" mr={25} >

        <Image
          w={600}
          h={850}
          ml={100}
          src='https://github.com/javierd79/marasat-frontend/blob/main/public/starlink.png?raw=true'
          radius="xl"
        />


        <div>
          <Title ta="center" fz={130}>Titulo</Title>
          <Title ta="center" fz={50}>Eslogan</Title>
          <Center maw={400} h={100}>
            <Button size="lg" radius="xs" mt={35} variant="outline" color="rgba(255, 255, 255, 1)">Saber mas</Button>
          </Center>

        </div>

      </Group>

    
      <Cardservicios />


      <Group ml={15} mr={15} mt={35} justify="space-between">
        <Image
          w={600}
          h={750}
          src='https://images.unsplash.com/photo-1554629947-334ff61d85dc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D'
          radius="xl"
        />

        <div>
          <Title ta="center" fz={130}>Titulo</Title>
          <Title ta="center" fz={50}>Eslogan</Title>
          <Center maw={400} h={100}>
            <Button size="lg" radius="xs" mt={35} variant="outline" color="rgba(255, 255, 255, 1)">Saber mas</Button>
          </Center>

        </div>
        <Image
          w={600}
          h={750}
          src='https://www.lavanguardia.com/files/og_thumbnail/uploads/2016/01/04/5fa2bc7e588dd.jpeg'
          radius="xl"
        />

      </Group>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" d="M0,32L80,32C160,32,320,32,480,69.3C640,107,800,181,960,181.3C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <Card mb={-40} mt={-135} bg='white'>

        <Title mt={-45} c='black' ta="center" fz={130}>Titulo</Title>
        <Timeline events={events} />
      </Card>
    </>
  );
}
