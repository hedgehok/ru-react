import { useState, useEffect, useCallback, useMemo } from 'react';

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const stableOptions = useMemo(() => options, [JSON.stringify(options)]);

  const fetchData = useCallback(async (params = {}) => {
    if (!url) return;

    setIsLoading(true);
    setError(null);

    try {
      const queryString = Object.keys(params).length
        ? `?${new URLSearchParams(params).toString()}`
        : '';
      const response = await fetch(`${url}${queryString}`, stableOptions);

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [url, stableOptions]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback((payload = {}) => {
    fetchData(payload.params ? payload.params : {});
  }, [fetchData]);

  return { data, isLoading, error, refetch };
}