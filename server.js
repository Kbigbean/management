const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '김태빈',
            'birthday': '021205',
            'gender': '남자',
            'job': '학생'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '홍길동',
            'birthday': '021205',
            'gender': '남자',
            'job': '백수'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '이순신',
            'birthday': '021205',
            'gender': '남자',
            'job': '군인'
        },
    ]);
});

app.listen(port, ()=> console.log(`서버 실행${port}`));