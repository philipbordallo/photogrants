/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

import { nameSort } from '../src/utilities/sorts';


const finder = {
	mkdir(directory, data) {
		return new Promise((resolve, reject) => {
			fs.stat(directory, (error, stats) => {
				const isNotDirectory = stats && !stats.isDirectory();
				if (error) {
					fs.mkdirSync(directory);
					console.log(`  Creating => ${directory}`)
					resolve(data);
				}

				if (isNotDirectory) reject(`  ${directory} is not a directory`);
				else resolve(data);
			});
		});
	},

	read(dirname) {
		return new Promise((resolve, reject) => {
			fs.readdir(dirname, (error, filenames) => {
				if (error) reject(error);

				const data = [];

				filenames.forEach((filename) => {
					const readFrom = path.join(dirname, filename);

					if (filename !== '.DS_Store') {
						const content = fs.readFileSync(readFrom, 'utf8');
						data.push(JSON.parse(content));
					}
				});

				resolve(data);
			});
		});
	},

	sort(data) {
		return new Promise((resolve) => {
			data.sort(nameSort);

			resolve(data);
		});
	},

	write(data, file) {
		return new Promise((resolve, reject) => {
			fs.writeFile(file, data, (error) => {
				if (error) reject(error);

				resolve(`  Finished => ${file}`);
			});
		});
	}
};

export default finder;
