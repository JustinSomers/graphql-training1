import employee from '../service/employee.service';

const resolver = {
  Query: {
    employee: async (parent, args, context) => {
      const employeeRetval = employee(args, context.dataSources);
      console.log(employeeRetval);
      return employeeRetval;
    },
  },
};

export default resolver;
