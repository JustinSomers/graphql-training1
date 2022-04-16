import employee from '../service/employee.service';

const resolver = {
  Query: {
    employee: async (parent, args, context) => employee(args, context.dataSources),
  },
};

export default resolver;
