var express = require('express');

var bookRouter = express.Router();

var books = [
    {
        title: 'Flickan som lekte med elden',
        author: 'Stieg Larsson'
    },
    {
        title: 'Angels Flight',
        author: 'Michael Connolly'
    }
];

bookRouter.route('/')
    .get(function (req, res) {
        res.render('books', {
            nav: [{
                Link: '/Books',
                Text: 'Books'
        }, {
                Link: '/Authors',
                Text: 'Authors'
        }],
            books: books
        });
    });
bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.render('book', {
            nav: [{
                Link: '/Books',
                Text: 'Books'
        }, {
                Link: '/Authors',
                Text: 'Authors'
        }],
            book: books[id];
        });
    });

module.exports = bookRouter;