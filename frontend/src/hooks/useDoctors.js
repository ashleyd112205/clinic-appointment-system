import { useCallback, useEffect, useState } from "react";
import { getDoctors } from "../api/clinicApi";

function useDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    getDoctors(controller.signal)
      .then((list) => setDoctors(list))
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [attempt]);

  const reload = useCallback(() => {
    setLoading(true);
    setError("");
    setAttempt((n) => n + 1);
  }, []);

  return { doctors, loading, error, reload };
}

export default useDoctors;