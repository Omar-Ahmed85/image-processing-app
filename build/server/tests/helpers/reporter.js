import {
	DisplayProcessor,
	SpecReporter,
	StacktraceOption,
	// @ts-ignore
} from 'jasmine-spec-reporter';
class CustomProcessor extends DisplayProcessor {
	displayJasmineStarted(info, log) {
		return `TypeScript ${log}`;
	}
}
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
	new SpecReporter({
		spec: {
			displayStacktrace: StacktraceOption.NONE,
		},
		customProcessors: [CustomProcessor],
	}),
);
