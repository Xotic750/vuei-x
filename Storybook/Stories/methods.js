export default {
  methods: {
    joinClasses(...args) {
      return args.filter(Boolean).join(' ');
    },
    onClick(event) {
      logger.info('click', event);
    },
  },
};
