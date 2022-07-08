const mongoose = require("mongoose");

const pojectsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    resource: {
      type: Array,
      required: false,
      default: [],
    },
    ganttChart: {
      type: Array,
      required: false,
      default: [],
    },
    startDate: {
      type: Date,
      required: false,
    },
    endDate: {
      type: Date,
      required: false,
    },
    isDeleted: {
      type: Boolean,
      required: false,
      default: false,
    },
    createdBy: {
      type: String,
      required: false,
    },
    updatedBy: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
pojectsSchema.index({ title: 1, description: 1 });
const Projects = mongoose.model("Projects", pojectsSchema);
module.exports = Projects;
