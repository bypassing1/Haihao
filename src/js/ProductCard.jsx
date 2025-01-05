import { Badge, Button,Title, Card,Container, Flex, Group, Image, Text } from '@mantine/core';
import classes from '../css/ProductCard.module.css';
import mentai from '../assets/picture-1674471511.png'
import dimsum from '../assets/dimsum-food-3d-png-image_11466610.png'

export function ProductCard() {
    return (
        <Container className={classes.root} fluid>
            <Title className={classes.featuretitle}>Delight in Every Bite, Priced Just Right</Title>
                        <Container size={560} p={0}>
                            <Text size="sm" className={classes.description}>
                            Explore our menu of mouthwatering dim sum, crafted with quality ingredients and offered at prices that satisfy both your cravings and your wallet. Perfect portions, unbeatable value!
                            </Text>
                        </Container>
            <Flex wrap="wrap" justify={'center'}>
            <Card withBorder radius="md" className={classes.card}>
            <Card.Section className={classes.imageSection}>
                <Image src={dimsum} alt="Dimsum" />
            </Card.Section>

            <Group justify="space-between" mt="md">
                <div>
                    <Text fw={500}>Classic Dimsum</Text>
                    <Text fz="xs" c="dimmed">
                    Soft, steamed dumplings filled with perfectly seasoned meats and vegetables—a timeless treat that never goes out of style.
                    </Text>
                </div>
                <Badge variant="outline">0% off</Badge>
            </Group>

            <Card.Section className={classes.section}>
                <Group gap={30}>
                    <div>
                        <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                            Rp 6.000
                        </Text>
                        <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
                            per pcs
                        </Text>
                    </div>

                    <Button className={classes.button} radius="xl" style={{ flex: 1 }}>
                        Buy Now
                    </Button>
                </Group>
            </Card.Section>
        </Card>

        <Card withBorder radius="md" className={classes.card}>
            <Card.Section className={classes.imageSection}>
                <Image src={mentai} alt="Dimsum" />
            </Card.Section>

            <Group justify="space-between" mt="md">
                <div>
                    <Text fw={500}>Mentai Dimsum</Text>
                    <Text fz="xs" c="dimmed">
                    A perfect blend of creamy, savory mentaiko sauce draped over tender, steamed dumplings—each bite bursting with rich umami flavors
                    </Text>
                </div>
                <Badge variant="outline">0% off</Badge>
            </Group>

            <Card.Section className={classes.section}>
                <Group gap={30}>
                    <div>
                        <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                            Rp 23.000
                        </Text>
                        <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
                            per 6 pcs
                        </Text>
                    </div>

                    <Button className={classes.button} radius="xl" style={{ flex: 1 }}>
                        Buy Now
                    </Button>
                </Group>
            </Card.Section>
        </Card>
        </Flex>
        </Container>
    );
}