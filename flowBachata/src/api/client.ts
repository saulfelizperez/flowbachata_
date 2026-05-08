const API_URL = "http://localhost:4000/api/v1";

/**
 * Tipos genéricos de respuesta API
 * (asegúrate de tener esto o similar en src/types/api.ts)
 */
export type ApiResponse<T> = {
  success?: boolean;
  message?: string;
  data: T;
};

const getAuthHeaders = (token: string) => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
});

/**
 * FETCH BASE REUTILIZABLE
 */
async function request<T>(
  endpoint: string,
  options: RequestInit,
  token: string
): Promise<ApiResponse<T>> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      ...getAuthHeaders(token),
      ...(options.headers || {}),
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "API Error");
  }

  return data;
}

/**
 * TIPOS (importa los tuyos si ya existen)
 */
import { Progress } from "../types/progress";

/**
 * ==========================
 * PROGRESS - GET
 * ==========================
 */
export const getProgress = async (token: string): Promise<Progress> => {
  const response = await request<Progress>(
    "/progress",
    {
      method: "GET",
    },
    token
  );

  return response.data;
};

/**
 * ==========================
 * PROGRESS - UPDATE
 * ==========================
 */
export const updateProgress = async (
  token: string,
  dataUpdate: Partial<Progress>
): Promise<Progress> => {
  const response = await request<Progress>(
    "/progress",
    {
      method: "PUT",
      body: JSON.stringify(dataUpdate),
    },
    token
  );

  return response.data;
};