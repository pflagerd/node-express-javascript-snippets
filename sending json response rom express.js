app.get('/api/data', (req, res) => {
    const data = {
        message: 'Hello, World!',
        status: 'success',
        items: [1, 2, 3]
    };

    res.status(200).json({ message: 'Success' });
    // or
    // res.json({ message: 'Success' });
}