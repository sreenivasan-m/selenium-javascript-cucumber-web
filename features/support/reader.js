const yaml = require('js-yaml');
const fs = require('fs');

class reader {
    /**
     * Read testData from yml file
     */
    testDataReader() {
        let yamlFile = fs.readFileSync(require.resolve('../testData.yml'), {
            encoding: 'utf8',
        });
        let loadedYaml = yaml.load(yamlFile);
        return loadedYaml;
    }
}

module.exports = reader;
