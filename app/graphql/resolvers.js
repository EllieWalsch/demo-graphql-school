import classController from "../class/controller.js";

const resolvers = {
  Query: {
    async indexClasses() {
      // cannot return a promise in a resolver, must include the await
      return await classController.index();
    },
  },
};

export default resolvers;
