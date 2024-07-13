/* module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  };
  */

module.exports = {
	transform: {
		'^.+\\.[t|j]sx?$': 'babel-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
