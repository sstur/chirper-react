import { Stack } from '@mantine/core';

import { ChirpView } from './ChirpView';
import { Chirp, User } from '../types';

type Props = {
  chirps: Array<Chirp>;
  users: Array<User>;
};

export function ChirpList(props: Props) {
  const { chirps, users } = props;
  return (
    <Stack>
      {chirps.map((chirp) => {
        const user = users.find((user) => user.id === chirp.author);
        return user ? (
          <ChirpView key={chirp.id} chirp={chirp} author={user} />
        ) : null;
      })}
    </Stack>
  );
}
