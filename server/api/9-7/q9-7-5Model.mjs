import { query } from "../../db/manager.mjs";

const deleteExam = async (id) => {
  const sql = `
    DELETE FROM exams
    WHERE id = $1
    RETURNING *;
  `;
  const result = await query(sql, [id]);
  return result.rows[0]; 
}

export const examsModel = {
  deleteExam,
}