export class HTTPService {
  get(url) {
    return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open('GET', url);
			xhr.send();
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if(xhr.status === 200) {
						const parsedData = JSON.parse(xhr.response);
						resolve(parsedData);
					} else {
						reject(xhr);
					}
				}
			}
		})
  }

  post(url, data) {
    return new Promise ((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open('POST', url);
			xhr.setRequestHeader('content-type', 'application/json');
			xhr.send((typeof data !== 'string') ? JSON.stringify(data) : data);

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if(xhr.status === 200) {
						const parsedData = JSON.parse(xhr.response);
						resolve(parsedData);
					} else {
						reject(xhr);
					}
				}
			}
		})
  }

  delete(url) {
		return new Promise ((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open('DELETE', url);
		
			xhr.send();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if(xhr.status === 200) {
						const parsedData = JSON.parse(xhr.response);
						resolve(parsedData);
					} else {
						reject(xhr);
					}
				}
			}
		});
  }

  put(url, data) {
		return new Promise ((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open('PUT', url);
			xhr.setRequestHeader('content-type', 'application/json');
			xhr.send(JSON.stringify(data));

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if(xhr.status === 200) {
						const parsedData = JSON.parse(xhr.response);
						resolve(parsedData);
					} else {
						reject(xhr);
					}
				}
			}
		})
	}
}