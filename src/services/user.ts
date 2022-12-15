import { githubUrl } from '../constants/index';

export const getUser = async (user: string) => {
  const response = await fetch(`${githubUrl}${user}`, { method: 'GET' });
  return response.json();
}