import { IconCertificate, IconCoin, IconTruck } from '@tabler/icons-react';
import { Container, SimpleGrid, Text } from '@mantine/core';
import classes from '../css/FeatureAsymmetrical.module.css';

// Feature component
function Feature({ icon: Icon, title, description, className, ...others }) {
    return (
        <div className={classes.feature} {...others}>
            <div className={classes.overlay} />

            <div className={classes.content}>
                <Icon size={38} className={classes.icon} stroke={1.5} />
                <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
                    {title}
                </Text>
                <Text c="dimmed" fz="sm">
                    {description}
                </Text>
            </div>
        </div>
    );
}

const mockdata = [
    {
        icon: IconTruck,
        title: 'Babelan shipping',
        description:
            'For now only ship around babelan using gojek service, or customer can come to pick up.',
    },
    {
        icon: IconCertificate,
        title: 'Best Quality Product',
        description:
            'High quality chicken meat, with mentai sauce and chili oil.',
    },
    {
        icon: IconCoin,
        title: 'Very Affordable Pricing',
        description:
            'Affordable food with delicious taste.',
    },
];

// FeaturesAsymmetrical component
export function FeaturesAsymmetrical() {
    const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

    return (
        <Container mt={30} mb={30} size="lg">
            <SimpleGrid cols={3} spacing={50}>
                {items}
            </SimpleGrid>
        </Container>
    );
}
