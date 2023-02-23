import { useState } from 'react';
import {
  Button,
  Group,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import { useHistory } from 'react-router-dom';

import { Logo } from '../components/Logo';
import { useAuth } from '../support/useAuth';

export function LoginPage() {
  const history = useHistory();
  const auth = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        const result = await response.json();
        if (result.success) {
          const authenticatedUserId = String(result.token);
          auth.setUserId(authenticatedUserId);
          history.push('/');
        } else {
          alert('Invalid login, try again.');
        }
      }}
    >
      <Stack pt={32} px={16}>
        <Group p={16} position="center">
          <Logo width={60} />
        </Group>
        <Title order={1} fz={24} align="center">
          Welcome to Chirper
        </Title>
        <TextInput
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Group position="right">
          <Button type="submit">Login</Button>
        </Group>
      </Stack>
    </form>
  );
}
