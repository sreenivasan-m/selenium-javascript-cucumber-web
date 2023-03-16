const TAGS  = process.env.CUCUMBER_TAG;

module.exports = {
    default: `--publish-quiet
               --tags "${TAGS || '@smoke'}"`,
}
