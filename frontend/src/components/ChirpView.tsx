import { Button, Group, Stack, Text } from '@mantine/core';
import { IconHeart, IconRefresh } from '@tabler/icons';

import { Chirp, User } from '../types';
import { ProfilePic } from './ProfilePic';

type Props = {
  chirp: Chirp;
  author: User;
};

// Note: we don't have the author / user details here, so just use placeholder info for that, for now.
export function ChirpView(props: Props) {
  const { chirp, author } = props;
  return (
    <Group
      p={16}
      noWrap
      align="flex-start"
      sx={{ borderBottom: '1px solid #e8e8e8' }}
    >
      <ProfilePic user={author} />
      <Stack>
        <Group spacing="xs">
          <Text fw="bold">{author.fullName}</Text>
          <Text fz="sm" color="gray">
            @{author.username}
          </Text>
        </Group>
        <Text>{chirp.content}</Text>
        <Group>
          <Button size="xs" color="gray" variant="subtle">
            <IconRefresh size={16} />
            <Text ml={4}>Rechirp</Text>
          </Button>
          <Button size="xs" color="gray" variant="subtle">
            <IconHeart size={16} />
            <Text ml={4}>Like</Text>
          </Button>
        </Group>
      </Stack>
    </Group>
  );
}
