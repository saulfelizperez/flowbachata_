const API_URL = "http://localhost:4000/api/v1";

import { Progress } from "../types/progress";
import { ApiResponse } from "../types/api";

const getAuthHeaders = (token: string) => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
});

/**
 * Obtener progreso del usuario autenticado
 */
export const getProgress = async (token: string): Promise<Progress> => {
  const res = await fetch(`${API_URL}/progress`, {
    method: "GET",
    headers: getAuthHeaders(token),
  });

  if (!res.ok) {
    throw new Error("Error fetching progress");
  }

  const data: ApiResponse<Progress> = await res.json();

  return data.data;
};

/**
 * Actualizar progreso del usuario autenticado
 */
export const updateProgress = async (
  token: string,
  dataUpdate: Partial<Progress>
): Promise<Progress> => {
  const res = await fetch(`${API_URL}/progress`, {
    method: "PUT",
    headers: getAuthHeaders(token),
    body: JSON.stringify(dataUpdate),
  });

  if (!res.ok) {
    throw new Error("Error updating progress");
  }

  const result: ApiResponse<Progress> = await res.json();

  return result.data;
};