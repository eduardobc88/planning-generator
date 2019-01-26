
exports.websiteIndex = async (req, res) => {
    res.view('index', {
        title: 'Planning Generator',
    })
}
