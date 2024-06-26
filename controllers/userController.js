exports.getAllUser = (req, res) => {
    fetch('https://reqres.in/api/users?page=2')
        .then((response) => response.json())
        .then((data) => {
            // res.json(data)
            res.render('index', {users: data})
        })
};

exports.getUser = (req, res) => {
    fetch('https://reqres.in/api/users/'+req.params.id)
        .then((response) => response.json())
        .then((data) => {
            // res.json(data)
            res.render('user', {user: data})
        })
};