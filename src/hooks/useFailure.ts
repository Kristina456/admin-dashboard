import { useState } from 'react';

export function useFailure() {
  const [error, setError] = useState<string | undefined>();

  async function simulateFailure() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/failure`);
      if (!response.ok) {
        setError(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('error', error);
    }
  }

  return { simulateFailure, error, setError };
}
