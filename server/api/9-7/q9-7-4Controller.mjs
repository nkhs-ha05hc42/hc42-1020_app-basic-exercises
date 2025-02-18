import { examsModel } from "./q9-7-4Model.mjs";

const updateExam = async (req, res) => {
  const { id } = req.params;  
  const { user_id, year, month, day, name, score } = req.body;  

  
  if (!user_id || !year || !month || !day || !name || score === undefined) {
    return res.status(400).json({ status: "error", message: "全ての項目が必要です。" });
  }

  try {
    const updatedExam = await examsModel.updateExam(id, user_id, year, month, day, name, score);

    if (!updatedExam) {
      return res.status(404).json({ status: "not found", message: "指定したIDのデータが存在しません。" });
    }

    res.json({ status: "success", data: updatedExam });
  } catch (error) {
    console.error("DBエラー:", error);
    res.status(500).json({ status: "error", message: "データベースエラーが発生しました。" });
  }
}

export const examsController4 = {
  updateExam,
}