import { ActionIcon, Button, Stack, Textarea } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Header } from '../components/Header';
import { useAuth } from '../support/useAuth';

export function ComposePage() {
  const auth = useAuth();
  const history = useHistory();
  const [content, setContent] = useState('');
  if (auth.userId === undefined) {
    return <Redirect to="/login" />;
  }
  return (
    <form
      style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
      onSubmit={async (event) => {
        event.preventDefault();
        const response = await fetch('/api/chirps', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ userId: auth.userId, content }),
        });
        const result = await response.json();
        if (result.success === false) {
          alert('Failed to create post');
        } else {
          history.push('/');
        }
      }}
    >
      <Header
        title="New Chirp"
        iconLeft={
          <ActionIcon
            onClick={() => {
              history.push('/');
            }}
          >
            <IconArrowLeft size={18} />
          </ActionIcon>
        }
      />
      <Stack p={16} sx={{ flex: 1 }}>
        <Textarea
          variant="unstyled"
          placeholder="What's happening?"
          sx={{ flex: 1 }}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <Button type="submit" radius="xl" disabled={content === ''}>
          Send
        </Button>
      </Stack>
    </form>
  );
}
