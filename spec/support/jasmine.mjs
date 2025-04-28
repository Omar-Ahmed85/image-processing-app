export default {
	spec_dir: 'build',
	spec_files: ['server/tests/**/*[sS]pec.?(m)js'],
	helpers: ['helpers/**/*.?(m)js'],
	env: {
		stopSpecOnExpectationFailure: false,
		random: true,
		forbidDuplicateNames: true,
	},
};
