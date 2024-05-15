'use client'

import { Card, Image, Button, Group, Title } from '@mantine/core';

export function Cardservicios() {
    return (
        <Card mt={35} bg='white'>


            {/* <Title c='black' mt={100} ta="center" fz={50}> La mejor conexión satelital la tenemos disponible para ti</Title>
            */}
            <Group mt={105} mb={25} style={{justifyContent:'space-evenly'}}>

            <Card w={550} shadow="xl" padding="lg" radius="md" >
                <Card.Section>
                    <Image
                        src="https://img.freepik.com/vector-gratis/barco-contenedores-dibujados-mano-mar_23-2149147765.jpg?t=st=1715785285~exp=1715788885~hmac=e7a8dd2ac75615b414e5b60a7222eb10850e209b50f22c6485f2eac1af809244&w=1060"
                        height={250}
                        alt="Norway"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    
            <Title ta="center" fz={50}>Conexión en el agua</Title>
                </Group>


            </Card>

            <Card w={550} shadow="xl" padding="lg" radius="md" >
                <Card.Section>
                    <Image
                        src="https://img.freepik.com/vector-gratis/coche-deportivo-azul-aislado-vector-blanco_53876-67354.jpg?t=st=1715785442~exp=1715789042~hmac=194091cc6c741f96c5a8e094366b5cc982568277a427ff4977766c8444ff6a65&w=996"
                        height={250}
                        alt="Norway"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    
            <Title ta="center" fz={40}>Conexión en movimiento</Title>
                </Group>


             
            </Card>

            <Card w={550} shadow="xl" padding="lg" radius="md">
                <Card.Section>
                    <Image
                        src="https://img.freepik.com/vector-gratis/ilustracion-concepto-casa-playa_114360-9433.jpg?t=st=1715785678~exp=1715789278~hmac=ebb092f0286884a9e1dcad81ec1cc36e91d7abdfc7214506a003ee4e05b8c1cb&w=1060"
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

            <Button  mb={25} w={190} size="lg" radius="xs" mt={35} variant="outline" color="rgba(0, 0, 0, 1)">Saber mas</Button>
            </Group>
 
      
        </Card>
    );
}