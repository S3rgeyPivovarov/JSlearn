const getData = (url) =>
    new Promise((resolve1, reject) =>
    fetch(url)
        .then(response => response.json())
        .then(json1 => resolve1(json1))
        .catch(err => {
            console.log(err)
            return reject(err)
        }
        )
    )


getData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data, 'sssssssssssssss'))
    .catch(err => console.log(err))
