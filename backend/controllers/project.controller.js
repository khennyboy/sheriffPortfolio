import Project from "../models/Project.js";

// GET /api/projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};

// PUT /api/projects/:id  (protected)
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return the updated doc, not the old one
      runValidators: true,
    });
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
