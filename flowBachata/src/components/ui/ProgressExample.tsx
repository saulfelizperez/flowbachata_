import { useEffect, useState } from "react";
import { getProgress } from "../../api/client";
import { Progress } from "../../types/progress";

interface Props {
  userId: string;
}

export const ProgressExample = ({ userId }: Props) => {
  const [data, setData] = useState<Progress | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getProgress(userId);
        setData(result);
      } catch (err) {
        setError("Error cargando progreso");
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [userId]);

  if (loading) return <p>Cargando progreso...</p>;

  if (error) return <p>{error}</p>;

  if (!data) return <p>No hay datos disponibles</p>;

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-lg font-bold mb-2">Progreso del usuario</h2>

      <p>
        <span className="font-semibold">Nivel:</span> {data.level}
      </p>

      <p>
        <span className="font-semibold">Clases completadas:</span>{" "}
        {data.completedClasses}
      </p>

      <p>
        <span className="font-semibold">Última actualización:</span>{" "}
        {data.lastUpdated}
      </p>
    </div>
  );
};