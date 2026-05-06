const API_URL = "http://localhost:4000/api/v1";

import { Progress } from "../types/progress";
import { ApiResponse } from "../types/api";

/**
 * Obtener progreso de un usuario
 */
export const getProgress = async (
  userId: string
): Promise<Progress> => {
  const res = await fetch(`${API_URL}/progress/${userId}`);

  if (!res.ok) {
    throw new Error("Error fetching progress");
  }

  const data: ApiResponse<Progress> = await res.json();

  return data.data;
};

/**
 * Actualizar progreso de un usuario
 */
export const updateProgress = async (
  userId: string,
  data: Partial<Progress>
): Promise<Progress> => {
  const res = await fetch(`${API_URL}/progress/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error updating progress");
  }

  const result: ApiResponse<Progress> = await res.json();

  return result.data;
};