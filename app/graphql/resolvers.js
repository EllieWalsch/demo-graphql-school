import classController from "../class/controller.js";
import professorController from "../professor/controller.js";
import schoolController from "../school/controller.js";

const resolvers = {
  Query: {
    async indexClasses() {
      // cannot return a promise in a resolver, must include the await
      return await classController.index();
    },
    async indexSchools() {
      return await schoolController.index();
    },
    async indexProfessors() {
      return await professorController.index();
    },
    async class(_, args) {
      return await classController.show(args._id);
    },
  },
  Mutation: {
    async createSchool(_, { name, location, studentCount }) {
      return await schoolController.create({ name, location, studentCount });
    },
    async updateClassBuilding(_, { _id, newBuilding }) {
      return await classController.updateClassBuilding({ _id, newBuilding });
    },
  },
};

export default resolvers;
