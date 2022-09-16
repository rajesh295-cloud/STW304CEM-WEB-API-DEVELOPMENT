import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';


// POST /api/users/login
// @route   POST /api/users
// @route   GET /api/users/profile
// @route   PUT /api/users/profile
// @route   GET /api/users
// @route   DELETE /api/users/:id
// @route   GET /api/users/:id
// @route   PUT /api/users/:id//      @desc Update user



// assertion style
chai.should();
chai.use(chaiHttp);
describe("Recan WEB API TEST", () => {
    // test the login route
    describe("POST /api/users/login", () => {
        it("user login", (done) => {
            chai.request(server)
                .post('/api/users/login')
                .send({
                    email: "rohit.sah.631@gmail.com",
                    password: "mko0mko0"
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        })
    })
    
}),
chai.should();
chai.use(chaiHttp);
describe("Recan WEB API TEST", () => {
    // test the login route
    describe("GET /api/users/login", () => {
        it("user login", (done) => {
            chai.request(server)
                .get('/api/users')
                .send({
                    _id:"62dea3832fcf6934d4290869",
                    email: "rohit.sah.631@gmail.com",
                    password: "mko0mko0"
                })
                .end((err, res) => {
                    res.should.have.status(404);
                    res.should.be.a('object');
                    done();
                });
        })
    })
    
}),
chai.should();
chai.use(chaiHttp);
describe("Recan WEB API TEST", () => {
    // test the login route
    describe("POST /api/users", () => {
        it("User register", (done) => {
            chai.request(server)
                .post('/api/users')
                .send({
                    name:"Rosa",
                    email: "rosarosa@gmail.com",
                    password: "123456"
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.should.be.a('object');
                    done();
                });
        })
    })
}),
chai.should();
chai.use(chaiHttp);
describe("Recan WEB API TEST", () => {
    // test the login route
    describe("POST /api/users", () => {
        it("User Profile", (done) => {
            chai.request(server)
                .post('/api/users/profile')
                .send({
                    _id:"",
                    name:"Rosa",
                    email: "rosa@gmail.com",
                    password: "123456"
                })
                .end((err, res) => {
                    res.should.have.status(404);
                    res.should.be.a('object');
                    done();
                });
        })
    })
}),
chai.should();
chai.use(chaiHttp);
describe("Recan WEB API TEST", () => {
    // test the login route
    describe("POST /api/users/login", () => {
        it("user login", (done) => {
            chai.request(server)
                .post('/api/users/login')
                .send({
                    email: "10791345@example.com",
                    password: "mko0mko0"
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        })
    })
    
})



























