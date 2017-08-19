/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

const OPP_PATH = path.join(__dirname, 'opportunities');
const ALL_FILE = path.join(__dirname, 'all.json');


const nameSort = (a, b) => {
	const aNickname = a.organization.nickname ? `${a.organization.nickname} ` : '';
	const bNickname = b.organization.nickname ? `${b.organization.nickname} ` : '';
	const aName = `${aNickname}${a.name}`.toUpperCase();
	const bName = `${bNickname}${b.name}`.toUpperCase();

	if (aName > bName) return 1;
	else if (aName < bName) return -1;
	return 0;
};


const Data = {
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
			fs.writeFile(file, JSON.stringify(data), (error) => {
				if (error) reject(error);

				resolve(`  Finished => ${file}`);
			});
		});
	}
};

Data.read(OPP_PATH)
	.then(data => Data.sort(data))
	.then(data => Data.write(data, ALL_FILE))
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error('Error!', error);
	});
