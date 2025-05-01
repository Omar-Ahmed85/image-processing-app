export default {
	spec_dir: 'build',
	spec_files: ['server/tests/**/*[sS]pec.?(m)js'],
	helpers: ['server/tests/helpers/reporter.js'],
	env: {
		stopSpecOnExpectationFailure: false,
		random: true,
		forbidDuplicateNames: true,
	},
};
