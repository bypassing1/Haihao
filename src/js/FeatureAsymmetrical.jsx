import { IconCertificate, IconCoin, IconTruck } from '@tabler/icons-react';
import { Container, SimpleGrid, Text, Flex } from '@mantine/core';
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
        title: 'Babelan Shipping',
        description:
            'We currently provide shipping services exclusively within the Babelan area. Our primary delivery method utilizes Gojek, ensuring prompt and reliable service. For customers who prefer a more hands-on approach, we also offer an option to pick up orders directly from our location. Rest assured, your orders are handled with care to maintain quality during transit.',
    },
    {
        icon: IconCertificate,
        title: 'Best Quality Product',
        description:
            'Our chicken meat is sourced from trusted suppliers, ensuring freshness and quality with every bite. It is paired with our signature mentai sauce and a touch of our homemade chili oil, providing a perfect balance of flavors. Each product is prepared meticulously to uphold our commitment to delivering the best culinary experience for our customers.',
    },
    {
        icon: IconCoin,
        title: 'Very Affordable Pricing',
        description:
            'We believe that great food should be accessible to everyone. Our menu offers high-quality, flavorful dishes at prices that won’t break the bank. Whether you’re indulging in our signature chicken or exploring other items, you’ll find exceptional value that satisfies both your taste buds and your wallet.',
    },
];


// FeaturesAsymmetrical component
export function FeaturesAsymmetrical() {
    const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

    return (
        <Container mt={30} mb={30} size="lg">
            <Flex wrap="wrap" justify={'center'} cols={3} spacing={50}>
                {items}
            </Flex>
        </Container>
    );
}
