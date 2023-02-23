import { Avatar } from '@mantine/core';

import { User } from '../types';

type Props = {
  user: User;
};

export function ProfilePic(props: Props) {
  const user = props.user;
  if (user.profilePic) {
    return (
      <Avatar
        size="lg"
        radius="xl"
        src={user.profilePic}
        alt="Profile Picture"
      />
    );
  }
  // Some logic to compute the initials to display
  const parts = user.fullName.trim().split(/\s+/);
  let initials = '';
  if (parts.length > 1) {
    initials = parts
      .slice(0, 2)
      .map((s) => s.slice(0, 1))
      .join('');
  } else {
    initials = parts.join('').slice(0, 2);
  }
  return (
    <Avatar color="cyan" size="lg" radius="xl" alt="User Initials">
      {initials.toUpperCase()}
    </Avatar>
  );
}
