class _kandji {
    constructor(subdomain, apikey) {
        this.subdomain = subdomain
        this.apikey = apikey
        this.headers = {
            Authorization: `Bearer ${this.apikey}`,
        }
    }
    /**
     * Retrieves a list of devices from the Kandji API.
     *
     * Constructs a GET request using the provided query parameters and sends it to the Kandji devices endpoint.
     *
     * @param {string} params - The query string parameters to filter or sort the device list.
     * @returns {HTTPResponse} The HTTP response from the API call, which may include the list of devices.
     */
    listDevices(params) {
        var requestOptions = {
            method: 'GET',
            headers: this.headers,
            followRedirects: true,
            contentType: 'application/json',
            // muteHttpExceptions: true,
        };
        return JSON.parse(UrlFetchApp.fetch(`https://${this.subdomain}.api.kandji.io/api/v1/devices?${params}`, requestOptions).getContentText())
    }
    /**
     * 
     */
    getDevice(device_id) {
        var requestOptions = {
            method: 'GET',
            headers: this.headers,
            followRedirects: true,
            contentType: 'application/json',
            // muteHttpExceptions: true,
        };
        return JSON.parse(UrlFetchApp.fetch(`https://${this.subdomain}.api.kandji.io/api/v1/devices/${device_id}`, requestOptions).getContentText())
    }
    /**
     * 
     */
    /**
     * 
     */

    getDeviceDetails(device_id) {
        var requestOptions = {
            method: 'GET',
            headers: this.headers,
            followRedirects: true,
            contentType: 'application/json',
            // muteHttpExceptions: true,
        };
        return JSON.parse(UrlFetchApp.fetch(`https://${this.subdomain}.api.kandji.io/api/v1/devices/${device_id}/details`, requestOptions).getContentText())
    }

    /**
     * 
     */
    updateDevice(device_id, data) {
        var requestOptions = {
            method: 'PATCH',
            headers: this.headers,
            payload: JSON.stringify(data),
            followRedirects: true,
            contentType: 'application/json',
            // muteHttpExceptions: true,
        };
        try {
            const res = UrlFetchApp.fetch(`https://${this.subdomain}.api.kandji.io/api/v1/devices/${device_id}`, requestOptions);
            return JSON.parse(res.getContentText());

        } catch (error) {
            console.log(error)
            return error
        }
    }
    deleteDevice(device_id) {
        var requestOptions = {
            method: 'DELETE',
            headers: this.headers,
            followRedirects: true,
            contentType: 'application/json',
            // muteHttpExceptions: true,
        };
        try {
            const res = UrlFetchApp.fetch(`https://${this.subdomain}.api.kandji.io/api/v1/devices/${device_id}`, requestOptions);
            return JSON.parse(res.getContentText());

        } catch (error) {
            console.log(error)
            return error
        }
    }
    lockDevice(device_id) {
        var requestOptions = {
            method: 'POST',
            headers: this.headers,
            followRedirects: true,
            contentType: 'application/json',
            // muteHttpExceptions: true,
        };
        try {
            const res = UrlFetchApp.fetch(`https://${this.subdomain}.api.kandji.io/api/v1/devices/${device_id}/action/lock`, requestOptions);
            return JSON.parse(res.getContentText());

        } catch (error) {
            console.log(error)
            return error
        }
    }
}
