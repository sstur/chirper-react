import { ActionIcon, Loader, Stack } from '@mantine/core';
import { IconLogin, IconPlus } from '@tabler/icons';
import { useQuery } from '@tanstack/react-query';
import { useHistory } from 'react-router-dom';

import { ChirpList } from '../components/ChirpList';
import { Header } from '../components/Header';
import { useAuth } from '../support/useAuth';
import { Chirp, User } from '../types';

async function getChirps() {
  const response = await fetch('/api/chirps');
  const chirps: Array<Chirp> = await response.json();
  return chirps;
}

async function getUsers() {
  const response = await fetch('/api/users');
  const users: Array<User> = await response.json();
  return users;
}

export function FeedPage() {
  const history = useHistory();
  const auth = useAuth();
  const { data: chirps } = useQuery(['feed-chirps'], getChirps);
  const { data: users } = useQuery(['feed-users'], getUsers);
  return (
    <Stack>
      <Header
        title="Home"
        iconLeft={
          auth.userId ? null : (
            <ActionIcon
              onClick={() => {
                history.push('/login');
              }}
            >
              <IconLogin size={18} />
            </ActionIcon>
          )
        }
        iconRight={
          <ActionIcon
            onClick={() => {
              history.push('/new');
            }}
          >
            <IconPlus size={18} />
          </ActionIcon>
        }
      />
      {!chirps || !users ? (
        <Loader />
      ) : (
        <ChirpList chirps={chirps} users={users} />
      )}
    </Stack>
  );
}
