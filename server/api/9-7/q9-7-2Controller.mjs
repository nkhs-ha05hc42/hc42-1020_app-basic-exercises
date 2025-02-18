import { examsModel } from "./q9-7-2Model.mjs";

const getExamById = async (req, res) => {
  const { id } = req.params;  

  try {
    const exam = await examsModel.getExamById(id);

    if (!exam) {
      return res.status(404).json({ status: "not found" });
    }

    res.json({ status: "success", data: exam });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export const examsController2 = {
  getExamById,  
}