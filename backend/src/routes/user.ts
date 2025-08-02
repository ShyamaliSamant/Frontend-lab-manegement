// src/api/user.ts
export const createUser = async (data: { name: string; email: string }) => {
  const res = await fetch('http://localhost:5000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('Failed to create user');
  return await res.json();
};
