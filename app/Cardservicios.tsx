'use client'

import { Card, Image, Button, Group, Title } from '@mantine/core';

export function Cardservicios() {
    return (
        <Card bg='white'>


            <Title c='black' mt={100} ta="center" fz={50}> La mejor conexión satelital la tenemos disponible para ti</Title>
           
            <Group mb={25} justify="space-between">

            <Card w={550} shadow="sm" padding="lg" radius="md" >
                <Card.Section>
                    <Image
                        src="https://wallpaper29.files.wordpress.com/2016/11/papel-de-parede-do-carro-ferrari-2017.jpg"
                        height={250}
                        alt="Norway"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    
            <Title ta="center" fz={50}>Conexión en el agua</Title>
                </Group>


            </Card>

            <Card w={550} shadow="sm" padding="lg" radius="md" >
                <Card.Section>
                    <Image
                        src="https://wallpaper29.files.wordpress.com/2016/11/papel-de-parede-do-carro-ferrari-2017.jpg"
                        height={250}
                        alt="Norway"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    
            <Title ta="center" fz={40}>Conexión en movimiento</Title>
                </Group>


             
            </Card>

            <Card w={550} shadow="sm" padding="lg" radius="md">
                <Card.Section>
                    <Image
                        src="https://wallpaper29.files.wordpress.com/2016/11/papel-de-parede-do-carro-ferrari-2017.jpg"
                        height={250}
                        alt="Norway"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    
            <Title ta="center" fz={50}>Conexión en el hogar</Title>
                </Group>


            </Card>

            
            </Group>
            

            <Group mb={25} justify="center">

            <Button mb={25} w={190} size="lg" radius="xs" mt={35} variant="outline" color="rgba(0, 0, 0, 1)">Saber mas</Button>
            </Group>
 
      
        </Card>
    );
}