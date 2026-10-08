const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// ASSUMED route: confirm with Dev 3 (not in the backend yet)
export const ENDPOINTS = {
  doctors: "/doctors",
};

export class ApiError extends Error {
  constructor(message, status = 0, details = null) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

async function request(path, { method = "GET", body, signal } = {}) {
  let res;
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
      signal,
    });
  } catch (err) {
    if (err.name === "AbortError") throw err;
    throw new ApiError("Can't reach the server. Check your connection and try again.");
  }

  let payload = null;
  try {
    payload = await res.json();
  } catch {
    // empty or non-JSON body
  }

  // The backend currently returns { message, ... } with no success/data wrapper
  if (!res.ok) {
    throw new ApiError(payload?.message || `Request failed (${res.status})`, res.status, payload);
  }
  return payload && "data" in payload ? payload.data : payload;
}

export const normalizeDoctor = (d) => ({
  id: d.id ?? d._id,
  name: d.name ?? d.fullName ?? "Unnamed doctor",
  specialization: d.specialization ?? d.specialty ?? "General practice",
});

const toList = (data) => (Array.isArray(data) ? data : data?.items ?? data?.doctors ?? []);

export async function getDoctors(signal) {
  const data = await request(ENDPOINTS.doctors, { signal });
  return toList(data).map(normalizeDoctor);
}