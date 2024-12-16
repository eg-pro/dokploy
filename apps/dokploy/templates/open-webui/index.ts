import {
	type Schema,
	type Template,
	generateHash,
	generateRandomDomain,
} from "../utils";

export function generate(schema: Schema): Template {
	const mainServiceHash = generateHash(schema.projectName);
	const randomDomain = generateRandomDomain(schema);
	const envs = [
		`OPEN_WEBUI_HOST=${randomDomain}`,
		"OPEN_WEBUI_PORT=8080",
		`HASH=${mainServiceHash}`,
		"OLLAMA_DOCKER_TAG=0.5.1",
		"WEBUI_DOCKER_TAG=0.4.8",
	];

	return {
		envs,
	};
}
