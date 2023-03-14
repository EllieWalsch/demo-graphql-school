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
  },
};

export default resolvers;
