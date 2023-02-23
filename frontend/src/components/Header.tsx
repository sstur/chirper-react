import { createStyles, Flex, Group, Text } from '@mantine/core';
import { ReactNode } from 'react';

type Props = {
  title: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

export function Header(props: Props) {
  const { title, iconLeft, iconRight } = props;
  const { classes } = useStyles();
  return (
    <Group p={16} className={classes.header}>
      <Flex w={28}>{iconLeft}</Flex>
      <Text ta="center" fw="bold" sx={{ flex: 1 }}>
        {title}
      </Text>
      <Flex w={28}>{iconRight}</Flex>
    </Group>
  );
}

const useStyles = createStyles((_theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    background: 'white',
    borderBottom: '1px solid #e8e8e8',
  },
}));
