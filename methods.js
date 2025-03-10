/**
 * Creates and returns a new instance of the _kandji object.
 *
 * @param {string} subdomain - The subdomain used for the API connection.
 * @param {string} apikey - The API key for authentication.
 * @returns {_kandji} A new instance of the _kandji object.
 */
function connect(subdomain, apikey) {
    return new _kandji(subdomain, apikey);
}